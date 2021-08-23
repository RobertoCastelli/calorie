import React from "react";

export const Food = () => {
  return (
    <div className="food-wrapper">
      <div className="food-content">
        <fieldset className="food-breakfast">
          <legend> BREAKFAST</legend>
          <button className="food-button"> + </button>
          <div className="food-cal">0 Kcal</div>
        </fieldset>
        <fieldset className="food-lunch">
          <legend>LUNCH</legend>
          <button className="food-button"> + </button>
          <div className="food-cal">0 Kcal</div>
        </fieldset>
        <fieldset className="food-dinner">
          <legend>DINNER</legend>
          <button className="food-button"> + </button>
          <div className="food-cal">0 Kcal</div>
        </fieldset>
        <fieldset className="food-snack">
          <legend>SNACK</legend>
          <button className="food-button"> + </button>
          <div className="food-cal">0 Kcal</div>
        </fieldset>
      </div>
    </div>
  );
};
