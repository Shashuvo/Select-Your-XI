import React, { use } from 'react';

const AvailablePlayers = ({fetchPlayersData}) => {
    const playersData = use(fetchPlayersData)
    console.log(playersData);
    return (
        <div>
            <h1>Available Players</h1>
        </div>
    );
};

export default AvailablePlayers;