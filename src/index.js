// Este archivo configura y renderiza la aplicación React en el navegador.
// Utiliza ReactDOM.createRoot para renderizar la aplicación React 18 en modo estricto,
// junto con BrowserRouter para manejar el enrutamiento utilizando react-router-dom.

import React from 'react'; // Importa React
import ReactDOM from 'react-dom'; // Importa ReactDOM para renderizar en el DOM
import './index.css'; // Importa estilos CSS globales
import App from './App'; // Importa el componente principal App
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos de Bootstrap
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes de react-router-dom

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea un contenedor de raíz para renderizar la aplicación React
root.render( // Renderiza la aplicación dentro del contenedor de raíz
  <React.StrictMode> {/* Modo estricto de React para identificar problemas potenciales en la aplicación */}
    <BrowserRouter> {/* Proveedor de enrutamiento para la aplicación */}
      <Routes> {/* Componente de enrutamiento */}
        <Route path='/*' element={<App />}/> {/* Define la ruta principal que renderiza el componente App */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);