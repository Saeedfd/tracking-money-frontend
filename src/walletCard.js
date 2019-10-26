import React from 'react';
import { Table} from 'react-bootstrap';
import  './wallet.css';


const WalletCard =() => {

  return (
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Expense</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>bread</td>
      <td> for the breakfast</td>
      <td>20$</td>
    </tr>
    <tr>
      <td>2</td>
      <td>rent</td>
      <td>home rent</td>
      <td>360$</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Total Expense</td>
      <td>380$</td>
    </tr>
  </tbody>
</Table>
  );
}


export default WalletCard;
