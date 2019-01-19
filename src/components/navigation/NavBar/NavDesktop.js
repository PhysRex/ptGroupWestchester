import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Icon,
} from 'semantic-ui-react';

import {
  homePage,
  menuPagesForNavBar,
} from '../config';

export const NavDesktop = (props) => (
  <Menu
    inverted
    secondary
    pointing
    fixed={props.fixedNavLocation || ''}
    className="f-no-border"
  >
    <Link to={`/${homePage}`} onClick={props.setNavHome} className="no-link f-text-white">
      <div className="flex align-items-center height-fill padding-left-right-10">
        <Icon
          name='dna'
          size='large'
        />
        <span className="font-lgr">
          Physical Therapy Group of Westchester
        </span>
      </div>
    </Link>

    <Menu.Menu position='right'>
      {
        menuPagesForNavBar().map(page => (
          <Menu.Item 
            as={Link}
            key={page}
            to={`/${page}`}
            name={page}
            active={props.isActive(page)}
            onClick={props.onClick}
            className="font-lgr"
          />
        ))
      }
    </Menu.Menu>
  </Menu>
);

export default NavDesktop;