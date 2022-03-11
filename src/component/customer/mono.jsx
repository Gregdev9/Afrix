import { any } from 'prop-types';
import React, { Component, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
const MonoConnect = require('@mono.co/connect.js');


const CustomerSignupForm = (props) => {
    const [phone, setPhone] = useState(undefined);
        
        
    const handleSubmitPhone = (event) => {
        
        //check if phone number exists on Afriex DB
            //if phone number exists on Afriex return that user's ID only
                //have user verify their phone number to proceed
                // display dialpad to type in amout to pay merchant (we should have merchant info from QR code and URL, optionally we also have the item name, ID and price)
            //if phone number does not exist on Afriex DB (find or create)
                //create user with phone number and return their ID
                // verify their phone number to proceed
                // have them connect their bank account
                // once bank is connected - allow them to type in the amount they want to send to merchant

        monoConnect.open()
        event.preventDefault();
    }

    const handleConnectedAccount = (code) => {
        console.log(code)
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

        
        return (
            <>
                <form onSubmit={handleSubmitPhone}>
                    <div className="col text-center">
                        <label htmlFor="phone">Enter your phone number</label>
                    </div>
                    
                    <PhoneInput
                    placeholder="000 000 0000"
                    value={phone}
                    onChange={() => setPhone(phone )}
                    defaultCountry="NG"
                    />
                    <div className="col text-center">
                        <input type="submit" className="btn btn-success" value="Continue"/>
                    </div>
                </form>
                
            </>
            
            
            
            )
     
}

export default CustomerSignupForm;