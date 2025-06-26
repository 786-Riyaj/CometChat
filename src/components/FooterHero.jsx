import React from 'react';

const FooterHero = () => {
    return (
        <section className=" text-white py-16 px-4 sm:px-8 md:px-20 text-center hero">
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-20">
                    Get started for free
                </h1>
                <p className="text-gray-400 text-sm sm:text-base">
                    Build and test for as long as you need.<br className="hidden sm:block" />
                    Pick a plan when you’re ready.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                    <button
                        type="button"
                        className="h-10 px-5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        Start free trial
                    </button>
                    <button
                        type="button"
                        className="h-10 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition"
                    >
                        Schedule a demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FooterHero;
