import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import InputMain from "../../UI/InputMain";
import Button from "../../UI/Button/index";
import FormMain from "../../UI/FormMain/index";

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
