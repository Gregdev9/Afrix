import React from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"

function FinalReciept() {
   return ( 
       <div className="flex body-flex">
             <form className="form-field" method="" action="">
                 <h2>Afriex Express</h2>
                 <span className="title">You are paying {`Okoli's shop`}</span>
               <div className="py-5">
                 <span className="view-success">&#x2713;</span><br></br>
                 <span className="bold-text">downloaded</span>
                 </div>
             </form>
           
             </div>
    );
}

export default  FinalReciept;