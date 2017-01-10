import React, { Component } from 'react';
import './index.css';

class Slide extends Component {
    constructor(props) {
        super(props);

        this.slideProperties = this.props.component;
    }

    render() {
        return (
            <div className="slide-container" style={{ backgroundImage: 'url(' + this.slideProperties.backgroundImage + ')', width: 100 / 4 + '%' }}>
                <div className="slide-title">
                    {this.slideProperties.title}
                </div>
                <div className="slide-title slide-description">
                    {this.slideProperties.description}
                </div>
                <div className="more-button">
                    {this.slideProperties.button}
                </div>
                <div className="slide-background-description">
                    {this.slideProperties.backgroundDescription}
                </div>
            </div>
        );
    }
}

export default Slide;
