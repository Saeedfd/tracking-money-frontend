import React , {Component} from 'react';
import Wallet from './wallet';
import Navbar from './navbar.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return(
        <div className="App">
            <Navbar></Navbar>
            <Wallet ></Wallet>
        </div>
        );
    }
};

export default App;
