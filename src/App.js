import React, {useEffect} from 'react';
import './App.css';
import Submarine from './components/submarine';
const tg = window.Telegram.WebApp;


function App() {
  
  useEffect(() => {
    

    tg.expand();
    tg.isClosingConfirmationEnabled = true;

  }, []);
  
  return (
    <div className="App">
      <Submarine />
    </div>
  );
}

export default App;

