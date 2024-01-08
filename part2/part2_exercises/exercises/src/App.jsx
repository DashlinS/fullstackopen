import { useState } from 'react'
import Statistics from '../components/Statistics'
import Button from '../components/Button'
// import StatisticLine from '../components/StatisticLine'

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

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad,
    positive: (good / (good + neutral + bad)) * 100,
    empty: 'No feedback given.'
  }

  return (
    <>
      <div>
        <h2>Give Feedback</h2>
        <Button text={'Good'} onHandleClick={handleGoodClick} />
        <Button text={'Neutral'} onHandleClick={handleNeutralClick} />
        <Button text={'Bad'} onHandleClick={handleBadClick} />
      </div>
      <Statistics stats={stats}/>
    </>
  )
}

export default App