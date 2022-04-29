import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <header> 
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand className="d-inline-block  "
               as={Link} to ='/'>
              CarSale 
              </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className=" ">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              
              <Nav.Link as={Link} to='blogs' >Blogs</Nav.Link>
              <Nav.Link as={Link} to='login' >Login</Nav.Link>
              <Nav.Link as={Link} to='register' >Sign In</Nav.Link>
                 
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
    
    
    </header>



    );
    
};

export default Header;