import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './wallet.css';


const WalletInfo =(props) => {

  return (
    <div className="WalletCard">
      <Card style={{ width: '18rem' }}>
      {/*<Card.Img variant="top" src={require('./images/dollar.png')} roundedCircle/>*/}
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
     total balance of this month is: 200$
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  );
}


export default WalletInfo;
