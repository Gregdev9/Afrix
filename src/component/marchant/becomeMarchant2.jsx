import React from "react";
import "../../bootstrap.css"
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



function BecomeMarchant2() {
    const location = useLocation()
    

    const [password, setpassword] = useState('')
    const [confirmPassWord, setconfirmPassWord] = useState('')

    const data = location.state.data

    const newData = {
        email: data.email,
        password: password,
        country:data.country,
        firstName : data.fName,
        lastName : data.lName,
        phone : data.phone,
        userName : data.userName
    } 

    const handleSubmit = (e) => {
        if(password === confirmPassWord){
            console.log(newData)
            axios.post('http://localhost:5000/api/v1/afriex/signup', newData)
        }

    }

    useEffect(() => {
        
    }, [])
    

    return ( 
        <div className="flex body-flex">
             <div onSubmit={(e)=> handleSubmit()} className="form-field" >
                 <h2>Afriexpress Pay</h2>
                 <div className="input-container"><input type="text" required name="Password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password"/></div>
                 <div className="input-container"><input type="text" required name="confirmPassword" value={confirmPassWord} onChange={(e)=> setconfirmPassWord(e.target.value)}  placeholder="Confirm Password"/></div>
                <button className="click-button" onClick={()=> handleSubmit()} style={{width:"200px"}}>Submit</button>
             </div>
        </div>
     );
}

export default BecomeMarchant2;