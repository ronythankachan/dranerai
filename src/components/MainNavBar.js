import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";

import Routes from '../Routes';

function MainNavBar(){
    return(
        <Router>
          <Navbar className="nav-font" sticky="top" bg="white" variant="light" expand="lg" >
            <Navbar.Brand className="brand-font" href="/">draner.ai</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls ="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="m-auto margin-right">
                <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
                <Nav.Link className="nav-link" href="/blog">Blog</Nav.Link>
                <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes/>
        </Router>
    );
}
export default MainNavBar;