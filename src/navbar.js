import React from 'react';
import styled from 'styled-components'




const Navbar =() => {
 const Nav = styled.div`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rebeccapurple;
  border-radius: 3px;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 35px;
`;

  return (
    <div>
    <Nav>TrackingMoney</Nav>
    
    </div>
  );
}


export default Navbar;
