import React, { Component } from 'react';
import './index.css';

class NavigationBullet extends Component {
    constructor(props) {
        super(props);
        this.activateBullet = this.activateBullet.bind(this);
    }

    activateBullet = () => {
        this.props.onClick(this.props.index);
    }

    render() {
        return (
            <div className={this.props.isActive ? 'navigation-bullet active' : 'navigation-bullet'} onClick={this.activateBullet}></div>
        );
    }
}

export default NavigationBullet;
