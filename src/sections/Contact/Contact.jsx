import React, { memo } from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';


function Contact() {
  return (
    <section className='contact' id='contact'>
      <Title title='Contact' />
      <ul className="wrapper">
        <a href='https://www.linkedin.com/in/christopher-benton-78889822a' target='_blank'>
          <li className="icon linkedin">
            <span className="tooltip">LinkedIn</span>
            <span><i className="fa fa-linkedin"></i></span>
          </li>
        </a>
        <a href='https://github.com/ChristopherBenton145' target='_blank'>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <span><i className="fa fa-github"></i></span>
          </li>
        </a>
        <a href='https://stackoverflow.com/users/17382115/temp?tab=profile' target='_blank'>
          <li className="icon stackoverflow">
            <span className="tooltip">StackOverflow</span>
            <span><i className="fa fa-stack-overflow"></i></span>
          </li>
        </a>
        <a href='mailto: c.benton.145@gmail.com'>
          <li className="icon email">
            <span className="tooltip">Email</span>
            <span><i className="fa fa-envelope"></i></span>
          </li>
        </a>
      </ul>
      <h4>c.benton.145@gmail.com</h4>
    </section>
  );
}

export default memo(Contact);
