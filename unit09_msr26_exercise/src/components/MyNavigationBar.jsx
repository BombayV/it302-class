import { Navbar, Nav } from 'react-bootstrap';

function MyNavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>Mauricio Rivera (msr26)</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>Check Out</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavigationBar;
