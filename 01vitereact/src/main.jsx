import { StrictMode } from 'react'
import React  from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <h1>Custom App (MyApp)!</h1>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (

    <a href="https://google.com" target="_blank">Click me to visit google</a>
);

const anotherUsser = "abir khan";

const ReactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit google',
    anotherUsser
)

createRoot(document.getElementById('root')).render(
    
        //<App />
        ReactElement
    
)
