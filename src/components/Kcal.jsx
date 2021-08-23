import React, { useContext } from "react"
import { DataContext } from "../context"

export const Kcal = () => {
  const { kcal, setKcal } = useContext(DataContext)

  return (
    <fieldset className="kcal-wrapper">
      <legend>
        <h3>KCAL / DAY</h3>
      </legend>
      <div className="kcal-content">
        <button className="kcal-more" onClick={() => setKcal(kcal + 10)}>
          +
        </button>
        <div className="kcal-total">{kcal}</div>
        <button className="kcal-less" onClick={() => setKcal(kcal - 10)}>
          -
        </button>
      </div>
    </fieldset>
  )
}
