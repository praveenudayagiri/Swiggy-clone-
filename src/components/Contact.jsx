import { useContext } from "react";
import userContext from "../utils/userContext";

const Contact=()=>{
    const {loggedinUser,setUserName} = useContext(userContext);

    return(
        <div>
            <h1>This is contact page</h1>
            <input className="contact-input" type="text"
            value={loggedinUser}
            onChange={(e)=>setUserName(e.target.value)}
            />
        </div>
    )
};
export default Contact;