import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [loginbtn,setloginbtn]=useState("login");
    const onlineStaus=useOnlineStatus();
    const {loggedinUser} = useContext(userContext);
    const cart=useSelector((store)=> store.cart.items);
    useEffect(()=>{
        
    },[loginbtn]);
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="" />
            <ul className="nav-items">
                <li>Online Staus:{(onlineStaus?"✅":"❌")}</li>
                <li> <Link to="/" >Home</Link> </li>
                <li> <Link to="/grosory" >Grosory</Link>  </li>
                <li> <Link to="/about">About </Link> </li>
                <li> <Link to="/cart" >Cart-{cart.length+" items"}</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
                <button className="login-btn" onClick={()=>{
                    loginbtn=="login"? 
                    setloginbtn("logout"):setloginbtn("login");
                }}>{loginbtn}</button>
                <li>{loggedinUser}</li>
            </ul>
        </div>
    )
};

export default Header;