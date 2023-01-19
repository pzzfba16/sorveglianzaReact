import React from "react";
import { NavDropdown } from "react-bootstrap";

const Dropdown = ({ subItems }) => {
  return (
    <NavDropdown title={subItems.title}>
      {subItems.submenu.map((menu, index) => {
        return (
          <NavDropdown.Item href={menu.url}>{menu.title}</NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default Dropdown;
