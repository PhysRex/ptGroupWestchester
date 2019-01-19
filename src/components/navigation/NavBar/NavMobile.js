import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  Menu,
  Icon,
} from 'semantic-ui-react';

import {
  menuPagesForNavBar,
} from '../config';

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
      animation='push'
      direction='left'
      icon='labeled'
      vertical
      visible={visible}
      width='thin'
      onHide={sidebarHide}
    >
      <Menu.Item as='a' onClick={sidebarHide}>
        <Icon name='sidebar'/>
      </Menu.Item>
      {
        menuPagesForNavBar().map(page => (
          <Menu.Item 
            as={Link}
            key={page}
            to={`/${page}`}
            name={page}
            active={isActive(page)}
            onClick={onClick}
            className="font-lgr"
          />
        ))
      }
    </Sidebar>

    <Sidebar.Pusher dimmed={visible}>
      { children }
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default NavMobile;