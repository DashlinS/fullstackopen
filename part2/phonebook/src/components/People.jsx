/* eslint-disable react/prop-types */
function People({ search }) {
  return (
    <>
      {search.map((person) => 
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      )}
    </>
  )
}

export default People
