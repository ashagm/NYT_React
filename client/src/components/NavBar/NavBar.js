import React from "react";
import { Navbar } from 'react-bootstrap';

const NavBar = () => (	 
  <Navbar>
	  <Navbar.Header>
	    <Navbar.Brand>NY Times Article Search</Navbar.Brand>    
	  </Navbar.Header>
	  <Navbar.Collapse>
	    <Navbar.Text>
	      <Navbar.Link href="#"></Navbar.Link>
	    </Navbar.Text>
	    <Navbar.Text pullRight>Have a great day!</Navbar.Text>
	  </Navbar.Collapse>
</Navbar>
);

export default NavBar;