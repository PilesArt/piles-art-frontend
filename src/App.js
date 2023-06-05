import { useState } from 'react';
import './App.css';
import MainMint from './MainMint.js';
import NavBar from './NavBar';
import BG from './assets/background/oBG.mp4'

function App() {
  const [accounts, setAccounts] = useState([])

  return (
  <div className="overlay">
  <div className="App">
    <NavBar accounts={accounts} setAccounts={setAccounts} />
    <MainMint accounts={accounts} setAccounts={setAccounts} />
  </div>
    {/* <div className="moving-background"></div> */}
    <video className='videoTag' autoPlay loop muted>
      <source src={BG} type='video/mp4' />
    </video>
  </div>
  );
}

export default App;
