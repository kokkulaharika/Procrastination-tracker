import React, { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";

let App=()=>{
  const[user, setUser]=useState(null);
  useEffect( ()=>{
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  },[]);
  
  return(
    <>
       {user ? (
        <Dashboard user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  )
}
export default App;