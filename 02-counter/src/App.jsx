import { useState } from 'react';
import './App.css'

function App() {
  // this cant be update in UI
  // let counter = 0; to update UI in react, useState hook is used

  // first here is var, second is a function
  const [counter, setCounter] = useState(0);  // can be let

  // const [counter, setCounter] = useState(0);
  // --this setCounter here is a callback function 

  const addvalue = () => {
    // working same as below if its let, right now it is const
    // counter = counter + 1;
    // setCounter(counter);

    // setCounter(counter + 1); // state and UI sync now

    // interview question, will it jump to 5
    // { batch / it is taken as a repeat, so it will inc by 1.
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // } 
    // -- useState send update in batches


    // setCounter(counter + 1);
    // prevCounter fetch last updated state 
    // setCounter((prevCounter) => { 
    //   return prevCounter + 1 
    // })
    
    setCounter(prevCounter => prevCounter + 1) // shortend
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // now increament will be by 4
  }

  const DelValue = () => {
    // counter = counter - 1; //if var is let it will work

    setCounter(counter - 1);
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
