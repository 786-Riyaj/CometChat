import React from 'react';
import { HiCheckBadge } from "react-icons/hi2";
import { PiSunHorizonFill } from "react-icons/pi";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";


const benefits = [
    {
        icon: <HiCheckBadge />,
        title: "Affiliate partner program",
        desc: "Bring value to your customers with a world-class in-app messaging tool that boosts engagement and retention. Get rewarded for referring CometChat.",
    },
    {
        icon: <HiMiniCodeBracketSquare />,
        title: "Technology partner program",
        desc: "Use our plug-and-play SDKs & APIs to create high-quality chat solutions for your clients. Simple, secure, and scalable.",
    },
    {
        icon: <PiSunHorizonFill />,
        title: "Startup growth program",
        desc: "Support for incubators, accelerators, and VCs to help startups grow with our messaging tools and partner ecosystem.",
    },
];

const Program = () => {
    return (
        <section className="py-16 px-4 md:px-20 bg-white text-black">
            {/* Header */}
            <p className="mb-2 text-[#6852D6] text-lg sm:text-xl font-medium">
                Our programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-10">
                Types of partnership <br className="hidden sm:block" /> programs
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                    <div key={index} className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Program;