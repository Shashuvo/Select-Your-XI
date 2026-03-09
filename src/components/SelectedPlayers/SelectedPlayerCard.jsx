import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SelectedPlayerCard = ({ player }) => {
    const { name, image, battingStyle, bowlingStyle } = player;
    return (
        <div className='bg-white border-[#131313]/10 rounded-xl p-6 w-full shadow-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img src={image} alt={name} className='w-22 h-22 rounded-xl' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#131313] font-semibold text-2xl'>{name}</h1>
                        <span className='text-[#131313]/60'>{battingStyle}</span>
                        <span className='text-[#131313]/60'>{bowlingStyle}</span>
                    </div>
                </div>
                <RiDeleteBin6Line className='h-16 w-6 text-[#F14749]' />
            </div>
        </div>
    );
};

export default SelectedPlayerCard;