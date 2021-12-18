import React, { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setIndex = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const setVotecount = votecount => {
    const copy = [...votes]
    copy[selected] = votecount
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" handleClick={() => setVotecount(votes[selected] + 1)}/>
      <Button text="next anecdote" handleClick={() => setIndex()}/>
      <br></br>
      <h1>Anecdote with most votes</h1>
      <h2>{anecdotes[votes.indexOf(Math.max(...votes))]}</h2>
      <p></p>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

export default App;
