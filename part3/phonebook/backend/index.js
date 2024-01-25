const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

morgan.token('ob', function (req) {
  return `${JSON.stringify(req.body)}`;
});

app.use(
  morgan(
    `:method :url :status :res[content-length] - :response-time ms :req[header] :ob`
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

app.use(requestLogger);
//needed for http post requests
app.use(express.static('dist'));
app.use(express.json());
app.use(cors());

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

//create generate id function
const generateId = () => {
  const maxId = persons.length > 0 ? Math.floor(Math.random() * 1000) + 1 : 0;
  return maxId;
};

app.get('/info', (request, response) => {
  const date = new Date();

  response.send(
    `<body>
    <p>This phone book has info for ${persons.length} people</p>
    <p>${date}</p>
    </body>`
  );
});

app.get('/persons', (request, response) => {
  response.json(persons);
});

app.get('/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    //send status 404 and end
    response.status(404).end();
  }
});

app.delete('/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  //replace old object with new filtered object
  persons = persons.filter((person) => person.id !== id);
  console.log('deleting...');
  //send status for no content and end
  response.status(204).end();
});

app.post('/persons', (request, response) => {
  const newPerson = {
    id: generateId(),
    name: 'Tom Johnson',
    number: '23-3232-3232',
  };

  const exists = persons.filter((person) => person.name === newPerson.name);

  if (exists.length !== 0) {
    return response.status(409).json({
      error: 'name must be unique',
    });
  } else if (!newPerson.name || !newPerson.number) {
    return response.status(422).json({
      error: 'missing number or Name',
    });
  }

  persons = persons.concat(newPerson);

  response.json(newPerson);

  morgan.token('param', function (req, res, param) {
    return req.params[param];
  });
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
