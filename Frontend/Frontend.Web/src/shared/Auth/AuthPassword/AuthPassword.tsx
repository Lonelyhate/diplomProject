import React, {FC} from 'react';
import "./AuthPassword.scss";
import AuthInput from "../AuthInput/AuthInput";
import ButtonMain from "../../../UI/ButtonMain/ButtonMain";

interface IAuthPassword {
    isHaveAccount: boolean
}

const AuthPassword: FC<IAuthPassword> = ({isHaveAccount}) => {
    return (
        <div className={"auth-password"}>
            <h3 className="auth-password__title">Введите пароль</h3>
            <p className="auth-password__description">{isHaveAccount ? "Введите пароль, чтобы войти в аккаунт" : "Придумайте пароль для регистрации нового аккаунта"}</p>
            <AuthInput placeholder={"Введите пароль"} type="password" />
            {!isHaveAccount && <AuthInput placeholder={"Подтвердите пароль"} type={"password"} /> }
            {isHaveAccount ? <ButtonMain text={"Войти"} onClick={() => {} }/> : <ButtonMain text={"Зарегистрироваться"} onClick={() => {} }/>}
            <ButtonMain text={"Изменить логин"} onClick={() => {}} />
        </div>
    );
};

export default AuthPassword;