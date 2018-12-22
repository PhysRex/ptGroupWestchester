import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import { homePage, MenuPagesForNavBar } from './config';

const menuPages = MenuPagesForNavBar();

/**
 * @param {string} current The current route (current state.activeItem also)
 * @param {string} menuItem THe menu item to check against 
 * @returns {boolean} True if current route (url pathname) matches Navbar item
 */
const isActive = (current, page) => {
  if (current === '/' && page === homePage) return true;
  return current === page || current === `/${page}`;
};


export default class NavBar extends Component {
  state = { activeItem: homePage }

  componentDidMount() {
    this.setState({
      activeItem: window.location.pathname,
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  setNavHome = () => {
    this.setState({ activeItem: homePage });
  };


  render() {
    const { activeItem } = this.state
    return (
      <Menu
        inverted
        secondary
        pointing
        fixed={this.props.fixedNavLocation || ''}
        className="f-no-border"
      >
        <Link to={`/${homePage}`} onClick={this.setNavHome} className="no-link f-text-white">
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
            menuPages.map(page => (
              <Menu.Item 
                as={Link}
                key={page}
                to={`/${page}`}
                name={page}
                active={isActive(activeItem, page)}
                onClick={this.handleItemClick}
                className="font-lgr"
              />
            ))
          }
          </Menu.Menu>
      </Menu>
    )
  }
}
