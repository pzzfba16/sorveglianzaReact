import React from "react";
import { Nav } from "react-bootstrap";

import Dropdown from "./Dropdown";

import { menuItems } from "./menuItems";

const MenuItems = () => {
  return(
  menuItems.map((menu, index) => {
    if (menu.submenu) {
      return <Dropdown submenus={menu.submenu} />;
    } else {
      return <Nav.Link href={menu.url}>{menu.title}</Nav.Link>;
    }
  });
  )
};

export default MenuItems;
