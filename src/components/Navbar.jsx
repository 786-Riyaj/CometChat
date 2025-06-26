import React from "react";


// Navbar Section-1
const Navbar = () => {
    return (
        <nav className=" px-4 py-2 flex justify-between items-center">

            <div className="text-xl font-bold text-white ">Cometchat</div>

            <div className=" text-white flex justify-between items-center">
                <div className="menu">Platform</div>
                <div className="menu">Solutions</div>
                <div className="menu">Developers</div>
                <div className="menu">Resources</div>
                <div className="menu">Pricing</div>
            </div>
            |<div className=" text-white flex">
                <div className="menu">Log in</div>
                <button className="h-10 bg-linear-to-r from-cyan-500 to-blue-500   text-black m-4 p-2 rounded-lg text-center">
                    Become a Partner
                </button></div>
        </nav>
    );
};

export default Navbar;

