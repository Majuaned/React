import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//Esta funcion es la q se va a ejecutar por cada vez q se cargue la página...
//exista una triple conexión...
// 1- el index html se construye, se le llama al script
// 2- el script importa una serie de cosas, un único componente, el cual se inyecta en <App/>>, mediante el método de render, q renderiza lo q esta en el componente...todo lo q se escriba dentro del componente, será visible dentro de la aplicación o página?
function App() {
  const [count, setCount] = useState(0)
   //todo lo q esta despues del return es jsx
   //q es básicamente codigo html, pero inyectado mediante react
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          VAMOS JUAN VOS PODES CARAJO!!!!!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
