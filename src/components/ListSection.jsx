import React from 'react';
import { MdCopyAll, MdAssessment } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { FaBook, FaHandHoldingWater } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";

const benefits = [
    {
        icon: <MdCopyAll />,
        title: "Free credits",
        desc: "Empowering partners to scale and innovate with ease.",
    },
    {
        icon: <GiPieChart />,
        title: "Revenue share",
        desc: "Get monthly recurring revenues when you refer clients.",
    },
    {
        icon: <BiChalkboard />,
        title: "Training and mentoring sessions",
        desc: "Enabling partners to deliver the best experience to customers.",
    },
    {
        icon: <HiMiniCodeBracketSquare />,
        title: "Special developer access",
        desc: "Build unlimited PoCs for your clients using our dev tools.",
    },
    {
        icon: <IoMdTime />,
        title: "Reduced time",
        desc: "Deliver your products much faster with our partner programs.",
    },
    {
        icon: <MdAssessment />,
        title: "Value addition to your users",
        desc: "Offer enhanced features that your users will love and trust.",
    },
    {
        icon: <FaBook />,
        title: "Knowledge sessions",
        desc: "Get access to exclusive product and market training.",
    },
    {
        icon: <BsQuestionCircleFill />,
        title: "On-demand support",
        desc: "Get technical assistance anytime you need it.",
    },
    {
        icon: <FaHandHoldingWater />,
        title: "Significant passive income",
        desc: "Earn recurring revenue and grow your financial stream.",
    },
];

const ListSection = () => {
    return (
        <section className="text-white py-16 px-4 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1E1B2E] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-orange-400 text-xl mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ListSection;