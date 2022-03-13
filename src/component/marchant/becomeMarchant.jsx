import React from "react";
import "../../bootstrap.css"

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function BecomeMarchant() {
   const navigate = useNavigate()

    const [firstName, setfirstName] = React.useState('')
    const [lastName, setlastName] = React.useState('')
    const [shopName, setshopName] = React.useState('')
    const [email, setemail] = React.useState('')
    const [phone, setphone] = useState('')
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')

    // return console.log(location.state)
    const newValue = () =>{
        let number ;

        if(phone.length === 11 ){
            let p = phone.replace('0', '')

            number = '+234' + p
            // console.log(phone)
        }



        return number;

        
    }

    const handleSubmit = (event) =>{

        event.preventDefault();

        let model = {
            firstName:firstName,
            lastName:lastName,
            userName,
            email,
            phone: newValue(),
            password,
            shopName, 
            
        }

        // return console.log(model)


        axios.post('http://localhost:5000/api/v1/customer/createCustomer', model).then((response)=>{
            console.log(response)
            navigate('/success', )
          
        }).catch((e)=>{
            console.log(e.response)
        })   
    }

    // React.useEffect(() => {
       
    // }, [])
    
    return ( 
        <div className="flex body-flex">
             <form onSubmit={handleSubmit} className="form-field" >
                 <h2>Afriexpress Pay</h2>
                 
                 <div className="input-container"><input type="text" required  value={firstName} onChange={(e)=> setfirstName(e.target.value)} placeholder="First name"/></div>
                 <div className="input-container"><input type="text" required  value={lastName} onChange={(e)=> setlastName(e.target.value)} placeholder="Last Name"/></div>
                 <div className="input-container"><input type="text" required  value={userName} onChange={(e)=> setuserName(e.target.value)} placeholder="User Name"/></div>
                 <div className="input-container"><input type="text" required  value={shopName} onChange={(e)=> setshopName(e.target.value)} placeholder="Shop Name"/></div>

                 <div className="input-container"><input type="text" required name="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Email"/></div>
                 <div className="input-container"><input type="text" required name="phone" value={phone} onChange={(e)=> setphone(e.target.value)} minLength="11" maxlength="11" placeholder="Phone"/></div>
                 <div className="input-container"><input type="text" required name="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password"/></div>
                <button className="click-button" style={{width:"200px"}}>Next</button>
             </form>

             {/* <button className="click-button" style={{width:"200px"}}>Next</button> */}

        </div>
     );
}

export default BecomeMarchant;