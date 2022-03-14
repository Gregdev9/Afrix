import React from 'react'
import './customer/customer.css'

function CAlert({showAlert}) {
  return (
    <>
      {
        showAlert && (
          <div className='alert-modal'>
        <div className="alert-card">
            
        </div>

          </div>
        )
      }
    </>
  )
}

export default CAlert