import React, { useState} from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css";
import "./customer.css"
import Pdf from "react-to-pdf";

function FinalReciept() {
  const [show, setshow] = useState(false)
  const ref = React.createRef();

   return ( 
       <div className="flex body-flex">
             <form className="form-field" method="" action="">
                 <h2>Afriex Express</h2>
                 <span className="title">You are paying {`Okoli's shop`}</span>
               <div className="py-5">
                 <span className="view-success">&#x2713;</span><br></br>
                 <span className="bold-text">downloaded</span>
               
                 </div>
             </form>

             <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
          <div ref={ref}>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
          </div>
           
            
           
             </div>
    );
}

export default  FinalReciept;