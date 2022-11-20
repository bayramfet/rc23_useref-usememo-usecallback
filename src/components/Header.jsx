import React from 'react';
import { memo } from 'react';
import clarusLogo from '../assets/cw_logo.png';



const Header = ({resim}) => {
  console.log('HEADER COMPONENT RENDERED');
  return (
    <div className="header">
      <img
        src={resim?resim:clarusLogo}
        alt="cw_logo"
        style={{ margin: '1rem', maxHeight: '200px' }}
      />
    </div>
  );
};

export default memo(Header);

