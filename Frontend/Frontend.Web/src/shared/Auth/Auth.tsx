import React, {FC, useEffect, useState} from 'react';
import "./Auth.scss";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import AuthLogin from "./AuthLogin/AuthLogin";
import AuthorizationAPI from "../../models/API/AuthorizationAPI";
import AuthPassword from "./AuthPassword/AuthPassword";

interface IAuth {
    openAuthInModal?: boolean

}

const Auth : FC<IAuth> = ({openAuthInModal}) => {
    const [checkUserByLogin, setCheckUserByLogin] = useState<boolean>(false);
    const [userLogin, setUserLogin] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isPasswordElement, setIsPasswordElement] = useState<boolean>(false);

    const sendEmailForCheckUser = async () => {
        setIsLoading(true);
        const response = await AuthorizationAPI.UserChekByLogin(userLogin);
        setCheckUserByLogin(response.data!)
        setIsLoading(false)
        setIsPasswordElement(true)
    }

    useEffect(() => {
        if (!openAuthInModal)
        {
            setTimeout(cleanAuth, 380)
        }
    }, [openAuthInModal])

    const cleanAuth = () => {
        setUserLogin("");
        setUserPassword("")
        setIsPasswordElement(false);
        setCheckUserByLogin(false);
    }

    return (
        <div className="auth">
            {!isPasswordElement == true ? <AuthLogin isLoadingBtn={isLoading} onClick={sendEmailForCheckUser} login={userLogin} setLogin={setUserLogin} /> : <AuthPassword cleanAuth={cleanAuth} password={userPassword} setPassword={setUserPassword} login={userLogin} toReturn={setIsPasswordElement} isHaveAccount={checkUserByLogin} />}
        </div>
    );
};

export default Auth;