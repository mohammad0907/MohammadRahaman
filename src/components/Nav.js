import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "../App.css"

function Navigation (props){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className = "shadow" color="dark" dark fixed = "top" expand="md">
        <NavbarBrand href="#home" style = {{color: "whitesmoke"}}>Mohammad Rahman</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style = {{marginLeft : "auto"}} navbar>
            <NavItem style = {{textAlign: "center", color: "white"}}>
              <NavLink href="#about" style = {{color: "white"}}>About</NavLink>
            </NavItem>
            <NavItem style = {{textAlign: "center"}}>
              <NavLink href="#experience" style = {{color: "white"}}>Experience</NavLink>
            </NavItem>
            <NavItem style = {{textAlign: "center"}}>
              <NavLink href="#education" style = {{color: "white"}}>Education</NavLink>
            </NavItem>
            <NavItem style = {{textAlign: "center"}}>
              <NavLink href="#projects" style = {{color: "white"}}>Projects</NavLink>
            </NavItem>
            <NavItem style = {{textAlign: "center"}}>
              <NavLink href="#skills" style = {{color: "white"}}>Skills</NavLink>
            </NavItem>
            <NavItem style = {{textAlign: "center"}}>
              <NavLink href="#contact" style = {{color: "white"}}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;