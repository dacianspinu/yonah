import React, {Component} from 'react';
import './index.css';

import OpenButton from './OpenButton/index'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false
        }

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }


    render() {
        return (
            <div className="menu-wrapper">
                <OpenButton open={this.state.menuIsOpen} onClick={this.openMenu}></OpenButton>
                <div className={this.state.menuIsOpen ? 'menu-background open' : 'menu-background'}>
                    
                </div>
            </div>
            
        );
    }
}

export default Menu;