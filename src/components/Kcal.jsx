import React, { useContext } from "react";
import { DataContext } from "../context";

export const Kcal = () => {
  const { kcal, setKcal } = useContext(DataContext);

  return (
    <div className="kcal-wrapper">
      <div className="kcal-total">{kcal} Kcal/day</div>
      <button className="kcal-more" onClick={() => setKcal(kcal + 10)}>
        +
      </button>
      <button className="kcal-less" onClick={() => setKcal(kcal - 10)}>
        -
      </button>
    </div>
  );
};
