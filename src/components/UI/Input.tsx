import React from 'react';




type PropsInputType =
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
        // onChange?: (React.ChangeEventHandler<HTMLInputElement> & React.FormEventHandler<HTMLLabelElement> & ((e: React.FormEvent<HTMLInputElement>) => void)) | undefined,
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined,
        labelText: string,
    }

function Input(props: PropsInputType) {

    const { onChange, labelText} = props

    return (
        <>
            <label  htmlFor={props.htmlFor}>{props.labelText}</label>
            <input  type={props.type} id={props.id} onChange={props.onChange} value={props.value}/>
        </>

    )
}

export default Input;