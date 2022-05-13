import React, { memo } from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';


function Contact() {
  return (
    <section className='contact' id='contact'>
      <Title title='Contact' />
      <ul class="wrapper">
        <a href='https://www.linkedin.com/in/christopher-benton-78889822a' target='_blank'>
          <li class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <span><i class="fa fa-linkedin"></i></span>
          </li>
        </a>
        <a href='https://github.com/ChristopherBenton145' target='_blank'>
          <li class="icon github">
            <span class="tooltip">Github</span>
            <span><i class="fa fa-github"></i></span>
          </li>
        </a>
        <a href='https://stackoverflow.com/users/17382115/temp?tab=profile' target='_blank'>
          <li class="icon stackoverflow">
            <span class="tooltip">StackOverflow</span>
            <span><i class="fa fa-stack-overflow"></i></span>
          </li>
        </a>
        <a href='mailto: c.benton.145@gmail.com'>
          <li class="icon email">
            <span class="tooltip">Email</span>
            <span><i class="fa fa-envelope"></i></span>
          </li>
        </a>
      </ul>
    </section>
  );
}

export default memo(Contact);
