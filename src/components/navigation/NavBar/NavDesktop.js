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
    className="f-no-border f-bg-primary padding-top-bottom-3"
  >
    <Logo
      title={shared.site.title}
      subtitle={shared.site.subtitle}
      homePage={homePage}
      handleClick={props.setNavHome}
    />
    <Menu.Menu position='right'>
      <NavItem
        menuPages={menuPages}
        isActive={props.isActive}
        onClick={props.onClick}
        addtlClassNames="f-padding-left-right-10"
      />
    </Menu.Menu>
  </Menu>
);

export default NavDesktop;
