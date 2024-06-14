import { useEffect, useState } from 'react';
import './LeaderBoard.css';
import logo from '../images/logo.png'; // Путь до логотипа по умолчанию
import medal from '../images/medal-bronze.png'; // Путь до медали

const LeaderBoard = () => {
  const [userName, setUserName] = useState('Guest');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');

  useEffect(() => {
    // Проверяем доступность Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const user = tg.initDataUnsafe.user;

      // Логируем данные для отладки
      console.log('Telegram WebApp user data:', user);

      // Проверяем, есть ли данные пользователя
      if (user) {
        // Устанавливаем имя пользователя
        setUserName(user.first_name || 'Guest');
        
        // Устанавливаем URL фото пользователя или логотип по умолчанию
        setUserPhotoUrl(user.photo_url || logo);
      } else {
        // Используем логотип по умолчанию, если данные пользователя не найдены
        setUserPhotoUrl(logo); 
      }
    } else {
      // Используем логотип по умолчанию, если Telegram WebApp недоступен
      setUserPhotoUrl(logo);
    }
  }, []);

  return (
    <div className="leader-board">
      <div className="leader-board-title">
        <div>
          <img className="smallLogo" src={userPhotoUrl} alt={userName} />
        </div>
        <div className='name-section'>
          <h3 className='name'>{userName}</h3>
          <a className='link-leaderboard' href="URL-ссылки">LeaderBoard</a>
        </div>
        {/* Добавляем отображение строки URL */}
        <div className='url-section'>
          <p>Photo URL: {userPhotoUrl}</p>
        </div>
      </div>
      <div className="leader-board-awards">
        <div className='medal-section'>
          <img className="smallLogo-medal" src={medal} alt={'Medal'} />
          <a className='link-medal' href="URL-ссылки">Ranks</a>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;