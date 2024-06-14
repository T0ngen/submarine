import { useEffect, useState } from 'react';
import './LeaderBoard.css';
import logo from '../images/logo.png';
import medal from '../images/medal-bronze.png';

const LeaderBoard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      setUserName(tg.initDataUnsafe.user.first_name || 'Guest');
    }
  }, []);

  return (
    <div className="leader-board">
      <div className="leader-board-title">
        <div>
          <img className="smallLogo" src={logo} alt={'Logo'} />
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