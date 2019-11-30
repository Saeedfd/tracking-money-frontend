import React from 'react';
import { Navbar, Button, NavDropdown,Nav,Form,FormControl,Col,Image  } from 'react-bootstrap';


const navbox =() => {

  return (
    <div>
   	<Navbar bg="light" expand="lg">
  	<Navbar.Brand href="#home">Track your money</Navbar.Brand>
  	<Navbar.Toggle aria-controls="basic-navbar-nav" />
  	<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" roundedCircle>Search</Button>
      		<Image src={require("./images/dollar.png")} roundedCircle  width={30}/>
    </Form>
  	</Navbar.Collapse>
	</Navbar>
    </div>
  );
}


export default navbox;
