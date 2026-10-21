/*
Mauricio Rivera
msr26@njit.edu
IT302 - 001
October 21st, 2026
Unit 08 - React.js Setup and NavBar Exercise
*/

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Mauricio Rivera (msr26)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bookshelf">Bookshelf</Nav.Link>
            <NavDropdown title="External Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.njit.edu" target="_blank" rel="noopener noreferrer">
                NJIT Homepage
              </NavDropdown.Item>
              <NavDropdown.Item href="https://experience.elluciancloud.com/njiot929/" target="_blank" rel="noopener noreferrer">
                Pipeline
              </NavDropdown.Item>
              <NavDropdown.Item href="https://njit.instructure.com" target="_blank" rel="noopener noreferrer">
                Instructure
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://reg-prod.ec.njit.edu/StudentRegistrationSsb/ssb/registration" target="_blank" rel="noopener noreferrer">
                Registration
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavigationBar;