import React from "react";
import Typed from "react-typed";

const Headers = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development and website promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={["for wedding", "for oyr anniversary", "For your matric ball", "Any event"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="btn-main-offer">book now</a>

            </div>

        </div>
    )
}

export default Headers
