import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
} from 'semantic-ui-react';

const NavItem = ({ menuPages, isActive, onClick, addtlClassNames }) => menuPages.map(({name, alias}) => (
  <Menu.Item 
    as={Link}
    key={name}
    to={`/${name}`}
    name={name}
    content={alias}
    active={isActive(name)}
    onClick={onClick}
    className={`font-lgr text-shadow-default ${addtlClassNames}`}
  />
));

export default NavItem;
