import React from 'react';

// Footer Hero Section-8
const FooterHero = () => {
    return (

        <section className=" text-white  py-16 px-4 md:px-20 text-center  items-center  hero">
            <div className="space-y-6  mt-20 ">
                <h1 className="text-4xl font-bold leading-tight mb-1">
                    Get started for free
                </h1>
                <p className="text-gray-400 mb-2 ">
                    Build and test for as long as you need.<br />Pick a plan when you’re ready.
                </p>
                <button type="submit" className="h-10  text-white p-2  m-4 rounded-xl  bg-gray-500/30 ">
                    Start free trial
                </button>
                <button type="submit" className="h-10 bg-linear-to-r from-cyan-500 to-blue-500  text-white p-2  rounded-xl ">
                    Schedule a demo
                </button>

            </div>
        </section>


    );
};

export default FooterHero;