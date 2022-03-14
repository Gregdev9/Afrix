import React, {useState, useEffect} from "react";
import {Link, useNavigate, useLocation} from "react-router-dom"

import "../../bootstrap.css";
import "./customer.css"
import axios from "axios"
import { data } from "autoprefixer";

import Loader from "../Loader"

function CreateShop() {
    const [loading, setloading] = useState(false)
    const [shopName, setshopName] = useState()
    const location = useLocation().state.data;



    let navigate = useNavigate()

    useEffect(() => {
      console.log(location)
    }, [])
    
    


   return ( 
       <div className="flex body-flex">
            <Loader isLoading={loading}  />
             <form  className="form-field" >
                 <h2>Afriex Express</h2>
                 <span className="title">{location.Name}</span>
                 <br/>
                 <span className="title">Please enter shop name </span>
                 <div className="input-container"><input type="text" handleInput required  value={shopName} onChange={(e) => setshopName(e.target.value)} /></div>
                 <button className="click-button"  style={{width:"200px"}}>Proceed</button>
             </form>
           
             </div>
    );
}

export default  CreateShop;