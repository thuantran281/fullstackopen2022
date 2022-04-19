import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.feedback}</h1>
}

const Header1 = (props) => {
  console.log(props)
  return <h1>{props.statistics}</h1>
}

const Text = (props) => {
  return (
    <>
      {props.text}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const feedback = "give feedback"
  const statistics = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header feedback={feedback} />
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Header1 statistics={statistics} />
      <Text text="good"/> {good}<br /> 
      <Text text="neutral"/> {neutral} <br /> 
      <Text text="bad"/> {bad}
    </div>
  )
}

export default App