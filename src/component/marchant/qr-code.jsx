import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom"
import "../../bootstrap.css"
var QRCode = require('qrcode.react');

function Qrcode() {
    const location = useLocation().state

    let url = `http://localhost:3000/${location}`

    useEffect(() => {
      console.log(location)
    }, [])
    
   return ( 
       <div className="flex body-flex">
           <div className="content-container text-center">  
                  <span ><QRCode  value={url} /></span> 
                  <Link to='/dashboard'><span className="bottom-afrex"><i className="fa fa-chevron-left"></i> back </span></Link>  
           </div>
       </div>
    );
}

export default Qrcode;