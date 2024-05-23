// app/components/AuthForm/AuthForm.jsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { isResponseOk, authorize } from "@/app/api/api-utils";
import endpoints from "@/app/api/config";
import { useStore } from "@/app/store/app-store";

import Styles from "@/app/components/AuthForm/AuthForm.module.css";

export const AuthForm = (props) => {
  const authContext = useStore();
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.login, authData);
    if (isResponseOk(userData)) {
      authContext.login({ ...userData, id: userData._id }, userData.jwt);
      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  useEffect(() => {
    let timer;

    if (authContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null });
        props.closePopup();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [authContext.user]);

  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            className={Styles["form__field-input"]}
            onInput={handleInput}
            name="email"
            type="email"
            required={true}
            placeholder="you@example.com"
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            className={Styles["form__field-input"]}
            onInput={handleInput}
            name="password"
            type="password"
            required={true}
            placeholder="***********"
          />
        </label>
      </div>
      {message.status && (
        <p className={Styles["form__message"]}>{message.text}</p>
      )}
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
      <Link
        href="/signup"
        className={Styles["form__link"]}
        onClick={() => props.closePopup()}
      >
        Зарегистрироваться
      </Link>
    </form>
  );
};

export default AuthForm;
