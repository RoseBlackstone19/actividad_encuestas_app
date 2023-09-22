import React from 'react';
import './App.css';

import Encuestas from './components/Encuestas';
function App() {
  const encuestas = [
    { id: 1, pregunta: <span style={{ fontWeight: 'bold' }}>¿Cuál es tu color favorito?</span>, opciones:['Rojo', 'Azul', 'Verde'] },
    { id: 2, pregunta: <span style={{ fontWeight: 'bold' }}>¿Cuál es tu comida favorita?</span>, opciones:['Pizza', 'Hamburguesa', 'Sushi'] },
  ];
  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;