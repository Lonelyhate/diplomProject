import React, {FC} from 'react';
import "./AuthInput.scss";

interface IAuthInput {
    placeholder?: string
    type?: "text"
    marginBottom?: string
}

const AuthInput: FC<IAuthInput> = ({placeholder, type="text", marginBottom}) => {
    return (
        <input className={"auth-input input"} type={type} placeholder={placeholder} style={{marginBottom: marginBottom}}  />
    );
};

export default AuthInput;