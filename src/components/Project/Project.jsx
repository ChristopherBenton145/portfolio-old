import React from 'react';
import './Project.css';

function Project({ title, live, code }) {
  return (
    <div className='project'>
      <div className='image' />
      <h3>{title}</h3>
      <div className='buttons'>
        <a href={live} target='_blank'><button>Live</button></a>
        <a href={code} target='_blank'><button>Code</button></a>
      </div>
    </div>
  );
}

export default Project;
