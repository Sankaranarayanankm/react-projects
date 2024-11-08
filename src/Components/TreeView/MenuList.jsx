import React from "react";
import "./MenuList.css";
import MenuItems from "./MenuItems";
const MenuList = ({ list = [] }) => {
  return (
    <ul className="menuLists">
      {list.map((item) => (
        <MenuItems item={item} />
      ))}
    </ul>
  );
};

export default MenuList;
