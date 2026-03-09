import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers)
    return (
        <div className='w-11/12 mx-auto mb-20 flex flex-col gap-6'>
            {
                selectedPlayers.map(player => <SelectedPlayerCard key={player.id} player={player}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;