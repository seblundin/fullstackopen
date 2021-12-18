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

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    const all = good+neutral+bad
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><StatisticLine text="good" value={good}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral" value={neutral}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="bad" value={bad}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="all" value={all}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="average" value={(good-bad)/all}/></td>
            </tr>
            <tr>
              <td><StatisticLine text="positive" value={good/all*100 + "%"}/></td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  return (<p>No feedback given</p>);
}

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Button = ({text, handleClick}) => {
  return <button onClick={handleClick}>{text}</button>
}

export default App;
