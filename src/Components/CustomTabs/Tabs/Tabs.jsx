import React, { useState } from "react";
import "./Tabs.css";
const Tabs = ({ tabsContent }) => {
  const [currentItem, setCurrentItem] = useState(tabsContent[0] || "");
  function handleClick(id) {
    const current = tabsContent.find((item) => item.id == id);

    setCurrentItem(current);
  }
  return (
    <div className="tabs">
      <ul className="tabs__heading">
        {tabsContent.map((item) => (
          <li
            className={`tabs__item ${
              currentItem.id == item.id ? "active" : undefined
            }`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="tabs__content">
        <span>{currentItem.content}</span>
      </div>
    </div>
  );
};

export default Tabs;
