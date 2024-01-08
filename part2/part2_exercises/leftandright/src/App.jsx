// import { useState } from "react"

// const App = () => {
//   //Group Related state
//   const [clicks, setClicks] = useState({left: 0, right: 0})
//   const handleLeftClick = () => {
//     setClicks({...clicks, left: clicks.left + 1})
//   }

//   const handleRightClick = () => {
//     setClicks({...clicks, right: clicks.right + 1})
//   }


//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>
//         left
//       </button>
//       <button onClick={handleRightClick}>
//         right
//       </button>
//       {clicks.right}
//     </div>
//   )
// }

// export default App

import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState({first: '', last: ''});

  function handleFirstNameChange(e) {
    const johnHancock = {
      ...name,
      first: e.target.value,
      last: name.last,
    }
    setName(johnHancock)
  }
  function handleLastNameChange(e) {
    const johnHancock = {
      ...name,
      last: e.target.value,
    }
    setName(johnHancock)
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={name.first}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={name.last}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{name.first + ' ' + name.last}</b>
      </p>
    </>
  );
}
