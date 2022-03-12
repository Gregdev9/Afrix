import React from "react";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import "../../bootstrap.css";
import "./customer.css"
import { Navigate, useLocation, useNavigate} from "react-router-dom"




function CustomerAmount() {
    const [userAmount, setuserAmount] = useState(0)
    const [amount, setamount] = useState('')
    const location = useLocation().state
    const [transactionRef, settransactionRef] = useState('fjvbnxzd cbs c ds')
    const [description, setdescription] = useState('')


 

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
             setuserAmount(response.data.fiat_balances)
            // console.log(response.data.fiat_balances)
        }).catch((e) => console.log(e))
    }


    const onPay = () =>{
        // console.log(token)
        if( userAmount[0].balance < amount){
            console.log('low account balance')
        }else{

            let modal = {
                amount: amount,
                currency: userAmount[0].symbol,
                recipient: machent.email,
                description: description,
                recipientCountry: 'ng',
                recipientCurrency: userAmount[0].symbol,
                senderAmount: amount
              }

            // return console.log(modal)

              
            axios.post('http://localhost:5000/api/v1/afriex/transfer',modal,
            {
                headers: {
                    token
                }
              },
            
            ).then((response)=>{

                axios.post('http://localhost:5000/api/v1/afriex/transfer',).then(()=>{
                    navigate('/transfer-success', {state:{ customer, machent, }} )
                    console.log(response)
                })
               
               
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
            description: description
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
        }

        console.log(modelCustormer)
        axios.post('http://localhost:5000/api/v1/customer/saveMerchantTransaction', modelMerchant ).then((response)=>{
            axios.post('http://localhost:5000/api/v1/customer/saveCustomerTransaction', modelCustormer ).then((response)=>{
            
            
            
            }).catch((e) => console.log(e))
            
            
        }).catch((e) => console.log(e))
    } 


    useEffect(() => {
        // console.log(machent)

        getCustomerAmount()
    }, [])
    
   return ( 
       <div className="flex body-flex">
             <div className="form-field" >
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
                 <div className="input-container"><input type="text" value={description} onChange={(e)=> setdescription(e.target.value)} required name="" placeholder="Description"/></div>
                {/* <button className="click-button" onClick={()=> onPay()}style={{width:"200px"}}>Pay</button> */}
                <button className="click-button" onClick={()=> addTransactionTodb()}style={{width:"200px"}}>Pay</button>
             </div>
           
             </div>
    );
}

export default  CustomerAmount;