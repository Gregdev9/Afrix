import React, {useState} from "react";
import "../../bootstrap.css"

import axios from "axios"
import { useNavigate } from "react-router";



function LoginMarchant() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        let modal = {
            email:email,
            password:password

        }
        event.preventDefault();

        axios.post('http://localhost:5000/api/v1/customer/login', modal, ).then((response)=>{
            console.log(response)
            navigate('/dashboard', {state:{ response }})
        }).catch((e) => console.log(e))
    }
    const handleInput = (event) => {

    }

    return ( 
        <div className="flex body-flex">
             <form onSubmit={handleSubmit} className="form-field" >
                 <h2>Afriexpress Pay</h2>
                 <div className="input-container"><input type="text" required name="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Email"/></div>
                 <div className="input-container"><input type="text" required name="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password"/></div>
                <button className="click-button" style={{width:"200px"}}>Submit</button>
             </form>
             <a href='/marchant-signup'><span className="bottom-afrex">sign up <i className="fa fa-chevron-right"></i></span></a> 
        </div>
     );
}

export default LoginMarchant;