import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import Dropdown from "./Dropdown";

const Menu = ({ items }) => {
  if (items.submenu) {
    return <Dropdown subItems={items} />;
  } else {
    return <Nav.Link href={items.url}>{items.title}</Nav.Link>;
  }
};

export default Menu;
