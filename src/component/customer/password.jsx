import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom"

// import "../../bootstrap.css";
import "./customer.css"
import axios from "axios"
// import { data } from "autoprefixer";

import Loader from "../Loader"

function Password() {
    const [loading, setloading] = useState(false)
    const location = useLocation();

    let navigate = useNavigate()

    console.log(location.state.customer);
    const customer = location.state.customer
    const machent = location.state.machent
    // const email = location.state.email;
    const [password, setPassword] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault();
       setloading(true)
        axios.post('https://instantpay.herokuapp.com/api/v1/customer/login',
        {
            email:customer.email,
            password:password
        })
        .then((response)=>{
            // console.log(response)
            if(response.status === 200){
                let customer = response.data
                setloading(false)
                navigate('/customer/amount', {state:{customer, machent, }} )
                
            }

            
           
        }).catch((err) => {
            setloading(false)
            console.log(err.response);
        }).finally(()=> setloading(false))

    }

    


   return ( 
       <div className="flex body-flex">
            <Loader isLoading={loading}  />
             <form onSubmit={handleSubmit} className="form-field" >
                 <h2>Afriex Express</h2>
                 <span className="title"> {customer.email} please enter your password</span>
                 <div className="input-container"><input type="text" handleInput required name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                 <button className="click-button"  style={{width:"200px"}}>Proceed</button>
             </form>
           
             </div>
    );
}

export default  Password;