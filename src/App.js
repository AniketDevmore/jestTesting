import { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const onUserAdd = (newUser) =>{
    setUserList([...userList, newUser]);
  }

  return (
    <div>
      <UserForm onUserAdd={onUserAdd}/>
      <hr/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
