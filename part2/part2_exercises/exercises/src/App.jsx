/* eslint-disable react/prop-types */

import { useState } from 'react'
import Statistics from '../components/Statistics'
import Button from '../components/Button'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [review, setReview] = useState({good: 0, neutral: 0, bad: 0})

  const goodReview = () => setReview({...review, good: review.good + 1})
  const neutralReview = () => setReview({...review, neutral: review.neutral + 1})
  const badReview = () => setReview({...review, bad: review.bad + 1})

  const stats = {
    good: review.good,
    neutral: review.neutral,
    bad: review.bad,
    all: review.good + review.neutral + review.bad,
    positive: (review.good / (review.good + review.neutral + review.bad)) * 100,
    empty: 'No feedback given.'
  }

  return (
    <>
      <div>
        <h2>Give Feedback</h2>
        <Button text={'Good'} onHandleClick={goodReview} />
        <Button text={'Neutral'} onHandleClick={neutralReview} />
        <Button text={'Bad'} onHandleClick={badReview} />
      </div>
      <Statistics stats={stats} />
    </>
  )
}

export default App