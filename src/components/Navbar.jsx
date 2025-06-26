import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" px-4 py-4 text-white shadow-sm ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Cometchat</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <div className="cursor-pointer hover:text-cyan-400">Platform</div>
                    <div className="cursor-pointer hover:text-cyan-400">Solutions</div>
                    <div className="cursor-pointer hover:text-cyan-400">Developers</div>
                    <div className="cursor-pointer hover:text-cyan-400">Resources</div>
                    <div className="cursor-pointer hover:text-cyan-400">Pricing</div>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="cursor-pointer hover:text-cyan-400">Log in</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
                        Become a Partner
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 px-4 text-sm">
                    <div className="hover:text-cyan-400">Platform</div>
                    <div className="hover:text-cyan-400">Solutions</div>
                    <div className="hover:text-cyan-400">Developers</div>
                    <div className="hover:text-cyan-400">Resources</div>
                    <div className="hover:text-cyan-400">Pricing</div>
                    <div className="hover:text-cyan-400">Log in</div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg">
                        Become a Partner
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
