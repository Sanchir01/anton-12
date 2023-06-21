import React from "react";

import "../FormMain/index.scss";

const FormMain = ({ onSubmit, children, title }) => {
  return (
    <div className="form__box">
      <h1 className="form__box-title">{title}</h1>
      <form className="form__box-form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default FormMain;
