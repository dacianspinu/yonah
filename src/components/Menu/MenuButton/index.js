import React, {Component} from 'react';
import './index.css';

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu-button-holder">
                <div className="menu-button-name">
                    {this.props.name}
                </div>
                <img className="menu-button-icon" src={this.props.icon}></img>
            </div>
            
        );
    }
}

export default MenuButton;