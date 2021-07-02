import React from 'react';
import Button from './Button';
import Card from './Card';
import style from './Error.module.css'

type PropsType = {
    title: string,
    message: string,
    onConfirm: () => void

}

const ErrorModal = (props: PropsType) => {
    return (
        <>
            <div className={style.backdrop} onClick={props.onConfirm}>
                <Card className={style.modal} >
                    <header className={style.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={style.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={style.actions}>
                        <Button type='button' name='Ok' onClick={props.onConfirm} />
                    </footer>
                </Card>
            </div>
        </>
    )
}

export default ErrorModal