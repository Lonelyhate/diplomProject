import React, {FC} from 'react';
import "./AuthInput.scss";

interface IAuthInput {
    placeholder?: string
    type?: "text" | "password"
    marginTop?: string
    marginBottom?: string
    value?: string
    setValue?: (e: any) => void;
}

const AuthInput: FC<IAuthInput> = ({placeholder, type="text", marginBottom, value, setValue, marginTop}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue && setValue(e.target.value)
    }

    return (
        <input value={value} onChange={(e) => onChange(e)} className={"auth-input input"} type={type} placeholder={placeholder} style={{marginBottom: marginBottom, marginTop: marginTop}}  />
    );
};

export default AuthInput;