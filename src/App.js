import { useState } from 'react';
import './App.css';
import UserForm from './UserForm/UserForm';
import UserList from './UserList/UserList';
import OtherTag from './OtherTag/OtherTag';
import AccessibleName from './AccessibleName/AccessibleName';
import MoreNames from './MoreNames/MoreNames';
import IconButtons from './IconButtons/IconButtons';
import DataForm from './DataForm/DataForm';

function App() {
  const [userList, setUserList] = useState([]);

  const onUserAdd = (newUser) =>{
    setUserList([...userList, newUser]);
  }

  return (
    <div>
      {/* <UserForm onUserAdd={onUserAdd}/>
      <hr/>
      <UserList userList={userList}/>
      <hr/>
      <OtherTag/> */}
      {/* <AccessibleName/> */}
      {/* <MoreNames/> */}
      {/* <IconButtons/> */}
      <DataForm/>
    </div>
  );
}

export default App;
