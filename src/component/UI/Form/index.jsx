import React from "react";

import Button from "../../UI/Button/index";
import Input from "../../UI/Input/Input";

import "../Form/index.scss";

const Form = ({ onSubmit, register, errors, disabled, title, name }) => {
  return (
    <div className="form__box">
      <h1 className="form__box-title">{title}</h1>
      <form className="form__box-form" onSubmit={onSubmit}>
        <Input
          placeholder={"Введите email!"}
          type={"email"}
          label={"Логин"}
          register={register}
          errors={errors}
          name={"login"}
          rules={{ required: "Введите email!" }}
        />
        <Input
          placeholder={"Введите пароль!"}
          type={"password"}
          label={"Пароль"}
          register={register}
          errors={errors}
          name={"password"}
          rules={{ required: "Введите пароль!" }}
        />
        <Button name={"Войти"} disabled={disabled} />
      </form>
    </div>
  );
};

export default Form;
