import React from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css"

function Success() {
   return ( 
       <div className="flex body-flex">
           <div className="content-container text-center">
                  <span className="success-check">&#x2713;</span> 
                  <div>
                      <h4 className="py-3">Registered Successfully</h4>
                      <Link to="/dashboard"><button className="click-button">Click to go to Dashboard</button></Link>
                  </div>
           </div>
       </div>
    );
}

export default Success;