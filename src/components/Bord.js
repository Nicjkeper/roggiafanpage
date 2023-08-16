import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Bord() {
  const navbarStyle = {
    backgroundColor: '#333',
    fontFamily: 'Poppins, sans-serif', // Sostituisci 'Your Font' con il nome del font desiderato
    fontSize: '30px',
    color: '#fff',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="#" className="fs-2">
          Roggia Fanpage
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Bord;






