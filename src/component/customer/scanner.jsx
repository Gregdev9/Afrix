import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../../bootstrap.css"
import Scanner from "react-webcam-qr-scanner";
import QrReader from "react-qr-scanner"

function ScannerCustomer() {
    const handledecode=(result)=>{
        console.log(result)
    }
    const handleScannerLoad=(mode)=>{
         console.log(mode)
    }
    const Error=(err)=>{
        console.log(err)
    }
    const Scan=(result)=>{
        console.log(result)
    }
    const styles={
        width:"80%",marginLeft:"10%",height:"300px",backgroundColor:"gray"
    }
   return ( 
       <div className="flex">
            <div className="flex py-3 px-2" style={{width:"100%"}}>
                <div className="col-6">
                   
                </div>
                <div className="col-6 text-right">
                <span className="fa fa-user side-icon side-icon-outline"></span>
                </div>
            </div>

     
            <div className="flex col-12 justify-center py-5"> {/* start of middle container */}
                <div className="middle-col">    {/* start of middle sub-container */}  
                      {/* <Scanner
                      onDecode={handledecode}
                      onScannerLoad={handleScannerLoad}
                      constraints={{
                          audio:false,
                          video:{
                              facingMode:"enviroment"
                          }
                      }}
                      captureSize={{width:1280,height:720}}
                      /> */}
    
                   <QrReader
                     delay={50}
                     onError={Error}
                     onScan={Scan}
                     style={styles}
                   />
                     
                </div>       {/* end of middle sub-container */}
            </div>   {/* end of middle container */} 

           <Link to='/'><span className="bottom-afrex">Afriex <i className="fa fa-chevron-right"></i></span></Link>   
        </div>
    );
}

export default ScannerCustomer;