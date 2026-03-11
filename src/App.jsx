import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
}

const fetchPlayersData = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleChoosePlayer = (player) => {
    const newPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newPlayer);
  }

  const handleDeletePlayer = (id) => {
    const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
    setSelectedPlayers(remainingPlayers);
  }

  const isPlayerSelected = (playerId) => {
    return selectedPlayers.some(player => player.id === playerId);
  }


  return (
    <>
      <Navbar balance={balance}></Navbar>
      <Banner setBalance={setBalance}></Banner>
      <div className='flex flex-col-reverse md:flex-row gap-5 items-center md:gap-0 md:justify-between w-11/12 mx-auto mt-20 mb-8'>
        <h1 className='font-bold text-3xl mt-8'>{toggle ? "Available Players" : "Selected Players"}</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`py-2 px-7 border border-r-0 border-[#131313]/10 font-bold ${toggle ? "bg-[#E7FE29] text-[#131313]" : "bg-white text-[#131313]/60"}  rounded-l-2xl`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-2 px-7 border border-l-0 border-[#131313]/10 font-bold ${toggle ? "bg-white text-[#131313]/60" : "bg-[#E7FE29] text-[#131313]"} rounded-r-2xl`}>Selected (<span>{selectedPlayers.length}</span>)</button>
        </div>
      </div>
      {
        toggle ? <Suspense fallback={<p>data loading...</p>}>
          <AvailablePlayers balance={balance} setBalance={setBalance} handleChoosePlayer={handleChoosePlayer} fetchPlayersData={fetchPlayersData} isPlayerSelected={isPlayerSelected}></AvailablePlayers>
        </Suspense> :
          <Suspense fallback={<p>data loading...</p>}>
            <SelectedPlayers balance={balance} setBalance={setBalance} selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer}></SelectedPlayers>
          </Suspense>
      }
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App;
