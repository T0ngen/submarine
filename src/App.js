// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Submarine from './components/submarine';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  const showSpinner = (delay) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, delay);
  };

  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }

    const handleWindowLoad = () => {
      showSpinner(1000); // Показываем спиннер с задержкой 0.5 секунд
    };

    // Слушаем событие загрузки окна
    window.addEventListener('load', handleWindowLoad);

    // Слушаем событие перед перезагрузкой окна
    window.addEventListener('beforeunload', () => {
      showSpinner(1000); // Показываем спиннер с задержкой 0.5 секунд
    });

    // Очищаем слушатели событий при размонтировании компонента
    return () => {
      window.removeEventListener('load', handleWindowLoad);
      window.removeEventListener('beforeunload', handleWindowLoad);
    };
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> : <Submarine />}
    </div>
  );
}

export default App;