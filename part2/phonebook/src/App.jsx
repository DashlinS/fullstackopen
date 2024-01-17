import { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import People from './components/People'
import { personServices } from './services/personServices'

const { 
  getPersons, 
  createPersons,
  deletePersons,
  updatePersons
} = personServices

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [personName, setPersonName] = useState('')
  const [number, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')  

  const handleSearch = persons.filter(person => person.name.match(capitalizeName(filteredName)))

  // Get Request
  useEffect(() => {
    getPersons()
    .then(initialPerson => 
      setPersons(initialPerson)
    )
  }, [])

  const handleAddName = (e) => {
    e.preventDefault();
    const personIncluded = persons.filter(person => person.name == capitalizeName(personName))
    // conditional to check if person name exists in phone book
    if(personIncluded.length === 0){

      const personObject = {
        name: capitalizeName(personName),
        number: number
      } 

      //Post Request
      createPersons(personObject)
      .then(initialCreate => 
        setPersons(persons.concat(initialCreate))
      )
    } else {
      const confirm = window.confirm(`${personName} is already added to Phonebook, replace the old number with a new one?`)

      if(confirm){
        const id = personIncluded[0].id
        const updateNum = {...personIncluded[0], number: number}
        const updatePerson = persons.map(obj => obj.id === id ? updateNum : obj)
        
        //Update Request
        updatePersons(id, updateNum)
        .then(setPersons(updatePerson))
      }
    }
    
    setPersonName('')
    setNumber('')
  }
  
  // function to capitalize name given and handle case insensitive requests
  function capitalizeName(changeName){
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

  const handleDelete = (id, person) => {
    const newPersons = persons.filter(person => person.id !== id)
    const confirm = window.confirm(`Delete ${person}'s Contact Information?`)
    if(confirm){
      //Delete Request
      deletePersons(id).then(setPersons(newPersons))
    }
    return;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredName={filteredName} setFilteredName={setFilteredName}/>
      <h3>Add Name</h3>
      <Form onAddName={handleAddName} personName={personName} setPersonName={setPersonName} setNumber={setNumber} number={number} />
      <h3>Numbers</h3>
      <People onSearch={handleSearch} onDelete={handleDelete} />
    </div>
  )
}

export default App