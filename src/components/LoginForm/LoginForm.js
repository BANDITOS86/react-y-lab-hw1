import React from "react";
import useLoginForm from "../../hooks/useLoginForm";
import "./loginForm.scss";

const LoginForm = () => {
  const { handleSubmit, register, errors, authError } = useLoginForm();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Авторизация</h1>
      <label className="form__label">
        <input
          className="form__label-input input-reset"
          {...register("email", {
            required: "Email обязателен к заполнению",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Неверный формат email",
            },
          })}
          placeholder="Введите email"
          autoComplete="off"
        />
        {errors.email && (
          <p className="form__label-error error-message">
            {errors.email.message}
          </p>
        )}
      </label>

      <label className="form__label">
        <input
          className="form__label-input input-reset"
          type="password"
          {...register("password", {
            required: "Пароль обязателен к заполнению",
          })}
          placeholder="Введите пароль"
          autoComplete="off"
        />
        {errors.password && (
          <p className="form__label-error error-message">
            {errors.password.message}
          </p>
        )}
      </label>

      {authError && <p className="form__auth error-auth">{authError}</p>}

      <button className="form__button btn-reset" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
