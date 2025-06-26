import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "This is a frequently asked question?",
        answer: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
        question: "This is a frequently asked question?",

    },
    {
        question: "This is a very long frequently asked question about our services with more than one line?",

    },
    {
        question: "This is a frequently asked question?",

    },
    {
        question: "This is a question?",

    },
    {
        question: "This is a question?",

    },
];

const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="py-12 px-4 sm:px-6 md:px-20 bg-gray-50 text-black">
            <h1 className="text-center text-[#FF7129] text-xl font-bold mb-2">FAQ’s</h1>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">
                We want to help you<br className="hidden sm:block" /> with all your doubts
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm transition-all">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="font-medium text-sm sm:text-base">{faq.question}</span>
                            <span className="text-lg sm:text-xl">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </button>

                        {openIndex === index && faq.answer && (
                            <p className="mt-3 text-gray-600 text-sm sm:text-base transition-all duration-300">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;