import React from 'react';

// HeroForm-2
const HeroForm = () => {
    return (
        <section className=" text-white  py-16 px-4md:px-20 flex flex-col md:flex-row items-center justify-between">
            <div className="w-1/2 space-y-6   ">
                <h1 className="text-4xl font-bold leading-tight mx-24 px-15 md:mt-0">
                    Join the CometChat partner universe
                </h1>
                <p className="text-gray-400 mx-20 px-20 md:mt-0">
                    Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
                </p>
            </div>

            <div className="w-1/2 bg-[#1E1B2E] p-10 rounded-xl  opacity-80 mt-10 md:mt-0 mr-35">
                <h2 className="text-xl font-semibold mb-4 ">Became a partner</h2>
                <form className="space-y-4">
                    Full name
                    <input type="text" placeholder=" Type your name here..." className="w-full p-3 rounded-xl bg-[#2B283C] text-white" />
                    Email address
                    <input type="email" placeholder=" Type your emailsomething..." className="w-full p-3 rounded-xl bg-[#2B283C] text-white" />
                    Companies name
                    <input type="text" placeholder="Type you company’s name" className="w-full p-3 rounded-xl bg-[#2B283C] text-white" />
                    <button type="submit" className="h-10 bg-linear-to-r from-cyan-500 to-blue-500  text-white p-2  rounded-xl ">
                        Submit application
                    </button>
                </form>
            </div>
        </section>

    );
};

export default HeroForm;

