import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon,
} from 'semantic-ui-react';


const Logo = ({ title, homePage, handleClick }) => (
  <Link to={`/${homePage}`} onClick={handleClick} className="no-link f-text-white">
    <div className="flex align-items-center height-fill padding-left-right-10">
      <Icon
        name='dna'
        size='large'
      />
      <span className="font-lgr font-special">{title}</span>
    </div>
  </Link>
);


export default Logo;
