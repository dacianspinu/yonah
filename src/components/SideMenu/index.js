import React, { Component } from 'react';
import appLogo from './logo.png';

import './index.css';

class SideMenu extends Component {
  render() {
    return (
        <div className="menu-container">
            <img src={appLogo} alt="Logo" className="app-logo" />
        </div>
    );
  }
}

export default SideMenu;
