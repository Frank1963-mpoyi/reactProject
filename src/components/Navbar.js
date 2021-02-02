import React from "react";
import mylogo from "../mpoyi.jpg";

// REACT FONTAWESOME 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
            
        
        <a className="navbar-brand text-white" href="#"><img src={mylogo} alt="" className="logo mr-2 " />RUTH CATERING</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
    </button> 

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item ">
                <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        
    </div>
    </div>
    </nav>
            
    )
}

export default Navbar
