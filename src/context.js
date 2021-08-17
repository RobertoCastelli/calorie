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
    <DataContext.Provider value={{ liters, glasses, toggleWater }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
