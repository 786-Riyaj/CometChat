import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const footerLinks = {

    Platform: ["Features", "Chat & Messaging", "Voice & Video Calls", "Security & Compliance", "Extensions", "Features at a glance", "Webhooks & Bots", "Moderation", "Analytics & Insights", "Implementation", "Widgets", "UI Kits", "SDKs & APIs", "Technologies", "React Chat SDK & API", "Angular Chat SDK & API", "Vue Chat SDK & API", "IOS Swift Chat SDK & API", "Android Kotlin Chat SDK & API", "Android Java Chat SDK & API", "React Native Chat SDK & API", "Ionic/Capacitor Chat SDK & API", "WordPress Chat SDK & API", "Lavarel/PHP Chat SDK & API", "Flutter Chat SDK & API", "Next.js Chat SDK & API"],

    Solutions: ["By Use cases", "Social Community", "Marketplace", "Healthcare", "Education", "Virtual Events", "On-Demand Service", "Dating Apps", "Gaming", "By Organization Type", "Enterprise", "Startups"],

    Developers: ["Technologies documentation", "React", "Angular", "Vue", "IOS Swift", "Android Kotlin", "Android Java", "React Native", "Ionic/Capacitor", "WordPress", "Lavarel/PHP", "Flutter", "Next.js", "Documentation", "Product updates", "Tutorials", "Open-source Apps", "Product status", "Glossary"],

    Resourses: ["Customer stories", "Blog", "Give feedback", "Community forum", "Help center", "Partners", "Competitors", "SendBird", "GetStream", "Applozic", "Twilio", "PubNub", "Company", "About us", "Careers", "Partners", "Pricing", "Chat with us"],
};

const Footer = () => {
    return (
        <footer className="bg-[#14131D] text-white py-12 px-4 md:px-20">
            <h1 className="text-4xl font-normal leading-tight mb-10">cometchat</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([section, links], idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold mb-4">{section}</h4>
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

            {/* Bottom Section */}
            <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">

                {/* Left Side */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <p>2023 © CometChat</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

                {/* Right Side - Social Links */}
                <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white">
                    <p className="flex items-center gap-2"><FaFacebook /> Facebook</p>
                    <p className="flex items-center gap-2"><FaLinkedin /> LinkedIn</p>
                    <p className="flex items-center gap-2"><FaInstagram /> Instagram</p>
                    <p className="flex items-center gap-2"><FaTwitter /> Twitter</p>
                    <p className="flex items-center gap-2"><FaGithub /> GitHub</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


