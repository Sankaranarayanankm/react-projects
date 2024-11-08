import React from "react";
import "./Treeview.css";
import MenuList from "./MenuList";

const Treeview = ({ menus = [] }) => {
  return (
    <div className="treeview">
      <h1>Treeview</h1>
      <MenuList list={menus} />
    </div>
  );
};

export default Treeview;
