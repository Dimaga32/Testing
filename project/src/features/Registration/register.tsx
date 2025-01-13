import {useEffect, useRef, useState} from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {ActionCreater, TypeDispatch, TypeReducerState} from "../../app/MainReducer";

export default function RegisterContent() {
    type TypeRegisterData = {
        name: string,
        email: string,
        password: string,
    }
    const formData = useRef<TypeRegisterData>({
        name: "",
        email: "",
        password: "",
    });

    const handlePostClick = async (NewData:TypeRegisterData,url:string):Promise<void> => {
        try {

            const response:Response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(NewData),
            });

            if (response.ok) {
                window.location.reload()
            } else {
                const error:string = await response.text();
                console.log( error);
            }
        } catch (error) {
            console.error("Ошибка при запросе:", error);
        }
    }

    const RegistrationElement = useRef<HTMLDivElement|null>(null);

    const [checkerForm, setCheckerForm] = useState({
        name: "more 5, less 20 simb",
        email: "contains @",
        password: "more than 6 simbols",
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;
        formData.current = { ...formData.current, [name]: value };
    };

    const dispatch:TypeDispatch = useDispatch();
    const isShowRegister = useSelector((state:TypeReducerState) => state.register.isShowRegister);
    const handleClick = (e:MouseEvent):void => {
        if (RegistrationElement.current && !RegistrationElement.current.contains(e.target as Node)) {
            dispatch(ActionCreater("HideRegister"))
        }
    };

    useEffect(():()=>void => {
        if (isShowRegister) {
            document.addEventListener("click", handleClick);
        }

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isShowRegister]);

    return (
        <CSSTransition
            in={isShowRegister}
            timeout={1000} // Должен совпадать с transition в CSS
            classNames="register-animation"
            unmountOnExit
            nodeRef={RegistrationElement} // Передача ссылки для CSSTransition
            appear // Анимация при первом рендере
        >
            <div
                ref={RegistrationElement}
                className="MyReg flex-column align-items-center justify-content-center"
            >
                <span
                    className="X"
                    onClick={() => {
                        dispatch(ActionCreater("HideRegister")); // Устанавливаем состояние в Redux
                        console.log(isShowRegister); // Для проверки состояния
                    }}
                >
                    ❌
                </span>
                <form
                    action="POST"
                    className="flex-column align-items-center justify-content-center"
                >
                    <label htmlFor="nameInput" className="fs-4">
                        Имя пользователя
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
                    {checkerForm.name.length > 20 ? (
                        <span className="fs-6">Имя слишком длинное</span>
                    ) : checkerForm.name.length < 5 ? (
                        <span className="fs-6">Имя слишком короткое</span>
                    ) : (
                        ""
                    )}
                    <label htmlFor="emailInput" className="fs-4">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control fs-4"
                        id="emailInput"
                        name="email"
                        placeholder="Введите email"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    {!checkerForm.email.includes("@") ? (
                        <span className="fs-6">
                            Почта должна содержать символ "@"
                        </span>
                    ) : (
                        ""
                    )}
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
                            Пароль должен содержать больше 6 символов
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
                            if(formData.current.name.length >= 5 && formData.current.name.length <= 20 && formData.current.email.includes("@") &&formData.current.password.length >= 6)
                            {
                                handlePostClick(formData.current, "http://localhost:5000/api/registers_persons")
                            }
                            console.log(formData.current)
                        }}
                    >
                        click
                    </Button>
                </form>
            </div>
        </CSSTransition>
    );
}
