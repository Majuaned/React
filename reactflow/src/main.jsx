import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'  //es modules
import './index.css'  //esta línea de css puede borrarse, si es q yo voy a usar mis estilos

//selecciona un elemento por su id (root), y lo renderiza (metodo render ".render") renderiza algo... un COMPONENTE!!! no se llama pagina, elemento sino componente...
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//NOTA: En react, la sintaxis de un componente es igual a la etiqueta de HTML, con la diferencia de q en react, los componente comienzan siempre con letra MAYÚSCULA!!!

// el componente como tal esta escrito en un ARCHIVO, el cual se importa con la sintaxis de es modules, el cual es similar al require...common js....Este archivo, en este caso app es el primer archivo creado por o con el escafol...
// lo del main practicamente no se toca, el importa el archivo q tenemos q tocar, el componente... en nuestro caso APP.JSX
