import React, {FC} from 'react';
import "./ButtonMain.scss";
import cn from "classnames";

interface IButtonMain {
    text: string
    backGround?: "primary"
    width?: string
    height?: string
    maringBottom?: string
}

const ButtonMain : FC<IButtonMain> = ({text, backGround= "primary", width = "100%", height = "4rem", maringBottom}) => {
    return (
        <button style={{width: width, height: height, marginBottom: maringBottom}} className={cn("button-main", {
            primary: backGround == "primary"
        })}>{text}</button>
    );
};

export default ButtonMain;