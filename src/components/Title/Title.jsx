import React, { memo } from 'react';
import './Title.css';

function Title({ title }) {
  return (
    <h2 className='title'>{title}</h2>
  );
}

export default memo(Title);
