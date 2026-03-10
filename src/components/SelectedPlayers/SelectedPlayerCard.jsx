import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const SelectedPlayerCard = ({ player, handleDeletePlayer, balance, setBalance }) => {
    const { id, name, image, battingStyle, bowlingStyle } = player;
    const handleDelete = id => {
        toast.success(`${player.name} has been removed!!!`)
        handleDeletePlayer(id);
        setBalance(balance + player.price);
    }
    return (
        <div className='bg-white border-[#131313]/10 rounded-xl p-6 w-full shadow-sm'>
            <div className='flex flex-col md:flex-row md:justify-between md:text-left items-center justify-center text-center gap-5'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <img src={image} alt={name} className='w-22 h-22 rounded-xl ml-5 md:0' />
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#131313] font-semibold text-2xl'>{name}</h1>
                        <span className='text-[#131313]/60'>{battingStyle}</span>
                        <span className='text-[#131313]/60'>{bowlingStyle}</span>
                    </div>
                </div>
                <RiDeleteBin6Line onClick={() => handleDelete(id)} className='btn bg-white border-0 text-[#F14749]' />
            </div>
        </div>
    );
};

export default SelectedPlayerCard;