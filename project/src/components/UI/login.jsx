import { useRef, useState,useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {removeListener} from "@reduxjs/toolkit";

export default function Login() {
    const formData = useRef({
        name_or_email: "",
        password: "",
    });

    const LoginElement = useRef(null);

    const [checkerForm, setCheckerForm] = useState({
        name_or_email:"",
        password: "11111111111"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData.current = { ...formData.current, [name]: value };
    };

    const dispatch = useDispatch();
    const isShowLogin = useSelector((state) => state.user.isShowLogin);

    const handleClick = (e) => {
        if (LoginElement.current && !LoginElement.current.contains(e.target)) {
            dispatch({type:"HideLogin"})
        }
    };

    useEffect(() => {
        if (isShowLogin) {
            document.addEventListener("click", handleClick);
        }

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isShowLogin]);

    return (
        <CSSTransition
            in={isShowLogin}
            timeout={1000} // Должен совпадать с transition в CSS
            classNames="register-animation"
            unmountOnExit
            nodeRef={LoginElement} // Передача ссылки для CSSTransition
            appear // Анимация при первом рендере
        >
            <div
                ref={LoginElement}
                className="MyReg flex-column align-items-center justify-content-center"
            >
                <span
                    className="X"
                    onClick={() => {
                        dispatch({ type: "HideLogin" }); // Устанавливаем состояние в Redux
                        console.log(isShowLogin); // Для проверки состояния
                    }}
                >
                    ❌
                </span>
                <form
                    action="POST"
                    className="flex-column align-items-center justify-content-center"
                >
                    <label htmlFor="nameInput" className="fs-4">
                        Имя или email пользователя
                    </label>
                    <input
                        type="text"
                        className="form-control fs-4"
                        id="nameInput"
                        name="name"
                        placeholder="Введите имя пользователя"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <label htmlFor="passwordInput" className="fs-4">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className="form-control fs-4"
                        id="passwordInput"
                        name="password"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {checkerForm.password.length < 6 ? (
                        <span className="fs-6">
                            Неверный пароль, имя или email
                        </span>
                    ) : (
                        ""
                    )}
                    <Button
                        className="btn fs-4 text-center d-flex justify-content-center align-items-center sub_btn"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            setCheckerForm(formData.current); // Обновление checkerForm
                            console.log(formData.current); // Для проверки данных
                        }}
                    >
                        click
                    </Button>
                </form>
            </div>
        </CSSTransition>
    );
}
