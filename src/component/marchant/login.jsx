import React, {useState} from "react";
import "../../bootstrap.css"

import axios from "axios"
import { useNavigate, Link } from "react-router";


import Loader from "../Loader"
import CAlert from "../CAlert"

import Swal from 'sweetalert2'





function LoginMarchant() {
    const [loading, setloading] = useState(false)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        setloading(true)
        let modal = {
            email:email,
            password:password

        }
        event.preventDefault();

        axios.post(`http://localhost:5000/api/v1/customer/merchant-login`, modal, ).then((response)=>{
            if(response.status === 200){
                setloading(true)
                let data = response.data
                navigate('/dashboard', {state:{ data }})
            }
           
        }).catch((e) => {
            if(e.response.status === 403){
              let data = e.response.data.merchantDetail
                Swal.fire({
                    icon: 'error',
                    showCancelButton: true,
                    cancelButtonText:'No',
                    confirmButtonText:'Yes',
                    confirmButtonColor:'#2E49E0',
                    title: 'Not a merchant',
                    text: 'Would you like to create a shop',
                    
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        navigate('/Create-shop', {state:{ data }} )
                    console.log('nice')
                    } else if (result.isDenied) {
                    //   Swal.fire('Changes are not saved', '', 'info')
                    console.log('nice bad')
                    }
                  })
            }else{
                Swal.fire({
                    icon: 'error',
                    showCancelButton: true,
                    confirmButtonColor:'#2E49E0',
                    title: 'Invalid login attempt ',
                   
                    
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                    //   Swal.fire('Saved!', '', 'success')
                    console.log('nice')
                    } else if (result.isDenied) {
                    //   Swal.fire('Changes are not saved', '', 'info')
                    console.log('nice bad')
                    }
                  })
            }
           
          
        })
        .finally(()=> setloading(false))
    }
    const handleInput = (event) => {

    }

    return ( 
        <div className=" body-flex">
            <Loader isLoading={loading}  />
            
             <form onSubmit={handleSubmit} className="form-field" >
                 <h2 id="my-template">Afriexpress Pay</h2>
                 <div className="input-container"><input type="text" required name="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder="Email"/></div>
                 <div className="input-container"><input type="text" required name="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="Password"/></div>
                <button className="click-button" style={{width:"200px"}}>Submit</button>
             </form>
             <a href='/marchant-signup'><span className="bottom-afrex">sign up <i className="fa fa-chevron-right"></i></span></a> 
        </div>
     );
}

export default LoginMarchant;