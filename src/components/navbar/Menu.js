import React from "react";
import { Nav } from "react-bootstrap";

import Dropdown from "./Dropdown";

const Menu = ({ item }) => {
  if (item.submenu) {
    return <Dropdown submenus={item.submenu} />;
  } else {
    return <Nav.Link href={item.url}>{item.title}</Nav.Link>;
  }
};

export default Menu;
