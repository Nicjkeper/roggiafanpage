import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

function ColorSchemesExample() {
  const navbarStyle = {
    backgroundColor: 'green', // Imposta lo sfondo verde
    fontFamily: 'Agdasima, sans-serif',
    fontSize: '30px',
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle} variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="text-white">Home</Nav.Link>
              <Nav.Link href="/rogge" className="text-white">Le rogge</Nav.Link>
              <Nav.Link href="/news" className="text-white">News</Nav.Link>
              <Nav.Link href="/map" className="text-white">Mappa delle rogge</Nav.Link>
              <NavDropdown title="Altro" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/partecipazione">Modulo Assunzione al Team</NavDropdown.Item>
                <NavDropdown.Item href="/terms">Termini e condizioni legali</NavDropdown.Item>
                <NavDropdown.Item href="/download">Download Contenuti</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;


