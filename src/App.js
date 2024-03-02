import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Notes from "./components/Notes";
import axios from "axios";
import { url } from "./api/api";


function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    const checkLogin = async()=>{
      const token = localStorage.getItem('tokenStore')
      if(token){
        const verified = await axios.get(`${url}/users/verify`, {
          headers: {Authorization: token}
        })
        setIsLogin(verified.data)
        if(verified.data === false) return localStorage.clear()
      }else{
        setIsLogin(false)
      }      
    }
    checkLogin()
  },[])
  return (
    <div>
      {isLogin ? <Notes setIsLogin={setIsLogin}/> : <Login setIsLogin={setIsLogin}/>}
          
    </div>
  );
}

export default App;
