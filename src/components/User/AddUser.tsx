import React, { useState } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import style from './AddUser.module.css';
import ErrorModal from '../../UI/ErrorModal';

type PropsType = {
    onAddUsersHandler: (attr1: string, attr2: string) => void,
}

type UserType = {
    id: string,
    userName: string,
    userAge: string
}
type ErrorModal = {
    title: string,
    message: string
}

const AddUser = (props: PropsType) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');

    const [error, setError] = useState<ErrorModal | null>();

    function addUser(event: React.SyntheticEvent) {
        event.preventDefault();
    };

    function usernameChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setEnteredUsername(e.target.value);
        console.log(enteredUsername)
    }

    function userageChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setEnteredUserage(e.target.value);
    }

    function onAddUser() {
        if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
            setError({ title: 'Invalid input!', message: `Please enter a valid name and age (non-empty values)` });
            return
        }
        if (+enteredUserage < 1) {
            setError({ title: `Invalid age!`, message: 'Please, enter a valid age (> 0)' });
            return
        } else (
            props.onAddUsersHandler(enteredUsername, enteredUserage)
        )
        setEnteredUsername('');
        setEnteredUserage('');
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />}
            <Card className={style.input}>
                <form onSubmit={addUser} className={style.form}>
                    <Input htmlFor="username"
                        labelText="Username"
                        type="text"
                        id="username"
                        value={enteredUsername}
                        //@ts-ignore
                        onChange={usernameChangeHandler} />
                    <Input htmlFor="age"
                        labelText="Age (Year)"
                        type="number"
                        id="age"
                        value={enteredUserage}
                        //@ts-ignore
                        onChange={userageChangeHandler} />
                    <Button type='submit' name="Add user" onClick={onAddUser} />
                </form>
            </Card>

        </>
    )
}

export default AddUser;