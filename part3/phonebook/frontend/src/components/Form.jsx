/* eslint-disable react/prop-types */
function Form({ onAddName, personName, setPersonName, setNumber, number }) {
  return (
    <>
     <form onSubmit={onAddName}>
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
            required
            placeholder="00-000000"
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
