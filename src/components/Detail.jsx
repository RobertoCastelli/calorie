import React from "react"

export const Detail = () => {
  return (
    <fieldset className="detail-wrapper">
      <legend>
        <h3>DETAIL</h3>
      </legend>
      <div className="detail-content">
        <div>
          BREAKFAST ➟ <span>100</span> kcal
          <ul>
            <li>uno</li>
            <li>due</li>
            <li>tre</li>
          </ul>
        </div>
        <div>
          LUNCH ➟ <span>100</span> kcal
          <ul>
            <li>uno</li>
            <li>due</li>
            <li>tre</li>
          </ul>
        </div>
        <div>
          DINNER ➟ <span>100</span> kcal
          <ul>
            <li>uno</li>
            <li>due</li>
            <li>tre</li>
          </ul>
        </div>
        <div>
          SNACKS ➟ <span>100</span> kcal
          <ul>
            <li>uno</li>
            <li>due</li>
            <li>tre</li>
          </ul>
        </div>
      </div>
    </fieldset>
  )
}
