import React, {FC} from 'react';
import "./Auth.scss";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import AuthLogin from "./AuthLogin/AuthLogin";

const Auth : FC = () => {
    return (
        <div className="auth">
            <AuthLogin/>
        </div>
    );
};

export default Auth;