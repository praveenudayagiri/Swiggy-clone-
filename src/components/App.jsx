// src/components/App.jsx
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import userContext from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const App = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    //User Authentication
    const data={
      name:"Praveen Udayagiri"
    }
    setUserName(data.name);
  },[]);
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedinUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
  );
};

export default App;
