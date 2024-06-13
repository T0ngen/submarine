import React, {useEffect} from 'react';
import './App.css';
import Submarine from './components/submarine';



function App() {
  
  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;

      tg.expand();
      tg.isClosingConfirmationEnabled = true;

      const expandInterval = setInterval(() => {
        if (!tg.isExpanded) {
          tg.expand();
        }
      }, 1000);

      return () => clearInterval(expandInterval);
    }else{
      console.log("Telegram not found");
    }
  }, []);
  
  return (
    <div className="App">
      <Submarine />
    </div>
  );
}

export default App;

