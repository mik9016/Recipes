import React, {useContext} from "react";

import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/Auth-Context';

export default function NavbarComponent(props) {
  const [isLogged,contextItems] = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Recipes</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
      <Nav >
        <Nav.Link as={Link} to='/' >Home</Nav.Link>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
        {isLogged && <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>}
      </Nav>

      
      
      </Navbar.Collapse>
      {isLogged && <Navbar.Text  className="justify-content-end">Signed as: {contextItems.userName}</Navbar.Text>}
      
    </Navbar>
  );
}
