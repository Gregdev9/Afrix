import React, {useEffect} from "react";
import { Navigate, useLocation, Link, useNavigate} from "react-router-dom"

import "../../bootstrap.css";
import "./customer.css"

function Overview() {
    const location = useLocation().state.location

    let transactionDetail = location.transactionDetail
    let merchant  = location.machent

    useEffect(() => {
     console.log(location)
    }, [])
    
   return ( 
       <div className="flex body-flex">
            {
                location && (
                    <>
                         <form className="form-field" method="" action="/customer/final-reciept">
                 <h2>Afriex Express</h2>
                 <span className="title">You paid {merchant.shopName} shop</span>
               <div className="py-5">
                <input  className="click-button outline-button text-center" value={transactionDetail.amount}></input><br></br>
                <button type="submit" className="click-button ">Download Reciept</button>
                 </div>
              
             </form>
                    </>
                )
            }
           
             </div>
    );
}

export default  Overview;