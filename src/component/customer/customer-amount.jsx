import React from "react";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";

import "../../bootstrap.css";
import "./customer.css"
import { Navigate, useLocation, useNavigate} from "react-router-dom"




function CustomerAmount() {
    const [amoumt, setamoumt] = useState('')
    const location = useLocation().state

    const marchant = location.marchent

    useEffect(() => {
     console.log(location, '/location')
    }, [])
    
   return ( 
       <div className="flex body-flex">
             <form className="form-field" >
                 <h2>Afriex Express</h2>
                 <span className="title">You are paying {marchant.shopName} shop</span>
                 <div className="input-container"><input type="number" value={amoumt} onChange={(e)=> setamoumt(e.target.value)} required name="amount" placeholder="place amount"/></div>
                <button className="click-button" style={{width:"200px"}}>Pay</button>
             </form>
           
             </div>
    );
}

export default  CustomerAmount;