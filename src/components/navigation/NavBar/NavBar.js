import React, { Component } from 'react'
import {
  Responsive,
  Icon,
} from 'semantic-ui-react';

import { homePage } from '../config';
import { NavMobile, NavDesktop } from './';


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

  /**
   * Sets active page when navbar item is clicked, hides nav sidebar in mobile
   * @param {SyntheticEvent} e React's original SyntheticEvent
   * @param {object} props React props
   * @param {string} props.name The page name (not necessarily the display name)
   * @returns {undefined}
   */
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.navHide();
  };

  setNavHome = () => {
    this.setState({ activeItem: homePage });
  };

  /**
   * Checks if a given `page` is the current page.
   * @param {string} page The current route's page name
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
          { !isNavVisible &&
            <div className="position-fixed z-index-10 margin-15" onClick={this.navShow}>
              <Icon
              name='sidebar'
              size='big'
              className="f-text-white text-shadow-default"
              />
            </div>
          }
          <NavMobile
            isActive={this.isActive}
            onClick={this.handleItemClick}
            setNavHome={this.setNavHome}
            visible={isNavVisible}
            sidebarHide={this.navHide}
          >
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
