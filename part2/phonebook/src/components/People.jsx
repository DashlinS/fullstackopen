/* eslint-disable react/prop-types */
function People({ search }) {
  return (
    <>
      <h2>Numbers</h2>
      {search.map((person, i) => 
        <p key={i}>
          {person.name} {person.number}
        </p>
      )}
    </>
  )
}

export default People
