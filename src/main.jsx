import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

// function Sample() {
//
//   return (
//     <>
//       <h1>hello world</h1>
//       <p>hello world description</p>
//       <input type="text" />
//       <span >hsgdhfsh</span>
//     </>
//   )
// }

//camelCase
//helloWorldIAm
//snake_case
//hello_world_i_am