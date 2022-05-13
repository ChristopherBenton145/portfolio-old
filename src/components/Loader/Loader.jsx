import React, { memo } from 'react';
import './Loader.css';

function Loader({ color, duration, delay }) {
  return (
    <div className='loader' style={{'--color': color, '--animation-duration': duration, '--animation-delay': delay}} />
  );
}

export default memo(Loader);
