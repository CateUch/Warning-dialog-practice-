import React from 'react';
import Card from '../../UI/Card';
import style from './Userlist.module.css'

type UserType = {
    id: string,
    userName: string,
    userAge: string
}

type PropsType = {
    userlist: UserType[]
}

const Userlist = (props: PropsType) => {
    return (
        <Card className={style.userlist}>
            {
                props.userlist.length === 0 ? <div>No user exists </div> :
                    <ul>
                        {props.userlist.map((user: UserType) =>
                            <li key={user.id}>
                                <h3>{user.userName} ( {user.userAge} years old ) </h3>
                            </li>
                        )}
                    </ul>

            }
        </Card>
    )
}


export default Userlist