import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    name: "abir",
    age: 20
  };

  let myArr = [1,2,3,4,5];



  
  return (
    <>
      <h1 className="bg-green-500 text-black p-4
      rounded-xl">Tailwind Test</h1>


      <Card username="Abir" btnText="Click me"/>

      <Card username="Tonmoy" btnText="visit me"/>



    </>
  )
}

export default App
