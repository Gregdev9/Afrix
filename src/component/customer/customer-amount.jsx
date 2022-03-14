import React from "react";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import "../../bootstrap.css";
import "./customer.css"
import { Navigate, useLocation, useNavigate} from "react-router-dom"
import Loader from "../Loader"





function CustomerAmount() {
    const [userAmount, setuserAmount] = useState(0)
    const [amount, setamount] = useState('')
    const location = useLocation().state
    const [transactionRef, settransactionRef] = useState('')
    const [description, setdescription] = useState('')

    const [loading, setloading] = useState(true)
 

    let customer = location.customer
    let machent = location.machent

    const navigate = useNavigate()
    // const marchant = location.marchent

    let token = customer.Afriex.accessToken

    const getCustomerAmount = async() =>{
          axios.get('http://localhost:5000/api/v1/afriex/wallet', 
         {
            headers: {
                token
            }
          }
         
         ).then((response)=>{
             setloading(false)
             setuserAmount(response.data.fiat_balances)
            // console.log(response.data.fiat_balances)
        }).catch((e) => console.log(e))
    }


    const onPay = (event) =>{
        event.preventDefault();
        setloading(true)
        let custormerAmount = parseInt(userAmount[0].balance)
        let transferAmount = parseInt(amount) 
        // return console.log()
        // console.log(token)
        if(custormerAmount < transferAmount){
            console.log('low account balance')
        }else{



            // var data = JSON.stringify({
            //     "amount":  parseInt(amount),
            //     "currency": userAmount[0].symbol,
            //     "recipient": machent.email,
            //     "description": description,
            //     "recipientCountry": "US",
            //     "recipientCurrency": userAmount[0].symbol,
            //     "senderAmount":parseInt(amount)
            //   });

            // var data = JSON.stringify({
            //     "amount":  parseInt(amount),
            //     "currency": userAmount[0].symbol,
            //     "recipient": machent.email,
            //     "description": description,
            //     "recipientCountry": "US",
            //     "recipientCurrency": userAmount[0].symbol,
            //     "senderAmount":parseInt(amount)
            //   });
            //   var config = {
            //     method: 'post',
            //     url: 'https://staging.afx-server.com/transfer-fiat',
            //     headers: { 
            //       'Authorization': 'Bearer' + ' ' + token, 
            //       'Content-Type': 'application/json'
            //     },
            //     data : data
            //   };


            // //   return console.log(config)
              
            //   axios(config)
            //   .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //   })
            //   .catch(function (error) {
            //     console.log(error.response);
            //   });

            let modal = {
                "amount": parseInt(amount),
                "currency": userAmount[0].symbol,
                "recipient": machent.email,
                "description": description,
                "recipientCountry": 'ng',
                "recipientCurrency": userAmount[0].symbol,
                "senderAmount": parseInt(amount)
              }

            // return console.log(modal)

             
            axios.post('https://staging.afx-server.com/transfer-fiat',modal,
            {
                headers: {
                  Authorization: 'Bearer ' + token,
                }
              }
            
            ).then((response)=>{

           
               console.log(response.data.reference)
               settransactionRef(response.data.reference)
               setTimeout(()=>{
                addTransactionTodb()
               },1000)
           }).catch((e) => console.log(e.response))
        }
    }


    const addTransactionTodb = (referance) =>{
        const modelMerchant = {
            marchantId:machent._id,
            amount:parseInt(amount),
            customerName:customer.Afriex.user.firstName + ' ' + customer.Afriex.user.lastName ,
            customerEmail:customer.Afriex.user.email,
            customerPhone:customer.Afriex.user.phone,
            customerAfriexId:customer.Afriex.user._id,
            customerId:customer.InstantPay._id,
            transactionsRef:transactionRef,
            transactionsType:'credit',
            description: description,
            currency:userAmount[0].symbol,
        }
        const modelCustormer = {
            customerId:customer.InstantPay._id,
            merchantName:machent.firstName + ' ' + machent.lastName,            
            merchantShopName:machent.shopName,
            merchantEmail:machent.email,
            amount: parseInt(amount),
            merchantPhone:machent.phone,
            transactionsRef:transactionRef,
            transactionsType:'debit',
            description:description,
            currency:userAmount[0].symbol,
        }

        // console.log(modelCustormer)
        axios.post('http://localhost:5000/api/v1/customer/saveMerchantTransaction', modelMerchant ).then((response)=>{
            axios.post('http://localhost:5000/api/v1/customer/saveCustomerTransaction', modelCustormer ).then((response)=>{
                setloading(false)
                let customer = location.customer.Afriex.user
                let instantPay = location.customer.InstantPay
                let machent = location.machent
                let modal = {
                    "amount": parseInt(amount),
                    "currency": userAmount[0].symbol,
                    "recipient": machent.email,
                    "description": description,
                    "recipientCountry": 'ng',
                    "recipientCurrency": userAmount[0].symbol,
                    "senderAmount": parseInt(amount)
                  }
                navigate('/transfer-success', {state:{ customer, instantPay, machent, transactionDetail:modal,  }})
            }).catch((e) => console.log(e))
            .finally(()=>setloading(false))
            
            
        }).catch((e) => console.log(e))
    } 


    useEffect(() => {
        // console.log(machent)

        getCustomerAmount()
    }, [])
    
   return ( 
       <div className="flex body-flex">
           <Loader isLoading={loading}  />
             <form onSubmit={onPay} className="form-field" >
                 <h2>Afriex Express</h2>
                 {
                     userAmount && (
                         <>
                                <span className="title">You are paying {machent.shopName} shop</span>
                                <br />
                                <span className="title">Your Afriex {userAmount[0].symbol} balance is {userAmount[0].balance} {userAmount[0].symbol} </span>
                         
                         </>
                     )
                 }
                 <div className="input-container"><input type="number" value={amount} onChange={(e)=> setamount(e.target.value)} required name="amount" placeholder="Pleace amount"/></div>
                 <div className="input-container"><input type="text" value={description} onChange={(e)=> setdescription(e.target.value)} name="" placeholder="Description"/></div>
                {/* <button className="click-button" onClick={()=> onPay()}style={{width:"200px"}}>Pay</button> */}
                <button className="click-button" style={{width:"200px"}}>Pay</button>
             </form>
           
             </div>
    );
}

export default  CustomerAmount;