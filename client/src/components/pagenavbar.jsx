import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AILabHeader() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <img alt="umass lowell logo" src="src/assets/umllogo.svg" width='100' height='100' className='d-inline-block align-start'/>{' '}
        <Navbar.Brand href="#home">
          
          AI-CYREN Lab
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Meet The Team</Nav.Link>
            <Nav.Link href="#link">Research Projects</Nav.Link>
            <Nav.Link href="#link">Publications</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AILabHeader;



