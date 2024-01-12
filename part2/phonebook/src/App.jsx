import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas',
      number: '040-123-4567' },
      { name: 'Dashlin Sermeil',
      number: '040-123-4567' },
      { name: 'Kim Flores',
      number: '040-123-4567' }
  ]) 
  const [personName, setPersonName] = useState('')
  const [number, setNumber] = useState('')

  const addName = (e) => {
    e.preventDefault();

    const name = {
      name: capitalizedName(),
      number: number
    } 
    //Capitalizes name input and any string with multiple words
    function capitalizedName(){
      if(personName.includes(' ')){
        let myName = personName.split(' ')
        return myName.map(word => 
          word.slice(0,1)
          .toUpperCase() + 
          word.slice(1))
          .join(' ')
      }
        return personName.slice(0,1).toUpperCase() + personName.slice(1)
    }
    
    //function for filtering existing names
    const nameExists = persons.filter(person => person.name == name.name)
    
    if(nameExists.length === 0 ){
      setPersons(persons.concat(name))
    } else {
      window.alert(`${name.name} is already added to Phonebook`)
    }
    setPersonName('')
    setNumber('')
  }

  const filterName = (e) => {
    return persons.filter(person => person.name === e.target.name)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        Filter Numbers with: 
        <input type="text" onChange={filterName}/>
      </div>
      
      <h2>Add</h2>
      <form onSubmit={addName}>
        <div>
          Name: 
          <input
            placeholder='Name' 
            value={personName} 
            onChange={(e) => setPersonName(e.target.value)}
          />
        </div>
        <div>
          Number: 
          <input
            type='tel'
            placeholder='000-000-0000'
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => 
        <p key={i}>
          {person.name} {person.number}
        </p>
      )}
    </div>
  )
}

export default App