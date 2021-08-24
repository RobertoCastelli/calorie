import React, { useContext } from "react"
import { DataContext } from "../context"

export const Water = () => {
  const { liters, glasses, toggleWater } = useContext(DataContext)

  return (
    <fieldset className="water-wrapper">
      <legend>
        <h3>WATER</h3>
      </legend>
      <div className="water-content">
        <div>objective: 2,00 liters</div>
        <div
          className={
            liters < 2 ? "water-counter-incomplete" : "water-counter-complete"
          }
        >
          {liters} L
        </div>
        <ul className="water-glasses">
          {glasses.map((glass, index) => {
            return (
              <li className="water-glass-li" key={index}>
                <img
                  className="water-glass-image"
                  src={glass.src}
                  alt="glasses"
                  onClick={() => toggleWater(index)}
                ></img>
              </li>
            )
          })}
        </ul>
      </div>
    </fieldset>
  )
}
