import React from 'react'
import './claimMenu.css';
import logo from '../images/cryptocurrency.png'; // Путь до медали
const ClaimMenu = () => {
   return (
      <div>
         <div className='claim-block'>
         <div className='claim-miniblock'>
            <div className='claim-img-coin'>
            <img className='logo-crypto' src={logo} alt={"name"} />
            </div>
            <div className='claim-block-text'>
               <p>Доступно:</p>
               <p>0.0000 $SUBMA</p>
               <p>сгорят через: 00:00:00</p>
            </div>
            <div>
               <div className='mini-claim-block'>
                  <h4 className='mini-claim-block-text'>Claim $SUBMA</h4>
               </div>
            </div>
         </div>
         </div>
      </div>
   );
};

export default ClaimMenu; 