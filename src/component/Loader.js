import React from 'react'
import {BounceLoader} from 'react-spinners'
import './customer/customer.css'



function Loader({isLoading}) {
  return (
    <>
        {
            isLoading && (
                <div className='loader'>
                  <BounceLoader  size={110} color='#2E49E0' />


                </div>
                   
            
            )
        }
       
    </>
  )
}

export default Loader