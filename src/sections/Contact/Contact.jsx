import React from 'react';
import './Contact.css';
import Title from '../../components/Title/Title';
import linkedinIcon from '../../assets/images/contact/linkedin.png';
import emailIcon from '../../assets/images/contact/email.png';
import githubIcon from '../../assets/images/contact/github.png';
import stackoverflowIcon from '../../assets/images/contact/stackoverflow.png';

function Contact() {
  return (
    <section className='contact' id='contact'>
      <Title title='Contact' />
      <div className='container'>
        <div className='content'>
          <img src={linkedinIcon} alt='LinkedIn' />
          <a href='https://www.linkedin.com/in/christopher-benton-78889822a' target='_blank'>
            <h1>Linked In</h1>
            <p>https://www.linkedin.com/in/christopher-benton-78889822a</p>
          </a>
        </div>
        <div className='content'>
          <img src={emailIcon} alt='Email' />
          <a href='mailto: c.benton.145@gmail.com'>
            <h1>Email</h1>
            <p>c.benton.145@gmail.com</p>
          </a>
        </div>
        <div className='content'>
          <img src={githubIcon} alt='Github' />
          <a href='https://github.com/ChristopherBenton145' target='_blank'>
            <h1>Github</h1>
            <p>https://github.com/ChristopherBenton145</p>
          </a>
        </div>
        <div className='content'>
          <img src={stackoverflowIcon} alt='LinkedIn' />
          <a href='https://stackoverflow.com/users/17382115/temp' target='_blank'>
            <h1>Stack Overflow</h1>
            <p>https://stackoverflow.com/users/17382115/temp</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
