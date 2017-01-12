import React, {Component} from 'react';
import './index.css';

import OpenButton from './OpenButton/index'
import MenuButton from './MenuButton/index'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false
        }

        this.menuItems = [
            {
                name: 'living room',
                icon: process.env.PUBLIC_URL + '/icons/livingroom.png'
            },
            {
                name: 'office',
                icon: process.env.PUBLIC_URL + '/icons/office.png'
            },
            {
                name: 'for kids',
                icon: process.env.PUBLIC_URL + '/icons/kids.png'
            },
            {
                name: 'kitchen',
                icon: process.env.PUBLIC_URL + '/icons/kitchen.png'
            },
            {
                name: 'accesories',
                icon: process.env.PUBLIC_URL + '/icons/accesories.png'
            }

        ];

        this.openMenu = this.openMenu.bind(this);
        this.generateMenuItems = this.generateMenuItems.bind(this);
    }

    openMenu = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    generateMenuItems = (menuItemsObject) => {
        return menuItemsObject.map((menuItem, index) => {
            return (
                <MenuButton key={index} name={menuItem.name} icon={menuItem.icon}></MenuButton>
            );
        });
    }

    render() {
        const menuButtons = this.generateMenuItems(this.menuItems);
        
        return (
            <div className="menu-wrapper">
                <OpenButton open={this.state.menuIsOpen} onClick={this.openMenu}></OpenButton>
                <div className={this.state.menuIsOpen ? 'menu-background open' : 'menu-background'}>
                    <div className="menu-items-holder">
                        {menuButtons}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Menu;