import React from 'react';
import {
  Sidebar,
  Menu,
  Icon,
} from 'semantic-ui-react';

import { menuPages } from '../config';
import NavItem from './NavItem';

export const NavMobile = ({
  children,
  visible,
  sidebarHide,
  isActive,
  onClick,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      vertical
      animation='push'
      direction='left'
      icon='labeled'
      width='thin'
      visible={visible}
      onHide={sidebarHide}
      className="f-bg-primary"
    >
      <Menu.Item as='a' onClick={sidebarHide} >
        <Icon
        name='arrow left'
        className="f-font-xl-override text-white text-shadow-default"
        />
      </Menu.Item>
      <NavItem
        menuPages={menuPages}
        isActive={isActive}
        onClick={onClick}
        addtlClassNames="f-text-white"
      />
    </Sidebar>
    <Sidebar.Pusher dimmed={visible}>{ children }</Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavMobile;
