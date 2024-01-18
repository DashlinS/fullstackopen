import { useState, useEffect } from "react"
import axios from "axios"


function App() {
  const [countries, setCountries] = useState([])
  const [value, setValue] = useState('')
  
  const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
  
  useEffect(() => {
    if(value){
      axios.get(`${url}`)
      .then(response => {
        const places = response.data.filter(place => place.name.common.match(value))
        setCountries(places)
      })
    }
  }, [value])

  const addInput = (e) => {
    const val = e.target.value  
    const newVal = val.slice(0,1).toUpperCase() + val.slice(1)
    setValue(newVal)
  }
  
  return (
    <>
      <form>
        Find Countries <input type="search" value={value} onChange={addInput}/>
      </form>
      {countries.map((country, i) => (
        <p key={i}>
          {country.name.common}
        </p>
      ))}
    </>
  )
}

export default App
