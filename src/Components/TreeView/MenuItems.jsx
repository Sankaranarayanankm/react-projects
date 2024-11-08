import React, { useState } from "react";
import "./MenuItems.css";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItems = ({ item }) => {
  const [currentItem, setCurrentItem] = useState({});
  const toggleDisplay = (id) => {
    setCurrentItem((prev) => {
      return {
        ...prev,
        [id]: !currentItem[id],
      };
    });
  };
  console.log(currentItem);

  return (
    <li className="menuItems">
      <div className="menuItems__name">
        {item.label}
        {item.children.length > 0 && (
          <span onClick={() => toggleDisplay(item.id)}>
            {currentItem[item.id] ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </div>
      {currentItem[item.id] && item.children.length > 0 && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItems;
