 import React from "react";
 import {Link} from "react-router-dom"
 import "../../bootstrap.css"

function Home() {
    return ( 
        <div className="flex body-flex">
            <div className="content-container text-center">
                <h1>Welcome to Afriexpress Pay</h1>
                <Link to="/become-marchant"> <button className="click-button">Become a marchant</button></Link>
                </div>
                <Link to='/connect-marchant'><button className="click-button button-below">Connect to your Afrex</button></Link>
        </div>
     );
}

export default Home;