import React, {useState} from "react";
import {Link, Redirect, useLocation} from "react-router-dom"

import "../../bootstrap.css";
import "./customer.css"
import axios from "axios"

function Password() {

    const location = useLocation();

    console.log(location);
    const email = location.state.email;
    const [password, setPassword] = useState("Tester500")


    const handleSubmit = () => {
       
        axios.post('http://localhost:5000/api/v1/afriex/login',
        {
            email:email,
            password:password
        })
        .then((res)=>{
            console.log(res.data);
           
        }).catch((err) => {
            console.log(err);
        })

    }

    


   return ( 
       <div className="flex body-flex">
           
             <div className="form-field" >
                 <h2>Afriex Express</h2>
                 <span className="title">{location.state.email} please enter your password</span>
                 <div className="input-container"><input type="password" handleInput required name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                 <button className="click-button" onClick={()=> handleSubmit()} style={{width:"200px"}}>proceed</button>
                 <button className="click-button" onClick={()=> handleSubmit()} style={{width:"200px"}}>proceed</button>
             </div>
           
             </div>
    );
}

export default  Password;