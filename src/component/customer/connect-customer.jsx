import React, {useState, useEffect} from "react";
import {Link, Navigate, useParams,  useNavigate} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"
import axios from "axios"

const MonoConnect = require('@mono.co/connect.js');



function ConnectCustomer({match}) {
    const id = useParams().user

    const marchentDetail = async() =>{
       await axios.post('http://localhost:5000/api/v1/customer/getCustomer', {id}).then((response)=>{
            console.log(response)
            if(response.status === 200){
                setmarchentDetil(response.data)
            }
        }).catch((e)=> console.log(e))
    }
    useEffect(() => {
        marchentDetail()
    }, [])
    
    const navigate = useNavigate()
    const [marchentDetil, setmarchentDetil] = useState({
        shopName:'',
        marchentId:''
    })
    let [phone,setPhone]= useState('+2347036459875')
    let [email,setEmail]= useState('')


    const handleConnectedAccount = (code) => {
        axios.post('http://localhost:5000/api/v1/customer/getMonoAccountDetail', {monoCode: code}).then((response)=>{
            // return console.log(response)
            if(response.status){
                navigate('/customer-signup', {state: { data:response.data, marchent: marchentDetil}} )
            }
           
        })
    }

    const monoConnect = React.useMemo(() => {
        const monoInstance = new MonoConnect({
          onClose: () => console.log('Widget closed'),
          onLoad: () => console.log('Widget loaded successfully'),
          onSuccess: (code ) => handleConnectedAccount(code) ,
          key: window.location.hostname === 'localhost'
                    ? 'test_pk_6B0BYHOs3CVuGMTHPZ1q'
                    : 'test_pk_6B0BYHOs3CVuGMTHPZ1q',
        })
    
        monoInstance.setup()
        
        return monoInstance;
    }, [])



    const handleSubmit = (event) => {

        // console.log(phone)
        event.preventDefault();

        axios.post('http://localhost:5000/api/v1/afriex/checkphone',{phoneNumber:phone}).then((res)=>{
           
          setEmail(res.data.email);        
           if(res.data.email){
            //    console.log(res)
                navigate('/password', {state:{customer: res.data, machent: marchentDetil}} )
           }else{
            monoConnect.open()
           }
        }).catch((err) => {
            console.log(err);
        })

    }

  


   return ( 
       <div className="flex body-flex">
             <form className="form-field" onSubmit={handleSubmit}>
                 <h2>Afriex Express</h2>
                 <span className="title">You are paying to {marchentDetil.shopName} shop</span>
                 <div className="input-container"><input type="text"  required name="phone" placeholder="+2347036459875" value={phone} onChange={(e)=> setPhone(e.target.value)} /></div>
                 <button className="click-button" style={{width:"200px"}}>Next</button>
                 {/* <button className="click-button" style={{width:"200px"}}>Pay with Afriex</button> */}
             </form>
           
             </div>
    );
}

export default  ConnectCustomer;