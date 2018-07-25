import React, { Component } from "react"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Link } from 'react-bootstrap'

import '../styles/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="NavBar" fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="javascript:void();">Todo App</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <NavItem componentClass={Link} eventKey={1} href="javascript:void();">
                  Devon M.
                </NavItem>
              </Nav>
            </Navbar>
        )
    }
}

export default NavBar