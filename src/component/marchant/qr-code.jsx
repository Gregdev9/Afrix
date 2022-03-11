import React from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css"
var QRCode = require('qrcode.react');

function Qrcode() {
   return ( 
       <div className="flex body-flex">
           <div className="content-container text-center">  
                  <span ><QRCode  value="http://localhost:3000/customer/home/?merchantId=123456" /></span> 
                  <Link to='/dashboard'><span className="bottom-afrex"><i className="fa fa-chevron-left"></i> back </span></Link>  
           </div>
       </div>
    );
}

export default Qrcode;