import React, { useEffect } from "react";
// import {Link} from "react-router-dom"
// import "../../bootstrap.css"

function OTP_Connect() {
     
    const otppin=[...document.querySelectorAll(".otp-container>input")]

      useEffect(()=>{
        //code to focus first child onload
          otppin.forEach(element => {
              if(otppin.indexOf(element)==0){
                  element.focus()
              }
          });
      },[])
      
          //code to shift after change of input
          const keyDownFunc=(e)=>{
              let num=Number(otppin.indexOf(e.target))+1
         setTimeout(()=>{
            if(num<otppin.length){
                otppin[num].focus()
             }
         })
    }

   return ( 
       <div className="flex body-flex">
          <form className="form-field" method="" action="/success">
                 <h2>Connect to Afriex</h2>
                 <div className="input-container otp-container">
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"/>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"></input>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"/>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"></input>
                     </div>
                     <span className="caption">please input the four-digit code</span>
               <button className="click-button" style={{width:"200px"}}>Connect</button>
             </form>
        </div>
    );
}

export default OTP_Connect;