import React, {FC} from 'react';
import ButtonMain from "../../../UI/ButtonMain/ButtonMain";
import "./AuthLogin.scss";
import AuthInput from "../AuthInput/AuthInput";

const AuthLogin : FC = () => {
    return (
        <div className="auth-login">
            <h3 className="auth-login__title">Вход или регистрация</h3>
            <p className="auth-login__description">Введите логин для авторизации, мы проверим наличие вашего аккаунта в системе</p>
            <AuthInput placeholder={"Введите логин"} marginBottom="4.8rem" />
            <ButtonMain text={"Продолжить"} height={"5.6rem"} maringBottom={"4.8rem"} />
            <p className="auth-login__info">Номера телефонов могут начинаться только на +7 или +375</p>
        </div>
    );
};

export default AuthLogin;