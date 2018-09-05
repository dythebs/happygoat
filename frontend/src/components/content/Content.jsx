import React from 'react'
import "./content.css"
import Slide from '../slide/Slide';
import { Carousel } from "antd";
export default class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[

      ]
    }
  }
   render(){
    return(
      <div className='content'>
        <div className="blog-slider">
          <Carousel>
           <Slide/>
           {/* <Slide/>
           <Slide/> */}
          </Carousel>
        <div className="blog-slider__pagination"></div>
        </div>
      </div>
    );
}}