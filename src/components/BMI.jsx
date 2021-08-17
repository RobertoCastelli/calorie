import React from "react";

export const BMI = () => {
  return (
    <div>
      <h3>BMI</h3>
      <form className="bmi-wrapper">
        <div className="bmi-content">
          <label htmlFor="weight">weight</label>
          <input type="number" name="weight" className="bmi-weight" />
          <label htmlFor="weight">height</label>
          <input type="number" name="hight" className="bmi-height" />
          <button>calculate</button>
        </div>
      </form>
    </div>
  );
};
