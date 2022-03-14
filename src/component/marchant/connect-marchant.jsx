import React from "react";
// import {Link} from "react-router-dom"
// import "../../bootstrap.css"

function ConnectMarchant() {
   return ( 
       <div className="flex body-flex">
             <form className="form-field" method="" action="/OTP-connect">
                 <h2>Connect to Afriex</h2>
                 <div className="input-container"><input type="number" required name="fullname" placeholder="+234 8089873611"/></div>
               <button className="click-button" style={{width:"200px"}}>Connect</button>
             </form>
           
             </div>
    );
}

export default  ConnectMarchant;