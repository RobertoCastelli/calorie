import React, { useContext } from "react";
import { DataContext } from "../context";

export const BMI = () => {
  const { values, setValues, handleSubmit } = useContext(DataContext);
  return (
    <div>
      <h3>BMI</h3>
      <form className="bmi-wrapper" onSubmit={handleSubmit}>
        <div className="bmi-content">
          <label htmlFor="weight">weight</label>
          <input
            type="number"
            name="weight"
            className="bmi-weight"
            min="0"
            max="200"
            value={values.weight}
            onChange={(e) => setValues({ ...values, weight: e.target.value })}
          />
          <label htmlFor="weight">height</label>
          <input
            type="number"
            name="hight"
            className="bmi-height"
            min="0"
            max="200"
            value={values.height}
            onChange={(e) => setValues({ ...values, height: e.target.value })}
          />
          <button type="submit">calc</button>
        </div>
      </form>
    </div>
  );
};
