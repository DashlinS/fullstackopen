import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import People from './components/People'
import { personServices } from './services/personServices'

const { 
  getPersons, 
  createPersons 
} = personServices

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [personName, setPersonName] = useState('')
  const [number, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  

  const search = persons.filter(person => person.name.match(capitalizedName(filteredName)))

  useEffect(() => {
    getPersons()
    .then(initialPerson => 
      setPersons(initialPerson)
    )
  }, [])

  const addName = (e) => {
    e.preventDefault();
    // conditional to check if person name exists in phone book
    if(persons.filter(person => person.name == capitalizedName(personName)).length === 0){

      const personObject = {
        name: capitalizedName(personName),
        number: number
      } 

      // axios.post(personObject)
      // .then(response => setPersons(persons.concat(response.data)))
      createPersons(personObject)
      .then(initialCreate => 
        setPersons(persons.concat(initialCreate))
      )

    } else {
      window.alert(`${personName} is already added to Phonebook`)
    }
    
    setPersonName('')
    setNumber('')
  }
  
  // function to capitalize name given and handle case insensitive requests
  function capitalizedName(changeName){
    if(changeName.includes(' ')){
      let myName = changeName.split(' ')
      return myName.map(word => 
        word.slice(0,1)
        .toUpperCase() + 
        word.slice(1))
        .join(' ')
    }
      return changeName.slice(0,1).toUpperCase() + changeName.slice(1)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredName={filteredName} setFilteredName={setFilteredName}/>
      <h3>Add Name</h3>
      <Form addName={addName} personName={personName} setPersonName={setPersonName} setNumber={setNumber} number={number} />
      <h3>Numbers</h3>
      <People search={search} />
    </div>
  )
}

export default App