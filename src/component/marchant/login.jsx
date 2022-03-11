import React, {useState} from "react";
import "../../bootstrap.css"



function LoginMarchant() {

    const [email , setEmail ] = useState()
    const [password , setPassword ] = useState()

    const handleSubmit = (event) => {

    }
    const handleInput = (event) => {

    }

    return ( 
        <div className="flex body-flex">
             <form className="form-field" method="" action="/success">
                 <h2>Afriexpress Pay</h2>
                 <div className="input-container"><input type="text" required name="email" placeholder="Email"/></div>
                 <div className="input-container"><input type="number" required name="password" placeholder="Password"/></div>
                <button className="click-button" style={{width:"200px"}}>Submit</button>
             </form>
             <a href='/marchant-signup'><span className="bottom-afrex">sign up <i className="fa fa-chevron-right"></i></span></a> 
        </div>
     );
}

export default LoginMarchant;