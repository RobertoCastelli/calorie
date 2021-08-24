import React from "react"

export const Detail = () => {
  return (
    <fieldset className="detail-wrapper">
      <legend>
        <h3>DETAIL</h3>
      </legend>
      <div className="detail-content">
        <div className="detail-title">
          BREAKFAST ➟ <span>100</span> kcal
        </div>
        <ul>
          <li>uno</li>
          <li>due</li>
          <li>tre</li>
        </ul>

        <div className="detail-title">
          LUNCH ➟ <span>100</span> kcal
        </div>
        <ul>
          <li>uno</li>
          <li>due</li>
          <li>tre</li>
        </ul>

        <div className="detail-title">
          DINNER ➟ <span>100</span> kcal
        </div>
        <ul>
          <li>uno</li>
          <li>due</li>
          <li>tre</li>
        </ul>

        <div className="detail-title">
          SNACKS ➟ <span>100</span> kcal
        </div>
        <ul>
          <li>uno</li>
          <li>due</li>
          <li>tre</li>
        </ul>
      </div>
    </fieldset>
  )
}
