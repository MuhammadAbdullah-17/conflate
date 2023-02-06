import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logoImage from "./assets/navbar_logo.png";
function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img alt="Conflate Logo" src={logoImage} height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="links">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Services">
                <Nav.Link className="links">Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link className="links">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link className="links">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
