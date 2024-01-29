const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Person = require('./models/people');

const app = express();

morgan.token('ob', function (req) {
  return `${JSON.stringify(req.body)}`;
});

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :req[header] :ob'
  )
);

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(express.static('dist'));
app.use(express.json());
app.use(requestLogger);
app.use(cors());

let persons = [];

app.get('/info', (request, response) => {
  const date = new Date();

  response.send(
    `<body>
    <p>This phone book has info for ${Person.length} people</p>
    <p>${date}</p>
    </body>`
  );
});

app.get('/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get('/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        //send status 404 and end
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});
app.delete('/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post('/persons', (request, response, next) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({
      error: 'name missing',
    });
  }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });

  const exists = persons.filter((person) => person.name === newPerson.name);

  if (exists.length !== 0) {
    return response.status(409).json({
      error: 'Name must be unique',
    });
  } else if (!newPerson.name || !newPerson.number) {
    return response.status(422).json({
      error: 'Missing credentials',
    });
  }

  newPerson
    .save()
    .then((savedPerson) => {
      console.log('new person saved');
      response.json(savedPerson);
    })
    .catch((error) => next(error));

  morgan.token('param', function (req, res, param) {
    return req.params[param];
  });
});

app.put('/persons/:id', (request, response, next) => {
  const { name, number } = request.body;

  Person.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then((updatedPhoneBook) => {
      response.json(updatedPhoneBook);
    })
    .catch((error) => next(error));
});

//handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

//handler of requests with result to errors
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
