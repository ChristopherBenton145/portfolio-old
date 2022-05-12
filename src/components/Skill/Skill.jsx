import React, { memo } from 'react';
import './Skill.css';

function Skill({ title, img }) {
  return (
    <div className='skill'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default memo(Skill);
