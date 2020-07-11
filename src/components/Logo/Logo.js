import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain-icon.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 125, width: 125 }}
      >
        <div className="Tilt-inner pa3">
          {' '}
          <span role="img" aria-label="logo">
            <img style={{ paddingTop: '5px' }} src={brain} alt="brain" />
          </span>{' '}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
