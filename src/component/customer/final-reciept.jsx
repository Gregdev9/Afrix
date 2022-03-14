import React from "react";
// import {Link} from "react-router-dom"
// import "../../bootstrap.css";
import "./customer.css"
import Pdf from "react-to-pdf";

function FinalReciept() {
  // const [show, setshow] = useState(false)
  const ref = React.createRef();

   return ( 
       <div className="flex ">
             {/* <div className="form-field" method="" action="">
                 <h2>Afriex Express</h2>
                 <span className="title">You are paying {`Okoli's shop`}</span>
               <div className="py-5">
                 <span className="view-success">&#x2713;</span><br></br>
                 <span className="bold-text">downloaded</span>

                
               
                 </div>
             </div> */}

             <div>
             
          <div style={{
            width:'100%',
            height:'100'
        
        }} ref={ref}>
          <h2>Afriex Express</h2>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                 </Pdf>
             
             </div>
           
            
           
             </div>
    );
}

export default  FinalReciept;