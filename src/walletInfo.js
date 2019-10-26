import React from 'react';
import { Card, Button } from 'react-bootstrap';
import  './wallet.css';


const WalletCard =() => {

  return (
    <div className="WalletCard">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='logo.svg' />
      <Card.Body>
      <Card.Title>Total balance</Card.Title>
      <Card.Text>
     total balance of this month is: 200$
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  );
}


export default WalletCard;
