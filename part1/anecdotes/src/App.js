import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0]);
  //let vote = Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  //this outputs [0, 0, 0, 0, 0, 0, 0]

  const getRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  }

  const Vote = () => {
    const voteCopy = [...vote];
    voteCopy[selected] += 1;
    setVote(voteCopy);
  }
  
  return (
    <div>
      {anecdotes[selected]} <br />
      <p>has {vote[selected]} votes</p>
      <Button handleClick={Vote} text="vote"/>
      <Button handleClick={getRandomAnecdote} text="next anecdote"/>
    </div>
  )
};

export default App;
