import React, { useEffect } from 'react';
import './Nav.css';
import NavList from './NavList/NavList';
import MobileMenu from './MobileMenu/MobileMenu';
import { activateMobileMenu } from './MobileMenu/MobileMenu';
import $ from 'jquery';

export function activateMenu(element) {
  const speed = 1000;

  if (window.innerWidth < 800) {
    activateMobileMenu();
  } else {
    document.querySelector('.active').classList.remove('active');
    element.classList.add('active');
  }

  switch (element.innerHTML) {
    case 'Home':
      gotoSection(document.querySelector('.header'), speed);
      break;
  }
}

function gotoSection(element, time) {
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, time);
}

function Nav() {
  function onScreen(element) {
    const rect = document.querySelector(element).getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  useEffect(() => {
    window.onscroll = function() {
      document.querySelector('.active').classList.remove('active');

      if (onScreen('.about')) {
        document.querySelector('.nav-large').childNodes[1].classList.add('active');
      } else if (onScreen('.header')) {
        document.querySelector('.nav-large').childNodes[0].classList.add('active');
      }
    }
  }, []);

  return (
    <nav className='nav'>
      <h1>Christopher's Portfolio</h1>
      <NavList className='nav-large' />
      <NavList className='nav-small' />
      <MobileMenu />
    </nav>
  );
}

export default Nav;
