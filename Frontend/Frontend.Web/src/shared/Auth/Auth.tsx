import React, {FC, useState} from 'react';
import "./Auth.scss";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import AuthLogin from "./AuthLogin/AuthLogin";
import AuthorizationAPI from "../../models/API/AuthorizationAPI";
import AuthPassword from "./AuthPassword/AuthPassword";

const Auth : FC = () => {
    const [checkUserByLogin, setCheckUserByLogin] = useState<boolean>(false);
    const [userLogin, setUserLogin] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPasswordElement, setIsPasswordElement] = useState<boolean>(false);

    const sendEmailForCheckUser = async () => {
        setIsLoading(true);
        const response = await AuthorizationAPI.UserChekByLogin(userLogin);
        setCheckUserByLogin(response.data!)
        setIsLoading(false)
        setIsPasswordElement(true)
    }

    return (
        <div className="auth">
            {!isPasswordElement == true ? <AuthLogin isLoading={isLoading} onClick={sendEmailForCheckUser} login={userLogin} setLogin={setUserLogin} /> : <AuthPassword toReturn={setIsPasswordElement} isHaveAccount={checkUserByLogin} />}
        </div>
    );
};

export default Auth;