/* eslint-disable react/prop-types */
function People({ onSearch, onDelete }) {
  return (
    <>
      {onSearch.map((person) => 
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => onDelete(person.id, person.name)}>Delete</button>
        </p>
      )}
    </>
  )
}

export default People
