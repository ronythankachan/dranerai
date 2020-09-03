import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../App.css';
function MainNavBar(){
    return(
        <Navbar className="nav-font" sticky="top" bg="white" variant="light" expand="lg">
        <Navbar.Brand className="brand-font" href="/">draner.ai</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls ="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="m-auto margin-right">
            {/* <Link className="nav-link" to="/about">About</Link> */}
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" style={{borderRadius:'.7rem'}} />
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
}
export default MainNavBar;