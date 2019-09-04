import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import styled from 'styled-components';

const PicPreview = styled.img`
vertical-align: middle;
width: 50px;
height: 50px;
border-radius: 50%;
margin-top: -3%;
`;

class AppNavbar extends Component {
  render() {
    return (
      <div className="">
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home">Commonwealth Connect</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#help">Help</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <PicPreview src="http://alfredorafael.com/wp-content/uploads/2019/03/circlePicture.png" roundedCircle/>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default AppNavbar;
