import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon,
} from 'semantic-ui-react';


const Logo = ({ title, subtitle, homePage, handleClick, isHorizontal = false }) => (
  <Link to={`/${homePage}`} onClick={handleClick} className="no-link f-text-white">
    <div className={`flex align-items-center padding-left-10 ${isHorizontal ? 'flex-direction-column' : 'height-fill'}`}>
      <Icon
        name='home'
        size='big'
        className="text-shadow-default"
      />
      <div className={`flex align-items-center flex-direction-column ${isHorizontal ? 'margin-top-10' : ''}`}>
        <span className="font-lgr font-family-merriweather text-shadow-default">{title}</span>
        <span className="font-lgr font-family-sofia text-shadow-default">{subtitle}</span>
      </div>
    </div>
  </Link>
);


export default Logo;
