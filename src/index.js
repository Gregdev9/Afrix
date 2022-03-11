import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApiRouter, BrowserRouter as Router,Routes, Switch ,Route, BrowserRouter, useParams} from "react-router-dom";
import Home from "./component/marchant/home" ;
import BecomeMarchant from "./component/marchant/becomeMarchant";
import BecomeMarchant1 from "./component/marchant/becomeMarchant1";
import BecomeMarchant2 from "./component/marchant/becomeMarchant2";
import ConnectMarchant from "./component/marchant/connect-marchant";
import OTP_connect from "./component/marchant/OTPconnect" 
import Success from "./component/marchant/success";
import  Dashboard from "./component/marchant/dashboard"  ;
import ScannerPage from "./component/marchant/scanner" ;
import ConnectCustomer from "./component/customer/connect-customer" 
import OTP_Customer from "./component/customer/OTPconnect";
import Reciept from "./component/customer/reciept-success";
import Overview from "./component/customer/overview";
import FinalReciept from "./component/customer/final-reciept"
import ScannerCustomer from "./component/customer/scanner"
import Qrcode from './component/marchant/qr-code';
import CustomerAmount from './component/customer/customer-amount';
import CustomerSignupForm from './component/customer/mono';
import Password from './component/customer/password'
import LoginMarchant from './component/marchant/login';
   

   
ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
        <Routes>
    
          <Route path="/customer/:user"  element={<ConnectCustomer/>}></Route>
          <Route path="/mono"  element={<CustomerSignupForm/>}></Route>
          <Route path="/otp" element={<OTP_Customer/>}></Route>
          <Route path="/password" element={<Password/>}></Route>

          <Route path="/customer/amount" element={<CustomerAmount/>}></Route>
          <Route path="/customer/reciept" element={<Reciept/>}></Route>
          <Route path="/customer/overview-reciept"  element={<Overview/>}></Route>
          <Route path="/customer/final-reciept" element={<FinalReciept/>}></Route>

          <Route path="/" element={<LoginMarchant/>}></Route>
          <Route path="/customer-signup" element={<BecomeMarchant/>}></Route>
          <Route path="/marchant-signup" element={<BecomeMarchant1/>}></Route>
          <Route path="/connect-marchant" element={<ConnectMarchant/>}></Route>
          <Route path="/marchant-qrcode" element={<Qrcode/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>

          </Routes>
     </BrowserRouter >
  </React.StrictMode>
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
