import React from 'react';
import shadowBG from "../../assets/bg-shadow.png"
import BannerIMG from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='relative w-11/12 mx-auto bg-[#131313] rounded-xl'>
            <img src={shadowBG} alt="shadow BG" className='absolute top-0 w-full h-full z-0 rounded-xl' />
            <div className='relative z-10 flex flex-col gap-5 items-center justify-center py-16 px-44'>
                <img src={BannerIMG} alt="Banner Image" />
                <h1 className='text-white font-bold text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-white opacity-70 font-medium text-xl'>Beyond Boundaries Beyond Limits</p>
                <div className='inline-block p-2 rounded-xl border-2 border-[#E7FE29]'>
                    <button className='btn bg-[#E7FE29] border-[#E7FE29] rounded-lg shadow-[0_0_12px_rgba(217,255,63,0.8)] hover:scale-105 hover:shadow-[0_0_20px_rgba(217,255,63,1)] transition'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;