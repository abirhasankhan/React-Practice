import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  //let counter = 0;

  const addValue = () => {

    if (counter >= 20) return;

    counter = counter + 1;

    setCounter(counter);
    
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
