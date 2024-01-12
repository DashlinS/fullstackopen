/* eslint-disable react/prop-types */
function Form({ addName, personName, setPersonName, setNumber, number }) {
  return (
    <>
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
    </>
  )
}

export default Form
