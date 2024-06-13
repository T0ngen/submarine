import React, {useEffect} from 'react';
import './App.css';
import Submarine from './components/submarine';



function App() {
  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;

      tg.expand();
      tg.isClosingConfirmationEnabled = true;

      
    }
  }, []);
  return (
    <div className="App">
      <Submarine />
    </div>
  );
}

export default App;

