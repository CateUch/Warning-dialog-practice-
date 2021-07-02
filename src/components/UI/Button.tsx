import React, {ReactNode} from 'react';
import style from './Button.module.css';



type PropsType = {
    type: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    name: ReactNode
}


function Button(props: PropsType) {

    return (
        <button
            className={style.button}
            type={props.type || 'button'}
            onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button;