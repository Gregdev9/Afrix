import React from "react";
import "../../bootstrap.css"
// import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function becomeMarchant1() {
   

  
    const [email, setemail] = React.useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) =>{
        // return console.log(location.state)
        e.preventDefault();
        let model = {
            // firstName:fName,
            // lastName:lName,
            // email,
            // phone,
            // password,
            // currency:location.state.currency,
            // monoId:location.state._id,
        }

        axios.post('http://localhost:5000/api/v1/customer/createCustomer', model).then((response)=>{
            console.log(response)
            if(response.status === 201){
                // navigate('/customer/amount', {state:newState } )
            }
        }).catch((e)=>{
            console.log(e)
        })
       
    }

    // React.useEffect(() => {
       
    // }, [])
    
    return ( 
        <div className="flex body-flex">
             <form onSubmit={(e)=> handleSubmit(e)} className="form-field" >
                 <h2>Afriexpress Pay</h2>
                 
                 <div className="input-container"><input type="text" required name="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Email"/></div>
                 <div className="input-container"><input type="text" required name="phone" value={phone} onChange={(e)=> setphone(e.target.value)} placeholder="Phone"/></div>
                 <div className="input-container"><input type="text" required name="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password"/></div>
                <button className="click-button" style={{width:"200px"}}>Next</button>
             </form>
        </div>
     );
}

export default becomeMarchant1;