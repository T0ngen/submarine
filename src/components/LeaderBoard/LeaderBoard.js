import React from 'react';
import './LeaderBoard.css';
import logo from '../images/logo.png';
import medal from '../images/medal-bronze.png';

const LeaderBoard = () => {
  return (
    <div className="leader-board">
      <div className="leader-board-title">
        <div>
        <img className="smallLogo" src={logo} alt={'sa'} />
        </div>
        <div className='name-section'>
          <h3 className='name'>Ilya</h3>
          <a className='link-leaderboard' href="URL-ссылки">LeaderBoard</a>
        </div>
      </div>
      <div className="leader-board-awards">
      <div className='medal-section'>
      <img className="smallLogo-medal" src={medal} alt={'sa'} />
      <a className='link-medal' href="URL-ссылки">Ranks</a>
      </div>
      </div>
    </div>
  );
};

export default LeaderBoard;