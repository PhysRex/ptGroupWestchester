import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
} from 'semantic-ui-react';

const NavItem = ({ menuPages, isActive, onClick }) => menuPages.map(({name, alias}) => (
  <Menu.Item 
    as={Link}
    key={name}
    to={`/${name}`}
    name={alias}
    active={isActive(name)}
    onClick={onClick}
    className="font-lgr"
  />
));

export default NavItem;
