import React, { Component } from 'react';
import './index.css';

import NavigationBullet from './NavigationBullet/index'
import Slide from './Slide/index'

class ProductsSlider extends Component {
  constructor(props) {
    super(props);

    this.slides = [
      {
        title: 'Olios',
        description: 'Newest furniture template',
        button: 'View more',
        backgroundDescription: 'Newest',
        backgroundImage: process.env.PUBLIC_URL + '/bg.png'
      },
      {
        title: 'Olios1',
        description: 'Newest furniture template',
        button: 'View more',
        backgroundDescription: 'Coolest',
        backgroundImage: process.env.PUBLIC_URL + '/bg.png'
      },
      {
        title: 'Olios2',
        description: 'Newest furniture template',
        button: 'View more',
        backgroundDescription: 'Biggest',
        backgroundImage: process.env.PUBLIC_URL + '/bg.png'
      },
      {
        title: 'Olios3',
        description: 'Newest furniture template',
        button: 'View more',
        backgroundDescription: 'Mostest',
        backgroundImage: process.env.PUBLIC_URL + '/bg.png'
      }
    ];

    this.state = {
      activeIndex: 0
    };

    this.changeActiveIndex = this.changeActiveIndex.bind(this);
    this.computeSlides = this.computeSlides.bind(this);
  }

  changeActiveIndex(index) {
    this.setState({
      activeIndex: index
    });
  };

  computeSlides() {
    return this.slides.map((slide, iterator) => {
      return (
          <Slide key={iterator} component={slide} width={-100 / this.slides.length}></Slide>
      );
    });
  }

  computeNavigationButtons() {
    return this.slides.map((slide, index) => {
      return (
        <NavigationBullet key={index} index={index} isActive={this.state.activeIndex === index} onClick={this.changeActiveIndex}></NavigationBullet>
      );
    });
  }

  render() {
    const percentageValue = - 100 / this.slides.length

    const dynamicSliderStyles = {
      width: this.slides.length * 100 + '%',
      transform: 'translate(' + percentageValue * this.state.activeIndex + '%, 0)'
    };

    this.slidesToRender = this.computeSlides();
    this.navigationBullets = this.computeNavigationButtons();

    return (
      <div className="products-slider-wrapper">
        <div className="slider-rail">
          <div className="slider-track" style={dynamicSliderStyles}>
            {this.slidesToRender}
          </div>
        </div>
        <div className="slider-navigation-wrapper">
          {this.navigationBullets}
        </div>
      </div>
    );
  }
}

export default ProductsSlider;
