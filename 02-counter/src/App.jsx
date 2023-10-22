import { useState } from 'react';
import './App.css'

function App() {
  // this cant be update in UI
  // let counter = 0; to update UI in react, useState hook is used

  // first here is var, second is a function
  let [counter, setCounter] = useState(0);  // can be let
  // const [counter, setCounter] = useState(0);

  const addvalue = () => {
    // working same as below if its let, right now it is const
    // counter = counter + 1;
    // setCounter(counter);
    if(counter >= 10) {}
    else{
      setCounter(counter + 1); // state and UI sync now
    }

  }

  const DelValue = () => {
    counter = counter - 1;
    if(counter < 0) {}
    else{
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={addvalue}  // just passing the method's reference bcuz it will only execute by clicking the button 
      >Plus ++</button>
      <button
        onClick={DelValue}
      >Minus -- </button>

      <p>{counter}</p> 
      {/* hook will update it everywhere */}
    </>
  )
}

export default App
