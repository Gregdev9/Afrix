import React from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"

function Overview() {
   return ( 
       <div className="flex body-flex">
             <form className="form-field" method="" action="/customer/final-reciept">
                 <h2>Afriex Express</h2>
                 <span className="title">You paid {`Okoli's shop`}</span>
               <div className="py-5">
                <input className="click-button outline-button text-center" value={`2000`}></input><br></br>
                <button type="submit" className="click-button ">Download Reciept</button>
                 </div>
              
             </form>
           
             </div>
    );
}

export default  Overview;