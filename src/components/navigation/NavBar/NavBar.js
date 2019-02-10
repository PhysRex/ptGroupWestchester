import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Responsive,
  Menu,
  Icon,
} from 'semantic-ui-react';

import { homePage, menuPagesForNavBar } from '../config';
import { NavMobile, NavDesktop } from './';

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
  state = {
    activeItem: homePage,
    isNavVisible: false,
  }

  componentDidMount() {
    this.setState({
      activeItem: window.location.pathname,
    });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.navHide();
  };

  setNavHome = () => {
    this.setState({ activeItem: homePage });
  };

  /**
   * @param {string} current The current route (current state.activeItem also)
   * @param {string} menuItem THe menu item to check against 
   * @returns {boolean} True if current route (url pathname) matches Navbar item
   */
  isActive = (page) => {
    const { activeItem } = this.state
    if (activeItem === '/' && page === homePage) return true;
    return activeItem === page || activeItem === `/${page}`;
  };

  navHide = () => {
    this.setState({ isNavVisible: false });
  }

  navShow = () => {
    this.setState({ isNavVisible: true });
  }

  render() {
    const { isNavVisible } = this.state;
    return (
      <div>
      
        <Responsive {...Responsive.onlyMobile}>
          <NavMobile
            fixedNavLocation={this.props.fixedNavLocation}
            isActive={this.isActive}
            onClick={this.handleItemClick}
            setNavHome={this.setNavHome}
            visible={isNavVisible}
            sidebarHide={this.navHide}
          >
          { !isNavVisible &&
            <div className={"position-fixed z-index-10 margin-15"} onClick={this.navShow}>
              <Icon name='sidebar' size='big'/>
            </div>
          }
            { this.props.children }
          </NavMobile>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavDesktop
            fixedNavLocation={this.props.fixedNavLocation}
            isActive={this.isActive}
            onClick={this.handleItemClick}
            setNavHome={this.setNavHome}
          />
          { this.props.children }
        </Responsive>

      </div>
    )
  }
}
