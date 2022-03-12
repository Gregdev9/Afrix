import React, {useState} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom"

import "../../bootstrap.css";
import "./customer.css"
import axios from "axios"
import { data } from "autoprefixer";

function Password() {

    const location = useLocation();

    let navigate = useNavigate()

    console.log(location.state.customer);
    const customer = location.state.customer
    const machent = location.state.machent
    // const email = location.state.email;
    const [password, setPassword] = useState("")



    const handleSubmit = () => {
       
        axios.post('http://localhost:5000/api/v1/customer/login',
        {
            email:customer.email,
            password:password
        })
        .then((response)=>{
            // console.log(response)
            if(response.status === 200){
                let customer = response.data
                navigate('/customer/amount', {state:{customer, machent, }} )
                
            }

            
           
        }).catch((err) => {
            console.log(err.response);
        })

    }

    


   return ( 
       <div className="flex body-flex">
           
             <div className="form-field" >
                 <h2>Afriex Express</h2>
                 <span className="title"> {customer.email} please enter your password</span>
                 <div className="input-container"><input type="text" handleInput required name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                 <button className="click-button" onClick={()=> handleSubmit()} style={{width:"200px"}}>proceed</button>
             </div>
           
             </div>
    );
}

export default  Password;