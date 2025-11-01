import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function AILabHeader() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Image alt="umass lowell logo" src="src/assets/umllogo.svg" width='50' height='50' className='d-inline-block align-start'/>
        <Navbar.Brand href="#home">
          AI-CYREN Lab
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Research</Nav.Link>
            <Nav.Link href="#link">Publications</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AILabHeader;



