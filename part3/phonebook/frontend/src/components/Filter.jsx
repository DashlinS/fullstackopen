/* eslint-disable react/prop-types */
function Filter({ filteredName, setFilteredName }) {
  return (
    <>
      <div>
        Filter Numbers with: 
        <input type="text" 
          value={filteredName} 
          onChange={(e) => setFilteredName(e.target.value)}
        />
      </div>
    </>
  )
}

export default Filter
