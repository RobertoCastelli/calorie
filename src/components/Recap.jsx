import React, { useContext } from "react"
import { DataContext } from "../context"

export const Recap = () => {
  const { kcal, values, setKcal } = useContext(DataContext)
  return (
    <fieldset className="recap-wrapper">
      <legend>
        <h3>RECAP</h3>
      </legend>
      <div className="recap-content">
        <button className="kcal-more" onClick={() => setKcal(kcal + 10)}>
          +
        </button>
        <div className="kcal-total">{kcal} kcal</div>
        <button className="kcal-less" onClick={() => setKcal(kcal - 10)}>
          -
        </button>

        <progress
          id="bar"
          min="0"
          max="100"
          value="50"
          className="recap-bar"
        ></progress>
        <div className="recap-consumed">
          consumed <span className="recap-value">{values.consumed}</span>
        </div>
        <div className="recap-remaining">
          remaining <span className="recap-value"></span>
          {kcal - values.consumed}
        </div>
        <div className="recap-carboidrati">
          carbs <span className="recap-value">{values.carbs}</span>
        </div>
        <div className="recap-proteine">
          proteins <span className="recap-value">{values.proteins}</span>
        </div>
        <div className="recap-grassi">
          fat <span className="recap-value">{values.fat}</span>
        </div>
      </div>
    </fieldset>
  )
}
