import React, {FC} from 'react';
import "./AuthPassword.scss";
import AuthInput from "../AuthInput/AuthInput";
import ButtonMain from "../../../UI/ButtonMain/ButtonMain";

interface IAuthPassword {
    isHaveAccount: boolean
    toReturn: (value: boolean) => void;
}

const AuthPassword: FC<IAuthPassword> = ({isHaveAccount, toReturn}) => {
    return (
        <div className={"auth-password"}>
            <h3 className="auth-password__title">Введите пароль</h3>
            <p className="auth-password__description">{isHaveAccount ? "Введите пароль, чтобы войти в аккаунт" : "Придумайте пароль для регистрации нового аккаунта"}</p>
            <AuthInput marginBottom={"4.8rem"} placeholder={"Введите пароль"} type="password" />
            {!isHaveAccount && <AuthInput marginBottom={"4.8rem"} placeholder={"Подтвердите пароль"} type={"password"} /> }
            {isHaveAccount ? <ButtonMain backGround={"gray"} height={"56px"} text={"Войти"} onClick={() => {} }/> : <ButtonMain backGround={"gray"} height={"56px"} text={"Зарегистрироваться"} onClick={() => {} }/>}
            <ButtonMain backGround={"gray"} marginTop={"8px"} height={"56px"} text={"Изменить логин"} onClick={() => toReturn(false)} />
        </div>
    );
};

export default AuthPassword;