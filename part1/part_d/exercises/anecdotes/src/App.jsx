import { useState } from 'react'
import Button from './components/Button'

import React from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const voteList = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteList)

  const mostVotes = Object.entries(votes).sort((a,b) => b[1] - a[1])[0][0]

  const newVote = () => {
    const newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const newAnecdoteList = () => {
    const randomize = Math.floor(Math.random() * anecdotes.length)
    setSelected([randomize])
  }


  return (
    <>
      <div style={{height: '50px'}}>{anecdotes[selected]}</div>
      <div style={{marginTop: '10px'}}>♥ {votes[selected]}</div>
      <section style={{display: 'flex'}}>
        <Button handleClick={newAnecdoteList} text={'Randomize'}/>
        <Button handleClick={newVote} text={'Like'}/>
      </section>

      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVotes]}</div>
    </>
  )
}

export default App