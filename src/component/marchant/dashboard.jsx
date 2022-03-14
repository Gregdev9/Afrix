import React, { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
// import "../../bootstrap.css"
import axios from "axios"
import Loader from "../Loader"
import dateFormat from "dateformat";



function Dashboard() {
    const location = useLocation().state.data
    const [loading, setloading] = useState(true)

    const [transactions, settransactions] = useState([])

    const merchantId = location._id

    
    const newList = transactions.forEach((item, index)=>{
        console.log(index, item)
    })

    useEffect(() => {
        console.log(newList)
     axios.post('https://instantpay.herokuapp.com/api/v1/customer/get-merchent-transaction', {id:merchantId} ).then((response)=>{
         setloading(false)
         settransactions(response.data)
        //  console.log(response.data)
        // if(response.status === 200){
        //     setloading(true)
        //     let data = response.data.InstantPay
        //     navigate('/dashboard', {state:{ data }})
        // }
       
    }).catch((e) =>setloading(false))
    .finally(()=> setloading(false))
    }, [])
    
   return ( 
       <div className="flex">
           <Loader isLoading={loading}  />
            <div className="flex py-3 px-2" style={{width:"100%"}}>
                <div className="col-6">
                    <Link to="/marchant-qrcode" state={merchantId} ><span className="fa fa-qrcode side-icon"></span></Link>
                </div>
                <div className="col-6 text-right">
                <span className="fa fa-user side-icon side-icon-outline"></span>
                </div>
            </div>

             <table class="table table-striped table-hover">
             <thead>
                    <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                   
                    </tr>
                </thead>
                <tbody>
                
            {
                transactions.map((list, index)=> (
                    <>
               
                
                   
                    
               <tr>
                    <th scope="row">{index + 1}</th>
                   
                    <td>{list.customerName}</td>
                    <td>{list.currency} {list.amount}</td>
                    <td> {list.description}</td>
                    <td>{dateFormat(list.created, " mmmm dS, yyyy, h:MM:ss TT")}</td>
                  
                   


                    </tr>

                   
               
                    </>
                ))
            }


           
            </tbody>
           
             
            </table>

     
             {/* end of middle container */} 

           {/* <Link to='/'><span className="bottom-afrex">Afriex <i className="fa fa-chevron-right"></i></span></Link>   */}
           <a href='http://afriex.com'><span className="bottom-afrex">Afriex <i className="fa fa-chevron-right"></i></span></a>   
        </div>
    );
}

export default Dashboard;