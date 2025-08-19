import { useState,useEffect } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantMenu =(resId) =>{
    
    const [resInfo,setresInfo]= useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() =>{
    const data=await fetch(MENU_API_URL+resId);
    const json=await data.json();
    setresInfo(json?.data?.cards);
    }
    return resInfo;
};
export default useRestaurantMenu;