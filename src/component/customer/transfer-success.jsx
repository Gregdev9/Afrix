import React from "react";
import {useState, useEffect} from "react"
import { Navigate, useLocation, Link, useNavigate} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"

function TransferSuccess() {
  
  const navigate = useNavigate()
  const location = useLocation().state

  const machent = location.machent



  useEffect(() => {
   console.log(location)
  }, [])
  
   return ( 
       <div className="flex body-flex">
             <form className="form-field" method="" action="">
                 <h2>Afriex Express</h2>
               {
                 location && (
                   <>
                       {
                  machent && (
                    <span className="title">You have paid {machent.shopName} shop </span>
                  )
                }
               <div className="py-5">
                 <span className="view-success">&#x2713;</span><br></br>
                 <span className="bold-text">Success</span>
                 </div>
                 <div className="bold-text" style={{textDecoration:'underline'}}>
                  <Link to="/customer/overview-reciept" state={{location}}> Click here to view your reciept</Link>
                 </div>
                   </>
                 )
               }
              
             </form>
           
             </div>
    );
}

export default  TransferSuccess;