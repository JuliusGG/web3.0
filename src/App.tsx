import React from 'react';
import logo from './logo.svg';
import './App.css';
import { default as Welcome } from './web/pages/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='flex-stretch'>a fact</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='flex-stretch'>nice quote that takes a lot of space</p>
      </header>
      <Welcome message="oh hi mark" />
    </div>
  );
}

export default App;
