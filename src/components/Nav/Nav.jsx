import React from 'react';
import './Nav.css';
import NavList from './NavList/NavList';
import MobileMenu from './MobileMenu/MobileMenu';

function Nav() {
  return (
    <nav className='nav'>
      <NavList className='nav-large' />
      <NavList className='nav-small' />
      <MobileMenu />
    </nav>
  );
}

export default Nav;
