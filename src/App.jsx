import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
}

function App() {

  const fetchPlayersData = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>data loading...</p>}>
        <AvailablePlayers fetchPlayersData={fetchPlayersData}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
