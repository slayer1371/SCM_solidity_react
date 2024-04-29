import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navigation.css';

function Navigationn() {  
  return (
    <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary edit">
      <Container fluid>
        <Navbar.Brand href="#" style={{"fontSize":"24px","paddingTop":"15px","fontFamily":"Raleway"}}>Supply Chain Management Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div className='test'>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="#about">About Us</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="#services">Services</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="#team">Team</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="#contact">Contact</Nav.Link>
            <NavDropdown style={{"paddingLeft":"35px"}} title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigationn;