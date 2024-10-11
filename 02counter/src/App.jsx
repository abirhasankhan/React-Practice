import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  //let counter = 0;

  /**
   * Function to add a value to the counter
   */
  const addValue = () => {

    if (counter >= 20) return;
    
    counter = counter + 1;
    setCounter(counter);

    // /**
    //  * Update the counter in the state
    //  * This is done by calling the setCounter function
    //  * The setCounter function takes a callback function as an argument
    //  * This callback function takes the previous value of the counter as an argument
    //  * The callback function returns the new value of the counter
    //  */
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);    
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    
    console.log("clicked ",counter);

  }

  const removeValue = () => {

    if (counter <= 0) return;

    counter = counter - 1;

    setCounter(counter);
    
    console.log("clicked ",counter);

  }
  

  return (
    <>
      <h1>tea or react !</h1>

      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value
      </button>
      <br />
      <button onClick={removeValue}>
        Remove value
      </button>

      <p>footer: {counter}</p>

    </>
  )
}

export default App
