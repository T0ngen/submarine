// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Submarine from './components/submarine.js';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }

    const handleWindowLoad = () => {
      // Установим таймер на 0.5 секунд, прежде чем скрыть спиннер
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    // Слушаем событие загрузки окна
    window.addEventListener('load', handleWindowLoad);

    // Убираем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> : <Submarine />}
    </div>
  );
}

export default App;