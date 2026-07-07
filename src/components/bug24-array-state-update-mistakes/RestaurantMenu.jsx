import { useState } from "react";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([
    "Pizza",
    "Burger",
    "Pasta",
  ]);

  const addDish = () => {
    menu.push("Sandwich");
    setMenu(menu);
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #24 - Array State Update Mistakes</h3>

        <h2>Restaurant Menu</h2>

        <div className="menu-list">
          {menu.map((dish, index) => (
            <div className="menu-item" key={index}>
              🍽️ {dish}
            </div>
          ))}
        </div>

        <button
          className="add-btn"
          onClick={addDish}
        >
          Add New Dish
        </button>

        <p className="note">
          Click the button and observe the menu.
        </p>

      </div>
    </div>
  );
};

export default RestaurantMenu;