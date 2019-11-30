import React from 'react';
import { Table} from 'react-bootstrap';
import  './wallet.css';


const WalletCard =() => {

  return (
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Type</th>
      <th>Category</th>
      <th>Description</th>
      <th>Date</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>image/text</td>
      <td> travel expense</td>
      <td>travel to Berlin</td>
      <td>12.12.2019</td>
      <td>20$</td>
    </tr>
    <tr>
        <td>2</td>
        <td>image/text</td>
        <td> travel expense</td>
        <td>travel to Berlin</td>
        <td>12.12.2019</td>
        <td>20$</td>
    </tr>
    <tr>
      <td colSpan="5">Total Expense</td>
      <td>40$</td>
    </tr>
  </tbody>
</Table>
  );
};


export default WalletCard;
