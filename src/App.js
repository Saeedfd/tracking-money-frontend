import React from 'react';
import logo from './logo.svg';
import Wallet from './wallet';
import Navbar from './navbar.js';
import WalletCard from './walletCard.js';
import WalletInfo from './walletInfo.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= ()=> {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Wallet></Wallet>
       <Wallet></Wallet>
       <WalletInfo></WalletInfo>
       <WalletInfo></WalletInfo>
       <WalletInfo></WalletInfo>
       <WalletCard></WalletCard>
    </div>
  );
}

export default App;
