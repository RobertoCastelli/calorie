import React from "react"
import { ErrorMessage } from "./ErrorMessage"
import { Loading } from "./Loading"

export const Food = () => {
  return (
    <fieldset className="food-wrapper">
      <legend>
        <h3>FOOD</h3>
      </legend>
      <div className="food-content">
        <input className="food-search" type="text" placeholder="search food" />
        <ErrorMessage />
        <Loading />
        <div className="food-buttons">
          <button className="food-breakfast">BREAKFAST</button>
          <button className="food-lunch">LUNCH</button>
          <button className="food-dinner">DINNER</button>
          <button className="food-snacks">SNACKS</button>
        </div>
      </div>
    </fieldset>
  )
}
