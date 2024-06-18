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
               <p className='info-about-claim'>Доступно:</p>
               <p className='text-amount-to-claim'>0.0000 $SUBMA</p>
               <p className='claim-text-time'>сгорят через: 00:00:00</p>
            </div>
            <div>
               <div className='mini-claim-block'>
                  <h4 className='mini-claim-block-text'>Claim $SUBMA</h4>
               </div>
            </div>
            
         </div>
            <div className='info_maining'>
            <div>
            <p className='subma-maining'>$SUBMA намайнено: </p>
            </div>
            <img className='logo-crypto2' src={logo} alt={"name"} />
               <div className='info_maining2'>
               
               <p className='subma-maining2'>0.00 </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClaimMenu; 