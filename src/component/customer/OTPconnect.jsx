import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"
const MonoConnect = require('@mono.co/connect.js');

function OTP_Customer() {
     
    const otppin=[...document.querySelectorAll(".otp-container>input")]
      useEffect(()=>{
        //code to focus first child onload
        //   otppin.forEach(element => {
        //       if(otppin.indexOf(element)==0){
        //           element.focus()
        //       }
        //   });

      
    },[])
          //code to shift after change of input
    const keyDownFunc=(e)=>{
        //       setTimeout(()=>{
        //         let num=Number(otppin.indexOf(e.target))+1
        //         if(num<otppin.length){
        //      otppin[num].focus()
        //   }
        //       },50)
          
    }

    const handleSubmit=(event) => {
        event.preventDefault();
       //check if user belongs to afriex
       //check if user has his mono connected to afriex
    
   //    monoConnect()
    }

    // const monoConnect = React.useMemo(() => {
    //     const monoInstance = new MonoConnect({
    //       onClose: () => console.log('Widget closed'),
    //       onLoad: () => console.log('Widget loaded successfully'),
    //       onSuccess: (code ) => handleConnectedAccount(code) ,
    //       key: window.location.hostname === 'localhost'
    //                 ? 'test_pk_u4eDYW0RxPPk0xotjsid'
    //                 : 'live_pk_teyHQwlq7SJhE70IwvvY',
    //     })
    
    //     monoInstance.setup()
        
    //     return monoInstance;
    // }, [])

   return ( 
       <div className="flex body-flex">
          <form className="form-field" onSubmit={handleSubmit}>
                 <h2>Afriex Express</h2>
                 <div>You are paying {`Okoli's shop`}</div>
                 
                 <div className="input-container otp-container">
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"/>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"></input>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"/>
                     <input onKeyDown={keyDownFunc} type="number" required placeholder="0"></input>
                     </div>
                     <span className="caption">please input the four-digit sent to your phone number</span>
               <button className="click-button" style={{width:"200px"}}>Submit</button>
             </form>
        </div>
    );
}

export default OTP_Customer;