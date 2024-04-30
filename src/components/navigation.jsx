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
            <Nav.Link href="http://localhost:3000">Home</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="http://localhost:3000/#about">About Us</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="http://localhost:3000/#services">Services</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px"}} href="http://localhost:3000/#team">Team</Nav.Link>
            <Nav.Link style={{"paddingLeft":"35px","paddingRight":"35px"}} href="http://localhost:3000/#contact">Contact</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item style={{"fontSize":"14px"}} href="http://localhost:3000/login">Login</NavDropdown.Item>
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/updatestate_manufacturer">
                Update State By Manufacturers
              </NavDropdown.Item>
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/updatestate_distributor">
                Update State By Distributors
              </NavDropdown.Item>
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/updatestate_retailer">
                Update State by Retailers
              </NavDropdown.Item>
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/updatestate_customer">
                Update State by Customers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/addproduct">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item style={{"fontSize":"14px","padding":"8px"}} href="http://localhost:3000/current">
                View Product Status
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