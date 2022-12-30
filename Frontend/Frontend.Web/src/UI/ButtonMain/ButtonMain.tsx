import React, {FC} from 'react';
import "./ButtonMain.scss";
import cn from "classnames";
import Spinner from "../Spinner/Spinner";

interface IButtonMain {
    text: string | JSX.Element
    backGround?: "primary" | "gray"
    width?: string
    height?: string
    maringBottom?: string
    onClick: () => void;
    isLoading?: boolean
    sizeSpinner?: number
    widthBorder?: number
    marginTop?: string
    disabled?: boolean
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
        widthBorder = 4,
        marginTop,
        disabled
    }
) => {

    const isDisabled = (): boolean => {
        if (isLoading || disabled)
        {
            return true;
        }
        return false;
    }

    console.log(disabled)

    return (
        <button disabled={isDisabled()} onClick={onClick} style={{width: width, height: height, marginBottom: maringBottom, marginTop: marginTop,}}
                className={cn("button-main",
                    {
                        primary: backGround == "primary",
                        gray: backGround == "gray",
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