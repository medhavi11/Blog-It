import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav, Container } from "react-bootstrap";

export default function Navbars(props) {
  return (
    <div>
      {" "}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Post-It</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/createpost">Create Post</Nav.Link>
            </Nav>
            <Nav>
              {!props.isAuth ? (
                <Nav.Link href="/login">Login</Nav.Link>
              ) : (
                <button onClick={props.signUserOut}>Logout</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
