import React from "react";
import menuData from "./data";
import Header from "./components/header";
import Menu from "./components/menu";
import "./styles.css";

const App = () => {
  const [headers, ...items] = menuData.values;
  const categories = {};

  // Organize menu items by category
  items.forEach(([name, imageUrl, price, category]) => {
    if (!categories[category]) categories[category] = [];
    categories[category].push({ name, imageUrl, price });
  });

  return (
    <>
      <Header categories={Object.keys(categories)} />
      <Menu categories={Object.keys(categories)} menuItems={categories} />
    </>
  );
};

export default App;
