import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const PlayerCard = ({ player, handleChoosePlayer, isPlayerSelected }) => {
    const { name, image, country, role, rating, battingStyle, bowlingStyle, price, id } = player;
    const isSelected = isPlayerSelected(id);
    return (
        <div className="bg-white border-[#131313]/10 rounded-xl p-6 w-full shadow-sm flex flex-col gap-2">

            {/* Player Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-lg"
            />

            {/* Player Name */}
            <div className="flex items-center gap-2 mt-4 font-semibold text-lg">
                <FaUser className="text-[#131313] opacity-80 text-xl font-semibold" />
                {name}
            </div>

            {/* Country + Role */}
            <div className="flex items-center justify-between mt-2 text-[#131313]/50 text-sm">
                <div className="flex items-center gap-2">
                    <FaFlag />
                    {country}
                </div>

                <span className="bg-gray-100 px-3 py-1 rounded-sm text-sm text-[#131313]">
                    {role}
                </span>
            </div>

            <hr className="my-3 opacity-30" />

            {/* Rating */}
            <div className="flex justify-between font-medium">
                <span className='font-bold'>Rating</span>
                <span>{rating}</span>
            </div>

            {/* Batting Style */}
            <div className="flex justify-between text-sm text-[#131313]/70 mt-2">
                <span className='font-bold'>{battingStyle}</span>
                <span className='font-bold'>{bowlingStyle}</span>
            </div>

            {/* Price + Button */}
            <div className="flex justify-between items-center mt-4">
                <span className="font-bold">
                    Price: ${price}
                </span>

                <button
                    disabled={isSelected}
                    onClick={() => { handleChoosePlayer(player); }}
                    className={`border px-3 py-1 rounded-md text-sm ${isSelected ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>

        </div>
    );
};

export default PlayerCard;