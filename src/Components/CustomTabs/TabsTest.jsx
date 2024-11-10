import React from "react";
import Tabs from "./Tabs/Tabs";

const TabsTest = () => {
  const list = [
    { id: 1, label: "Tab1", content: "This is the content for Tab 1." },
    { id: 2, label: "Tab2", content: "This is the content for Tab 2." },
    { id: 3, label: "Tab3", content: "This is the content for Tab 3." },
    { id: 4, label: "Tab4", content: "This is the content for Tab 4." },
    { id: 5, label: "Tab5", content: "This is the content for Tab 5." },
  ];

  return <Tabs tabsContent={list} />;
};

export default TabsTest;
