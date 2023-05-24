import { useState } from "react"
import { API_CLIENT } from "../shared/services/API_CLIENT";
import {Link} from 'react-router-dom';

export const Register = ()=>{
    
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");

    const submit = async(event)=>{
        event.preventDefault();
        const result = await API_CLIENT.post(process.env.REACT_APP_REGISTER,{
            Name: name,
            Email: email,
            Pass: pass
        })
        setname("");
        setemail("");
        setpass("");
    }

    return(

    <>
        <div>
            <label>Name </label>
            <input value={name} onChange={(event)=>{
                event.preventDefault();
                setname(event.target.value);
            }}/><br/>
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
            <button onClick={submit}>Register</button><br/>
            <label>Already a user , <Link to="login">login</Link></label>
        </div>
    </>
    )
}