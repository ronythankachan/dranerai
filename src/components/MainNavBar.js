import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import '../App.css';
class MainNavBar extends React.Component{

  state={
    navSelected:false
  }

  collpaseNav(){
    this.setState({navSelected:!this.state.navSelected});
  }
  render(){
    return(
      <Navbar className="nav-font" sticky="top" bg="white" variant="light" expand="lg" onClick={()=>{this.blah()}} expanded={this.state.navSelected}>
        <Navbar.Brand className="brand-font" href="/">draner.ai</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls ="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="m-auto margin-right"  onClick={()=>{this.collpaseNav();}}>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
}
export default MainNavBar;