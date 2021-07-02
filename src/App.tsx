import React, {useState} from 'react';
import AddUser from './components/User/AddUser';
import style from './App.module.css';
import Userlist from './components/User/Userlist';
import { v1 } from 'uuid';

type UserType = {
  id: string,
  userName: string,
  userAge: string
}



function App() {

  const [users, setUsers] = useState<any[]>([]);

  function onAddUser (enteredUsername: string, enteredUserage: string) {

      let newUser = {
          id: v1(),
          userName: enteredUsername,
          userAge: enteredUserage
      }
      setUsers((users) => {
        return [...users, newUser]
      });
  }

  return (
    <div className={style.app}>
      <AddUser onAddUsersHandler = {onAddUser} />
      <Userlist userlist={users}/>
    </div>
  );
}

export default App;
