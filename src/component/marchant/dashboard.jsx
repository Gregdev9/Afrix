import React, { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
import "../../bootstrap.css"

function Dashboard() {
    const location = useLocation().state.data

    const merchantId = location._id
    const [payment,setPatment]=useState([
        // {name:"isaac Ameh",amount:'400',item:'ipod'},
        // {name:"jerry azubuike",amount:'850',item:'beams'},
        // {name:"david nyam",amount:'500',item:'charger'},
        // {name:"patrick lame",amount:'1200',item:'cream'},

    ])

    useEffect(() => {
     console.log(merchantId)
    }, [])
    
   return ( 
       <div className="flex">
            <div className="flex py-3 px-2" style={{width:"100%"}}>
                <div className="col-6">
                    <Link to="/marchant-qrcode"><span className="fa fa-qrcode side-icon"></span></Link>
                </div>
                <div className="col-6 text-right">
                <span className="fa fa-user side-icon side-icon-outline"></span>
                </div>
            </div>

     
            <div className="flex col-12 justify-center py-5"> {/* start of middle container */}
                <div className="middle-col">    {/* start of middle sub-container */}  
                <div className="flex dashboard--header">
                    <div className="col-4 p-1 header">Customer</div>
                    <div className="col-4 p-1 header">Amount</div>
                    <div className="col-4 p-1 header">Items</div>
                </div>
                <div className="">
                     {payment.map(e=>  <div key={payment.indexOf(e)} className="flex dashboard--header">
                        <div className="col-4 p-1 py-2 content-head">{e.name}</div>
                        <div className="col-4 p-1 py-2 content-head">{e.amount}</div>
                        <div className="col-4 p-1 py-2 content-head">{e.item}</div>
                  </div>)}
                </div>

                </div>       {/* end of middle sub-container */}
            </div>   {/* end of middle container */} 

           {/* <Link to='/'><span className="bottom-afrex">Afriex <i className="fa fa-chevron-right"></i></span></Link>   */}
           <a href='http://afriex.com'><span className="bottom-afrex">Afriex <i className="fa fa-chevron-right"></i></span></a>   
        </div>
    );
}

export default Dashboard;