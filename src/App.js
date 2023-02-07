// import './App.css';
import React, {useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
function App() {
  const[usersList,setUsersList]=useState([]);
  const addUsersHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [
        ...prevUsersList,
        {name:uName,age:uAge,id:Math.random().toString()}
      ];
    });
    // console.log(usersList)
  };
    return (
    <div>
      <AddUser onAddUser={addUsersHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
