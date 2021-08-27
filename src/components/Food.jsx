import React, { useContext } from "react"
// COMPONENT
import { ErrorMessage } from "./ErrorMessage"
import { Loading } from "./Loading"
// CONTEXT
import { DataContext } from "../context"

export const Food = () => {
  const { query, setQuery, handleSubmit } = useContext(DataContext)

  return (
    <fieldset className="food-wrapper">
      <legend>
        <h3>FOOD</h3>
      </legend>
      <div className="food-content">
        <input
          className="food-search"
          type="text"
          value={query}
          placeholder="search food"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ErrorMessage />
        <Loading />
        <div className="food-buttons">
          <button
            className="food-breakfast"
            name="breakfast"
            type="button"
            onClick={handleSubmit}
          >
            BREAKFAST
          </button>
          <button className="food-lunch">LUNCH</button>
          <button className="food-dinner">DINNER</button>
          <button className="food-snacks">SNACKS</button>
        </div>
      </div>
    </fieldset>
  )
}
