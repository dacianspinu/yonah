import React, { Component } from 'react';
import './index.css';

import SideMenu from '../../../components/SideMenu/index'
import Menu from '../../../components/Menu/index'
import ProductsSlider from './ProductsSlider/index'

class Home extends Component {
  render() {
    return (
        <div className="app-container">
            <Menu></Menu>
            <div className="home-holder">
                <SideMenu></SideMenu>
                <ProductsSlider></ProductsSlider>
            </div>
        </div>
    );
  }
}

export default Home;
