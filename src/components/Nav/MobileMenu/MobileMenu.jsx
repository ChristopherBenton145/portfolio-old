import React from 'react';
import './MobileMenu.css';

let active = false;

export function activateMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const listSmall = document.querySelector('.list-small');
  const html = document.querySelector('html');

  if (active == false) {
    setTimeout(() => mobileMenu.style = 'top: -85%; transition: top 0.1s;', 1);
    setTimeout(() => mobileMenu.style = 'top: -175%; transition: top 0.4s;', 200);
    setTimeout(() => mobileMenu.style = 'top: -100%; transition: top 0.6s;', 550);
    setTimeout(() => active = false, 1000);
    listSmall.classList.toggle('active');
    html.classList.toggle('static');
    active = true;
  }
}

function MobileMenu() {
  return (
    <div className='mobile-menu' onClick={activateMobileMenu} >
      <div className='ribbon' />
    </div>
  )
}

export default MobileMenu;
