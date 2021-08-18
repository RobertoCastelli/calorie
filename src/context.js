import React, { useState } from "react";
import { glasses } from "./variables/data";
// IMAGES
import fullglass from "./images/fullglass.png";
import emptyglass from "./images/emptyglass.png";

// CONTEXT
export const DataContext = React.createContext();

const ContextProvider = ({ children }) => {
  // STATE
  const [liters, setLiters] = useState(0);
  const [kcal, setKcal] = useState(1800);
  const [values, setValues] = useState({
    consumed: 0,
    remaining: 0,
    carbs: 0,
    proteins: 0,
    fat: 0,
  });

  // TOGGLE WATER
  const toggleWater = (id) => {
    glasses.map((glass, index) => {
      if (id === index && glass.state === false) {
        setLiters(liters + 0.25);
        glass.state = true;
        glass.src = fullglass;
      } else if (id === index && glass.state === true) {
        setLiters(liters - 0.25);
        glass.state = false;
        glass.src = emptyglass;
      }
      return glass; // <-<< check return
    });
  };

  // RENDER
  return (
    <DataContext.Provider
      value={{
        liters,
        glasses,
        toggleWater,
        kcal,
        setKcal,
        values,
        setValues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
