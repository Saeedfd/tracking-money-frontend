import React from 'react';
import './App.css';
import styled from 'styled-components';



const Wallet =() => {
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
return(
  <div>
    <Button>Wallet</Button>
    <ul>
    	<li>add</li>
     	<li>edit</li>
      	<li>remove</li>
    </ul>
  </div>
);
}




export default Wallet;
