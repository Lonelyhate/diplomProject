import React, {FC} from 'react';
import "./ButtonMain.scss";
import cn from "classnames";
import Spinner from "../Spinner/Spinner";

interface IButtonMain {
    text: string | JSX.Element
    backGround?: "primary"
    width?: string
    height?: string
    maringBottom?: string
    onClick: () => void;
    isLoading?: boolean
    sizeSpinner?: number
    widthBorder?: number
}

const ButtonMain : FC<IButtonMain> = (
    {
        text,
        backGround= "primary",
        width = "100%",
        height = "4rem",
        maringBottom,
        onClick,
        isLoading = false,
        sizeSpinner = 40,
        widthBorder = 4
    }
) => {
    return (
        <button disabled={isLoading ? true : false} onClick={onClick} style={{width: width, height: height, marginBottom: maringBottom}}
                className={cn("button-main",
                    {
                        primary: backGround == "primary",
                        loading: isLoading == true
                    }
                )
        }
        >
            {isLoading ? <Spinner color={"#000"} size={sizeSpinner} widthBorder={widthBorder} /> : text}
        </button>
    );
};

export default ButtonMain;