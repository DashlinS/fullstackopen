/* eslint-disable react/prop-types */
function Total({items}) {
  const collection = []

  items.forEach(function(item){
    collection.push(item.exercises)
  })
  
  const total = collection.reduce((acc, val) => acc + val, 0)

  // let total = 0;
  
  //  items.forEach(item => {
  //     total += item.exercises
  //   });

  return (
    <div>
      <p>Total of {total} exercises</p>
    </div>
  )
}

export default Total
