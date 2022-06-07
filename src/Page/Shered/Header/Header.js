import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import CustomLink from '../../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSinOut = () => {
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" sticky='top' variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{ height: '30px' }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='home#services'>Services</Nav.Link>
            <Nav.Link href='/home#exparts'>Exparts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
            {
              user ?
                <button className='singOut' onClick={handleSinOut}>Sing Out</button>
                :
                <Nav.Link as={CustomLink} to="/login">
                  LogIn
                </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;