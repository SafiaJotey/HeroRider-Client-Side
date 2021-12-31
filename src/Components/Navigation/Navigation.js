import React from 'react';
import './Navigation.css';
import { Navbar,Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      
  
    <Navbar className="menu" collapseOnSelect expand="lg"  variant="dark" >
<Container>
<Navbar.Brand as={Link} to="/home" className="logo" >Hero Rider</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto d-flex  align-items-center">
    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
    
    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
     </Nav>
     {/* <Nav className="ms-auto d-flex  align-items-center">
    
     </Nav>
     <Nav className="ms-auto d-flex  align-items-center">
    
     </Nav> */}
  
  
</Navbar.Collapse>
</Container>
</Navbar>
  </>

  );
};

export default Navigation;