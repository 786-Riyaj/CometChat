import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// Footer Section-9
const footerLinks = {
    Platform: ["Features",
        "Chat & Messaging",
        "Voice & Video Calls",
        "Security & Compliance ",
        "Extensions",
        "Features at a glance ",
        "Webhooks & Bots",
        "Moderation",
        "Analytics & Insights",
        "Implementation",
        "Widgets",
        "UI Kits",
        "SDKs & APIs",
        "Technologies",
        "React Chat SDK & API",
        "Angular Chat SDK & API",
        "Vue Chat SDK & API",
        "IOS Swift Chat SDK & API",
        "Android Kotlin Chat SDK & API",
        "Android Java Chat SDK & API",
        "React Native Chat SDK & API",
        "Ionic/Capacitor Chat SDK & API",
        "WordPress Chat SDK & API ",
        "Lavarel/PHP Chat SDK & API",
        "Flutter Chat SDK & API",
        "Next.js Chat SDK & API"],


    Solutions: ["By Use cases",
        "Social Community",
        "Marketplace",
        "Healthcare",
        "Education",
        "Virtual Events ",
        "On-Demand Service",
        "Dating Apps",
        "Gaming",
        "By Organization Type",
        "Enterprise",
        "Startups"],


    Developers: ["Technologies documentation",
        "React",
        "Angular",
        "Vue",
        "IOS Swift",
        "Android Kotlin",
        "Android Java",
        "React Native",
        "Ionic/Capacitor",
        "WordPress",
        "Lavarel/PHP",
        "Flutter",
        "Next.js",
        "Documentation",
        "Documentation",
        "Product updates",
        "Tutorials",
        "Open-source Apps",
        "Product status",
        "Glossary"],


    Resourses: ["Customer stories",
        "Blog",
        "Give feedback",
        "Community forum",
        "Help center",
        "Partners",
        "Competitors",
        "SendBird",
        "GetStream",
        "Applozic",
        "Twilio",
        "PubNub",
        "Company",
        "About us",
        "Careers",
        "Partners",
        "Pricing",
        "Chat with us"],
};

const Footer = () => {
    return (
        <footer className="bg-[#14131D] text-white py-8 px-4 md:px-20 footer">

            <h1 className='text-4xl font-400 leading-tight mb-6'>cometchat</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([section, links], idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold mb-4 ">{section}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {links.map((link, i) => (
                                <li key={i} className="hover:text-white cursor-pointer transition">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>







            <div className="mt-12 border-t border-gray-700  p-6 text-sm text-gray-500 text-center flex ">
                <div className='w-1/2 flex justify-center gap-8 mr-90'>
                    <p>2023 © CometChat</p>
                    <p>Terms of Use </p>
                    <p>Privacy Policy </p>
                </div>

                <div className='w-1/2  flex
                justify-center gap-8 flex text-center'>

                    <p className='flex  gap-2'><FaFacebook className='mt-0.5' /> Facebook</p>
                    <p className='flex gap-2'> <FaLinkedin className='mt-0.5' /> LinkedIn </p>
                    <p className='flex gap-2'><FaInstagram className='mt-0.5' />Instagram </p>
                    <p className='flex gap-2'><FaTwitter className='mt-0.5' />Twitter </p>
                    <p className='flex gap-2'><FaGithub className='mt-0.5' />GitHub</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;