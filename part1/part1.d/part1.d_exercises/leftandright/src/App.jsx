/* eslint-disable react/prop-types */
import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  //Group Related state
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})

    const updatedLeft = clicks.left + 1
    setTotal(updatedLeft + clicks.right)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
    
    const updatedRight = clicks.right + 1
    setTotal(updatedRight + clicks.left)
  }


  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
      <History allClicks={allClicks}/>
      <div>
        Total: {total}
      </div>
     </div>
  )
}

export default App

// export default function Form() {
//   const [name, setName] = useState({first: '', last: ''});

//   function handleFirstNameChange(e) {
//     const johnHancock = {
//       ...name,
//       first: e.target.value,
//       last: name.last,
//     }
//     setName(johnHancock)
//   }
//   function handleLastNameChange(e) {
//     const johnHancock = {
//       ...name,
//       last: e.target.value,
//     }
//     setName(johnHancock)
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={name.first}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={name.last}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{name.first + ' ' + name.last}</b>
//       </p>
//     </>
//   );
// }
