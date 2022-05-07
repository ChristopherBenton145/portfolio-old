import React from 'react';
import './MobileMenu.css';

export function activateMobileMenu() {
  if (window.innerWidth < 800) {
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.querySelector('.nav-small').classList.toggle('active');
    if (document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}

function MobileMenu() {
  return (
    <div className='mobile-menu' onClick={activateMobileMenu}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='50px'>
        <title>Menu Open</title>
        <path strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M80 160h352M80 256h352M80 352h352'/>
      </svg>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='50px'>
        <title>Menu Close</title>
        <path strokeLinecap='round' strokeinejoin='round' strokeWidth='32' d='M368 368L144 144M368 144L144 368'/>
      </svg>
    </div>
  );
}

export default MobileMenu;
