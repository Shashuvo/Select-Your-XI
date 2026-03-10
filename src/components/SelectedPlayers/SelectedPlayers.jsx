import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayers, handleDeletePlayer, balance, setBalance }) => {
    return (
        <div className='w-11/12 mx-auto mb-20 flex flex-col gap-6'>
            {
                selectedPlayers.length === 0 ? <p className='text-[#131313]/60 font-medium text-center text-lg'>No players selected yet.</p> :
                    selectedPlayers.map(player => <SelectedPlayerCard key={player.id} balance={balance} setBalance={setBalance} player={player} handleDeletePlayer={handleDeletePlayer}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;