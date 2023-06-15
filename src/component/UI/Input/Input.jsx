import React from "react";

import "../Input/Input.scss";

const Input = ({
  placeholder,
  type,
  label,
  onChange,
  register,
  errors,
  name,
}) => {
  return (
    <div className="input__box">
      <label className="input__box-label">{label}</label>
      <input
        placeholder={placeholder}
        className="input__box-input"
        type={type}
        name={name}
        {...register(name, {
          required: true,
          minLength: 6,
          maxLength: 100,
        })}
      />
      {errors.login && (
        <span className="input__box-error_alert">
          {errors.login?.message ?? "Введите логин"}
        </span>
      )}
      {errors.login && errors.login.type === "maxLength" && (
        <span className="input__box-error_alert">не более 100 символов</span>
      )}
      {errors.login && errors.login.type === "minLength" && (
        <span className="input__box-error_alert">не менее 6 символов</span>
      )}
      {/* */}
      {/* {errors.password && (
        <span className="input__box-error_alert">
          {errors.password?.message ?? "Введите пароль"}
        </span>
      )}
      {errors.password && errors.password.type === "maxLength" && (
        <span className="input__box-error_alert">не более 100 символов</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span className="input__box-error_alert">не менее 6 символов</span>
      )} */}
    </div>
  );
};

export default Input;
