import { useState } from "react"
import { API_CLIENT } from "../shared/services/API_CLIENT";
import {Link} from "react-router-dom";

export const Login = ()=>{
    
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");

    const submit = async(event)=>{
        event.preventDefault();
        const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN,{
            Email: email,
            Pass: pass
        })
        console.log(result.data.message,result.data.name);
        setemail("");
        setpass("");
    }
    return(
    <>
        <div>
            <label>Email </label>
            <input value={email} onChange={(event)=>{
                event.preventDefault();
                setemail(event.target.value);
            }}/><br/>
            <label>Pass </label>
            <input value={pass} onChange={(event)=>{
                event.preventDefault();
                setpass(event.target.value);
            }}/><br/>
            <button onClick={submit}>Login</button><br/>
            <label>Not a user, <Link to="/">Register</Link></label>
        </div>
    </>
    )
}