import React from 'react';
import './NavList.css';
import { activateMenu } from '../Nav';

function NavList({ className }) {
  return (
    <ul className={className}>
      <li className='active' onClick={(e) => activateMenu(e.target)}>Home</li>
      <li onClick={(e) => activateMenu(e.target)}>About</li>
      <li onClick={(e) => activateMenu(e.target)}>Skills</li>
      <li onClick={(e) => activateMenu(e.target)}>Projects</li>
      <li onClick={(e) => activateMenu(e.target)}>Contact</li>
    </ul>
  );
}

export default NavList;
