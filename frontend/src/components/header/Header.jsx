import React from 'react'
import "./header.css"
import { Carousel } from 'antd';
import Slide from '../slide/Slide';
class Header extends React.Component {
   render(){
    return(
      <div className="header">
        <div id='title' style={{marginTop:'1em'}}>喜羊羊婚庆</div>
        <h4 className='title'>- pick 你的完美婚礼 -</h4>
      </div>
    );
}}

export default Header;