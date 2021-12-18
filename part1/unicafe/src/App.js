import React, { useState } from 'react'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = value => setGood(value)
  const handleNeutral = value => setNeutral(value)
  const handleBad = value => setBad(value)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={() => handleGood(good + 1)}/>
      <Button text="neutral" handleClick={() => handleNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => handleBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

const Statistics = props => {
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </>
  );
}

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

export default App;
