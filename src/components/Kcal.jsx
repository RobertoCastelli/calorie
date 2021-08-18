import React, { useContext } from "react";
import { DataContext } from "../context";

export const Kcal = () => {
  const { kcal, setKcal } = useContext(DataContext);

  return (
    <div>
      {kcal} Kcal/day <button onClick={() => setKcal(kcal + 10)}> + </button>
      <button onClick={() => setKcal(kcal - 10)}> - </button>
    </div>
  );
};
