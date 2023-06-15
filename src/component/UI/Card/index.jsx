import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/index";
import Form from "../../UI/Form/index";

import "../Card/index.scss";

const Card = ({ title, data }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      resetField("login");
      resetField("password");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="card__box">
      <div className="card__box-card">
        <h1>{title}</h1>
        <Form
          disabled={!data}
          title={"Simple Hotel Check"}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Card;
