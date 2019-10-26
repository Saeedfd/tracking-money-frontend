import React from 'react';
import './wallet.css';
import { Button} from 'react-bootstrap';



const Wallet =() => {
// const Button = styled.button`
  /* Adapt the colors based on primary prop */
  // background: ${props => props.primary ? "palevioletred" : "white"};
  // color: ${props => props.primary ? "white" : "palevioletred"};
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;
return(
	<div className="container">
	    <Button variant="info" size="lg" block>Wallet</Button>
	    <div className="container walletSetting">
	  		<Button variant="outline-warning">+</Button>
	  		<Button variant="outline-secondary">edit</Button>
	   		<Button variant="outline-danger">-</Button>
	   	</div>
  	</div>
);
}




export default Wallet;
