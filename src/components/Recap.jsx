import React from "react";

export const Recap = () => {
  return (
    <div className="recap-wrapper">
      <h3>RECAP</h3>
      <div className="recap-content">
        <div className="recap-chart">CHART</div>
        <div className="recap-consumed">
          consumed <span>0</span>
        </div>
        <div className="recap-remaining">
          remaining <span>0</span>
        </div>
        <div className="recap-carboidrati">
          carbs <span>0</span>
        </div>
        <div className="recap-proteine">
          proteins <span>0</span>
        </div>
        <div className="recap-grassi">
          fat <span>0</span>
        </div>
      </div>
    </div>
  );
};
