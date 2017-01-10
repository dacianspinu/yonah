import React, { Component } from 'react';
import './index.css';

class OpenButton extends Component {
    render() {
        return(
            <div className="open-button">
                <div className="burger-icon-wrapper">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
        );
    }
}

export default OpenButton;