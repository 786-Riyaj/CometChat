import React, { useState } from 'react';
import { HiCheckBadge } from "react-icons/hi2";
import { PiSunHorizonFill } from "react-icons/pi";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

// Program section -6

const benefits = [
    {
        icon: <HiCheckBadge />,
        title: "Affiliate partner program",
        desc: "Bring value to your customers with a world - class in -app messaging tool that increases user - to - user engagement and retention.Get incentivized for referring CometChat to any of your customers.",
    },
    {
        icon: <HiMiniCodeBracketSquare />,
        title: "Technology partner program",
        desc: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs.It’s simple, safe and secure!",
    },
    {
        icon: <PiSunHorizonFill />,
        title: "Start up growth program",
        desc: "We help incubators, accelerators, co - working space that foster an ecosystem of start - ups.This program also enables VCs to accelerate the growth of their portfolio companies.",
    },
];
const Program = () => {
    return (
        <section className="py-10  md:px-25 tracking-wide px-4">
            <p className="mt-10 mb-2 text-[#6852D6] text-xl">
                Our programs
            </p>
            <h2 className="text-4xl font-weight:semibold text-black">
                Types of partnerships <br />programs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-25">
                {benefits.map((item, index) => (
                    <div key={index} className="p-6 ">
                        {/* same color icon  */}
                        <div className={`w-12 h-12 flex  item-center justify-center  rounded-full mb-1 bg-purple-200 text-purple-600 p-4 ${item.color}`}> {item.icon}</div>

                        <h3 className="text-base font-normal mb-2">{item.title}</h3>
                        <p className="text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Program;
