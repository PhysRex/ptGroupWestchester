import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';


const menuItems = [
  {
    name: 'home',
  },
  {
    name: 'game',
  },
  {
    name: 'dashboard',
  },
  {
    name: 'profile',
  },
];

/**
 * @param {string} current The current route (current state.activeItem also)
 * @param {string} menuItem THe menu item to check against 
 * @returns {boolean} True if current route (url pathname) matches Navbar item
 */
const isActive = (current, menuItem) => {
  if (current === '/' && menuItem === 'home') return true;
  return current === menuItem || current === `/${menuItem}`;
}


export default class NavBar extends Component {
  state = { activeItem: 'home' }

  componentDidMount() {
    this.setState({
      activeItem: window.location.pathname,
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // updatedMenu = () => [...menuItems, ...this.props.updateMenu];

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary pointing style={{'padding': '0 10px'}}>
        <Link to='/home'>
          <Icon circular name='dna' size='large' />
        </Link>
        
        <Menu.Menu position='right'>
        {
          menuItems.map(item => (
            <Menu.Item 
              as={Link}
              key={item.name}
              to={`/${item.name}`}
              name={item.name}
              active={isActive(activeItem, item.name)}
              onClick={this.handleItemClick}
            />
          ))
        }
        </Menu.Menu>
      </Menu>
    )
  }
}
