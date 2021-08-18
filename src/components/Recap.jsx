import React, { useContext } from "react";
import { DataContext } from "../context";

export const Recap = () => {
  const { kcal, values } = useContext(DataContext);
  return (
    <div className="recap-wrapper">
      <h3>RECAP</h3>
      <div className="recap-content">
        <div className="recap-chart">CHART</div>
        <div className="recap-consumed">
          consumed <span>{values.consumed} </span>
        </div>
        <div className="recap-remaining">
          remaining <span>{kcal - values.consumed}</span>
        </div>
        <div className="recap-carboidrati">
          carbs <span>{values.carbs}</span>
        </div>
        <div className="recap-proteine">
          proteins <span>{values.proteins}</span>
        </div>
        <div className="recap-grassi">
          fat <span>{values.fat}</span>
        </div>
      </div>
    </div>
  );
};
