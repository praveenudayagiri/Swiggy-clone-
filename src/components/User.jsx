import { useState } from "react";

const User=(props)=>{
    const {name}=props;
    const [count1]=useState(1);
    const [count2]=useState(2);
    return(
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>count1: {count1}</h2>
            <h2>count2: {count2}</h2>
            <h2>Location: AP</h2>
            <h2>Contact: praveenudayagiri724@gmail.com</h2>
        </div>
    )
}
export default User;