import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const review = good + 1
    setGood(review)
  }
    const handleNeutralClick = () => {
    const review = neutral + 1
    setNeutral(review)
  }
    const handleBadClick = () => {
    const review = bad + 1
    setBad(review)
  }

  const sum = good + bad + neutral
  const positive = (good / sum) * 100

  return (
    <>
      <div>
        <h2>Give Feedback</h2>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {sum}</p>
        <p>Average {sum / 3}</p>
        <p>Positive {positive} %</p>
      </div>
    </>
  )
}

export default App