import React from 'react';
import { Button, Navbar, 
	Nav, 
	NavItem, 
	NavDropdown, 
	MenuItem, 
	FormGroup, 
	FormControl } from 'react-bootstrap';

const Bar = () =>{
	return(
		<div>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">José Támara</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Skills
      </NavItem>
      <NavItem eventKey={2} href="#">
        Studies
      </NavItem>
      <NavItem eventKey={3} href="#">
      	Contact
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
		</div>
		)
}
export default Bar;