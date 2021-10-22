import "./App.css";
import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Toolbar from "./components/Toolbar/Toolbar";
import menuItems from "./menuItems.json";

function App() {
  const [items, setItems] = useState(menuItems);
  const [active, setActiveItem] = useState('all');
  const categories = menuItems
    .reduce(
      (values, item) => {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    )
    .map(i => {
      if (i === "all") return { category: i, active: true };
      return { category: i, active: false };
    });

  const changeMenuItems = category => {
    if (category === "all") {
      setItems(menuItems);
      setActiveItem(category);
    }
    else{
      const items = menuItems.filter(item => {
        return item.category === category;
      });
      setItems(items);
      setActiveItem(category);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shravani's Menu</h1>
      </header>
      <hr/>
      <Toolbar
        categories={categories}
        changeMenuItems={changeMenuItems}
        activeMenuItem = {active}
      ></Toolbar>
      <Menu menuItems={items}></Menu>
    </div>
  );
}

export default App;
