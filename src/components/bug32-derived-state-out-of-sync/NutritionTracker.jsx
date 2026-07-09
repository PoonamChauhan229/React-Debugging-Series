import { useState } from "react";
import "./NutritionTracker.css";

const NutritionTracker = () => {
  const [meals, setMeals] = useState({
    breakfast: 350,
    lunch: 600,
    dinner: 500,
  });

  const [totalCalories, setTotalCalories] = useState(
    meals.breakfast + meals.lunch + meals.dinner
  );

  const addSnack = () => {
    setMeals({
      ...meals,
      dinner: meals.dinner + 250,
    });
  };

  return (
    <div className="container">
      <div className="card">

        <h2>React Debugging Series</h2>

        <h3>Bug #32 - Derived State Out of Sync</h3>

        <div className="meal">
          <span>🍳 Breakfast</span>
          <strong>{meals.breakfast} cal</strong>
        </div>

        <div className="meal">
          <span>🥗 Lunch</span>
          <strong>{meals.lunch} cal</strong>
        </div>

        <div className="meal">
          <span>🍝 Dinner</span>
          <strong>{meals.dinner} cal</strong>
        </div>

        <div className="total">
          Total Calories : {totalCalories}
        </div>

        <button onClick={addSnack}>
          Add Evening Snack
        </button>

      </div>
    </div>
  );
};

export default NutritionTracker;