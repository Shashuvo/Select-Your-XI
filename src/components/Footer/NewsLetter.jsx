import React from 'react';
import bg from "../../assets/bg-shadow.png"

const NewsLetter = () => {
    return (
        <div className="absolute -top-58 md:-top-42 left-1/2 -translate-x-1/2 w-10/12 md:w-8/12 inline-block p-4 rounded-3xl border-2 border-white">
            <div className="relative bg-white rounded-2xl shadow-xl py-20 text-center">

                <img
                    src={bg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />

                <div className="relative z-10">
                    <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#131313]">
                        Subscribe to our Newsletter
                    </h2>

                    <p className="text-[#131313]/70 text-md md:text-xl font-medium mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-3 w-11/12 mx-auto md:w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered md:w-72"
                        />

                        <button className="bg-linear-to-r from-[#F2D388] to-[#E98EAD] md:px-6 py-2 rounded-lg font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;