import React , {Component} from 'react';
import Wallet from './components/wallet';
import Navbar from './components/navbar.js';
import Login from './components/loginPage.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return(
        <div className="App">
            {/*<Login></Login>*/}
            <Navbar></Navbar>
            <Wallet ></Wallet>
        </div>
        );
    }
};

export default App;
