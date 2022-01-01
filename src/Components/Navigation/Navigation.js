import React from 'react';
import './Navigation.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
const Navigation = () => {
  const {user,logout}=useAuth();
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
        
      
     
   
        {/* {user?.email?
        <div className="d-md-flex  align-items-center">
          

          <Navbar.Text>
        Signed in as: <a href="#login">{
        user.displayName? `${user?.displayName}`:`${user?.email}`
        }</a>
       
       </Navbar.Text>
         <Nav.Link as={Link} to="/home"><Button onClick={logout} variant="light">Logout</Button> {' '}</Nav.Link>
        </div>:
        
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
        
         */}
        
      </Nav>
      
    </Navbar.Collapse>
</Container>
</Navbar>
  </>

  );
};

export default Navigation;