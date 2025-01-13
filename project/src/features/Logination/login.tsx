import React, { useRef, useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {ActionCreater, TypeDispatch, TypeReducerState} from "../../app/MainReducer";
export default function LoginContent() {
    type TypeData={
        accessToken :string,
        refreshToken:string,
        id:number,
        name:string,
        email:string,
    }
    type TypeNewData={
        name_or_email:string,
        password:string
    }
    const formData = useRef<TypeNewData>({
        name_or_email: "",
        password: "",
    });

    const LoginElement = useRef<HTMLDivElement|null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;
        formData.current = { ...formData.current, [name]: value };
    };

    const dispatch:TypeDispatch = useDispatch();
    const isShowLogin = useSelector((state:TypeReducerState) => state.login.isShowLogin);
    const [logEr, setLogEr]=useState<string|null>(null);

    const handleClick = (e:MouseEvent):void => {
        if (LoginElement.current && !LoginElement.current.contains(e.target as Node)) {
            dispatch(ActionCreater("HideLogin"))
        }
    };

    const handlePostClick = async (NewData:TypeNewData,url:string):Promise<void> => {
        try {
            const response:Response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(NewData),
            });

            if (response.ok) {
                const data:TypeData = await response.json(); // Парсим тело ответа
                localStorage.setItem("accessToken",data.accessToken)
                localStorage.setItem("refreshToken",data.refreshToken)
                dispatch(ActionCreater("HideLogin"))
                dispatch(ActionCreater("LoadUser",{userid:data.id,username:data.name,useremail:data.email}))
                window.location.href = `http://localhost:3000/Account#${data.id}`

            } else {
                const error:string = await response.text();
                setLogEr(error)
            }
        } catch (error) {
            console.error("Ошибка при запросе:", error);
        }
    }

    useEffect(():()=>void  => {
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
                        dispatch(ActionCreater("HideLogin")); // Устанавливаем состояние в Redux
                        console.log(isShowLogin); // Для проверки состояния
                    }}
                >
                    ❌
                </span>
                <form
                    action="POST"
                    className="flex-column align-items-center justify-content-center"
                >
                    <label htmlFor="name_or_email" className="fs-4">
                        Имя или email пользователя
                    </label>
                    <input
                        type="text"
                        className="form-control fs-4"
                        id="name_or_email"
                        name="name_or_email"
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
                    {logEr ? (
                        <span className="fs-6">
                            {logEr}
                        </span>
                    ) : (
                        ""
                    )}
                    <Button
                        className="btn fs-4 text-center d-flex justify-content-center align-items-center sub_btn"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePostClick(formData.current,"http://localhost:5000/api/login_persons")
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
