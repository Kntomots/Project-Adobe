import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({btnId}) {

  useEffect(() => {
    if (btnId === 'home') {
      document.getElementById('home').className = 'btn btn-dark text-white active';
      document.getElementById('card').className = 'btn btn-light text-dark';
    } else {
      document.getElementById('card').className = 'btn btn-dark text-white active';
      document.getElementById('home').className = 'btn btn-light text-dark';
    }
  }, [btnId]);



  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link id='home'  href="/">Home</Nav.Link>
          <Nav.Link  id='card' href="/card">Single Card</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default NavBar;