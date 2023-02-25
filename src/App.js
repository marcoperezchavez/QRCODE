import logo from './assets/pmfoxtechnologiesBanner.png';
import './App.css';
import QrComponent from './components/qrcomponent';
import FormularioComponent from './components/formularioComponent';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [size, setSize] = useState(0);
  const [mensaje, setMensaje] = useState(0);

  const ReadDatos = (size,mensaje) =>{
    setSize(size)
    setMensaje(mensaje)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <div>{
          size > 0 &&
          <QrComponent size = {size} mensaje = {mensaje} ></QrComponent>
          }
        </div>
        PMFOX TECHNOLOGIES
        <FormularioComponent ReturnDatos = {ReadDatos}></FormularioComponent>
        
      </header>
    </div>
  );
}

export default App;
