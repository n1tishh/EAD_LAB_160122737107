
import { useState } from "react";
function CheckStrength(){
    const [password,setPassword]=useState("");
    const [strength,setStrength]=useState("");

    const checkpasswordstrength=(password)=>{
        let strength="";

        if (password.length <6) {
            strength="weak";
        }else if( password.length >12 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)){
            strength="Strong";
        }else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)){
            strength="Moderate";
        }else{
            strength="very weak";
        }
        return strength;
    };


    const handlePasswordChange = (e) =>{
        const newPassword=e.target.value;
        setPassword(newPassword);
        setStrength(checkpasswordstrength(newPassword));
    };

    return(
        <div>
            <h2> Paassword Strength Checker</h2>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" style={{ padding: '10px', marginBottom: '10px', width: '100%' }}/ >
            <p>Password Strength: <strong>{strength}</strong></p>
        </div>
    );
};

export default CheckStrength;
