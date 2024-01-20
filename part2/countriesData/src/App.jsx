import { useState, useEffect } from "react"
import Countries from "./components/countries"
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
    else {
      setCountries([])
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
    <Countries countries={countries}/>
    </>
  )
}

export default App
