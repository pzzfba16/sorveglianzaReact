import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Menu from "./Menu";

import { menuItems } from "./menuItems";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">App UdS Verona</Navbar.Brand>
        <Navbar.Toggle aria-controls="uds-navbar-nav" />
        <Navbar.Collapse id="uds-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((menu, index) => {
              return <Menu items={menu} key={index} />;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
