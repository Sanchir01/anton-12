import React from "react";

import "../CardMain/index.scss";

const CardMain = ({ title, children }) => {
  return (
    <div className="card__box">
      <div className="card__box-card">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default CardMain;
