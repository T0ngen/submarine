import { useEffect, useState } from 'react';
import './LeaderBoard.css';
import logo from '../images/logo.png';
import medal from '../images/medal-bronze.png';

const LeaderBoard = () => {
  const [userName, setUserName] = useState('Guest');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');

  useEffect(() => {
    // Check if Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const user = tg.initDataUnsafe.user;

      if (user) {
        setUserName(user.first_name || 'Guest');
        setUserPhotoUrl(user.photo_url || logo);
      } else {
        setUserPhotoUrl(logo); // Default photo if user data is not available
      }
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