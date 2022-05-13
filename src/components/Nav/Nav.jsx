import React, { useEffect, memo } from 'react';
import './Nav.css';
import NavList from './NavList/NavList';
import MobileMenu, { activateMobileMenu } from './MobileMenu/MobileMenu';
import $ from 'jquery';

export function gotoSection(element, offset = 0) {
  const listSmall = document.querySelector('.list-small');
  listSmall.classList.contains('active') && activateMobileMenu();

  $('html, body').animate({
    scrollTop: $(element).offset().top + offset
  }, 1000);
}

function Nav() {
  useEffect(() => document.addEventListener('scroll', () => {
    if (onScreen(document.querySelector('.header h2'))) {
      activateMenu(1);
    } else if (onScreen(document.querySelector('.about h2'))) {
      activateMenu(2);
    } else if (onScreen(document.querySelector('.skills h2'))) {
      activateMenu(3);
    } else if (onScreen(document.querySelector('.projects h2'))) {
      activateMenu(4);
    } else if (onScreen(document.querySelector('.contact h2'))) {
      activateMenu(5);
    }
  }), []);

  function onScreen(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  function activateMenu(index) {
    document.querySelector('.list li.active').classList.remove('active');
    document.querySelector('.list').childNodes[index].classList.add('active');
  }

  return (
    <nav className='nav'>
      <NavList className='list' />
      <NavList className='list-small' />
      <MobileMenu />
    </nav>
  );
}

export default memo(Nav);
