import './menuButtons.css';
import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const MenuButtons = () => {
    return (
        <div className="menu-block">
            <div className="menu-button">
                <div className="menu-button-content">
                    <CurrencyExchangeIcon color="enabled" />
                    <p className='text-buttons active'>Заработать</p>
                </div>
            </div>
            <div className="menu-button">
                <div className="menu-button-content">
                <UnarchiveIcon color="disabled" />
                <p className='text-buttons'>Улучшения</p>
                </div>
            </div>
            <div className="menu-button">
                <div className="menu-button-content">
                <AssignmentIcon color="disabled" />
                <p className='text-buttons'>Задания</p>
                </div>
            </div>
            <div className="menu-button">
                <div className="menu-button-content">
                <PeopleAltIcon color="disabled" />
                <p className='text-buttons'>Друзья</p>
                </div>
            </div>
        </div>
    );
};

export default MenuButtons;