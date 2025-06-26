import React from 'react';

const HeroForm = () => {
    return (
        <section className="text-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Text Section */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Join the CometChat <br />partner universe
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                    Create value for your clients, leveraging our <br />world-class technology.
                    Partner with us and <br />grow your business!
                </p>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 bg-[#1E1B2E] p-6 sm:p-10 rounded-xl opacity-90">
                <h2 className="text-xl font-semibold mb-4">Become a partner</h2>
                <form className="space-y-4 text-sm">
                    <div>
                        <label>Full name</label>
                        <input type="text" placeholder="Type your name here..." className="w-full p-3 mt-1 rounded-xl bg-[#2B283C] text-white" />
                    </div>
                    <div>
                        <label>Email address</label>
                        <input type="email" placeholder="Type your email..." className="w-full p-3 mt-1 rounded-xl bg-[#2B283C] text-white" />
                    </div>
                    <div>
                        <label>Company name</label>
                        <input type="text" placeholder="Type your company’s name" className="w-full p-3 mt-1 rounded-xl bg-[#2B283C] text-white" />
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition hover:opacity-90"
                    >
                        Submit application
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroForm;

