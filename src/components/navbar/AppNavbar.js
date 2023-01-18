import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Menu from "./Menu";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">App UdS Verona</Navbar.Brand>
        <Navbar.Toggle aria-controls="uds-navbar-nav" />
        <Navbar.Collapse id="uds-navbar-nav">
          <Nav className="me-auto">
            <Menu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
