import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ fetchPlayersData }) => {
    const playersData = use(fetchPlayersData)
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    playersData.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;