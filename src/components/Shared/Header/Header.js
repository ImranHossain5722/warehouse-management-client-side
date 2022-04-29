import React from 'react';
import logo from '../../../Images/Logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'


const Header = () => {

  const [user]=useAuthState(auth)
  const logOut = ()=>{
      signOut(auth)
  }
    return (
    <header> 
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand className="d-inline-block d-flex align-items-center logo-text "
               as={Link} to ='/'> Car<img height={50} src={logo} alt="" />
              
              </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className=" ">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              
              <Nav.Link as={Link} to='blogs' >Blogs</Nav.Link>
                {
                  user ? <Nav.Link onClick={logOut} >Sing Out </Nav.Link> : <Nav.Link as={Link} to='login' >Login</Nav.Link>
                }
              <Nav.Link as={Link} to='register' >Sign In</Nav.Link>
                 
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
    
    
    </header>



    );
    
};

export default Header;