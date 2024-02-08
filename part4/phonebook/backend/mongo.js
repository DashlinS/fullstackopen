const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}
const url = 'moved url';

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

//process.argv
let personMap = new Map();

process.argv.forEach((v, i) => {
  personMap.set(i, v);
});

const person = new Person({
  name: personMap.get(3),
  number: personMap.get(4),
});

if (process.argv.length === 3) {
  // Fetching objects from database
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
} else {
  // Generating new notes
  person.save().then(() => {
    console.log(`added ${person.name} ${person.number} to phonebook`);
    mongoose.connection.close();
  });
}
