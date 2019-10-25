import React from 'react';
import logo from './logo.svg';
import Wallet from './wallet';
import Navbar from './navbar.js';
import './App.css';


const App= ()=> {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <Wallet></Wallet>
       <Wallet></Wallet>
      </header>
    </div>
  );
}

export default App;
