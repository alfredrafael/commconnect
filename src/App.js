import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import styled from 'styled-components';
import AppNavbar from './components/AppNavbar';

const PicPreview = styled.img`
vertical-align: middle;
width: 50px;
height: 50px;
border-radius: 50%;
margin-top: -3%;
`;

class App extends Component {
  render() {
    return (
      <div className="">
        <AppNavbar/>
      </div>
    );
  }
}

export default App;
