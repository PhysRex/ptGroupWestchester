import React from 'react';
import { Menu } from 'semantic-ui-react';

import {
  homePage,
  menuPages,
} from '../config';
import NavItem from './NavItem';
import { Logo } from '../../templates';
import  { shared } from '../../../copy';

export const NavDesktop = (props) => (
  <Menu
    inverted
    secondary
    pointing
    fixed={props.fixedNavLocation || ''}
    className="f-no-border f-bg-primary"
  >
    <Logo
      title={shared.siteTitle}
      homePage={homePage}
      handleClick={props.setNavHome}
    />
    <Menu.Menu position='right'>
      <NavItem
        menuPages={menuPages}
        isActive={props.isActive}
        onClick={props.onClick}
      />
    </Menu.Menu>
  </Menu>
);

export default NavDesktop;
