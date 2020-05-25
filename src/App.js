import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor.js'

function App() {
  return (
    <div className="App">
      {/* <Conversor moedaA="USD" moedaB="BRL"></Conversor> */}
      <Conversor />
    </div>
  );
}

export default App;
