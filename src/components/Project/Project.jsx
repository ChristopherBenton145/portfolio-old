import React, { memo } from 'react';
import './Project.css';

function Project({ title, description, live, code }) {
  return (
    <div className='project'>
      <div className='image' />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='buttons'>
        <a href={live} target='_blank'><button className='live'>Live</button></a>
        <a href={code} target='_blank'><button className='code'>Code</button></a>
      </div>
    </div>
  );
}

export default memo(Project);
