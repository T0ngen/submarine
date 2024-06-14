import React, { useEffect, useState } from 'react';
import './App.css';
import Submarine from './components/submarine';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }

    // Функция, которая будет вызвана, когда страница полностью загрузится
    const handleWindowLoad = () => {
      setLoading(false);
    };

    // // Слушаем событие загрузки страницы
    window.addEventListener('load', handleWindowLoad);

    // // Очистка слушателя при размонтировании компонента
    // return () => {
    //   window.removeEventListener('load', handleWindowLoad);
    // };
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> :<Submarine /> }
      
    </div>
  );
}

export default App;