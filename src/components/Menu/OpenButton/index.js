import React, { Component } from 'react';
import './index.css';

class OpenButton extends Component {
    constructor(props) {
        super(props);

        this.changeButton = this.changeButton.bind(this);
    }

    changeButton = () => {
        this.props.onClick();
    }
    render() {
        return(
            <div className="open-button" onClick={this.changeButton}>
                <div className={this.props.open ? 'burger-icon-wrapper close' : 'burger-icon-wrapper'}>
                    <div className="burger-line first-line"></div>
                    <div className="burger-line second-line"></div>
                    <div className="burger-line third-line"></div>
                </div>
            </div>
        );
    }
}

export default OpenButton;