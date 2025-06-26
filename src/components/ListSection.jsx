import React from 'react';
import { MdCopyAll } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";
import { BiChalkboard } from "react-icons/bi";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { MdAssessment } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaHandHoldingWater } from "react-icons/fa";


// ListSection -5 

const benefits = [
    {
        icon: <MdCopyAll />,
        title: "Free credits",
        desc: "Empowering partners to scale.",
    },
    {
        icon: <GiPieChart />,
        title: "Revenue share",
        desc: "Get monthly recurring revenues when you refer clients.",
    },
    {
        icon: <BiChalkboard />,
        title: "Training and mentoring sessions",
        desc: "Enabling partners to deliver the best experience.",
    },


    {
        icon: <HiMiniCodeBracketSquare />,
        title: "Special developer access",
        desc: "Get an all - access account to build unlimited PoCs for your clients.",
    },
    {
        icon: <IoMdTime />,
        title: "Reduced time",
        desc: "Deliver your products much faster with our partners’ programs.",
    },
    {
        icon: <MdAssessment />,
        title: "Value addition to your users",
        desc: "We need a 2 line text here",
    },


    {
        icon: <FaBook />,
        title: "Knowledge sessions",
        desc: "Access to product and market sessions.",
    },
    {
        icon: <BsQuestionCircleFill />,
        title: "On-demand support",
        desc: "Technical assistance for implementation.",
    },
    {
        icon: <FaHandHoldingWater />,
        title: "Significant passive income",
        desc: "We need a 2 line text here ",
    },
];

const ListSection = () => {
    return (
        <section className=" text-white py-16 px-4 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((item, index) => (
                    <div key={index} className="p-6 rounded-xl shadow-lg hover:shadow-xl transition">

                        <div className={`w-12 h-12 flex  item-center justify-center  rounded-full mb-1 bg-red-100 text-orange-600 p-4 ${item.color}`}> {item.icon}</div>

                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default ListSection;