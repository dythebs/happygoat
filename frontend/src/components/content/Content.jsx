import React from 'react'
import "./content.css"
import Slide from '../slide/Slide';
import { Carousel } from "antd";
import Card_ from '../cards/Card_';
export default class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[

      ],
    }
  }
   render(){
    return(
      <div>
        <div className='content'>
          <div className="blog-slider">
            <Carousel vertical autoplay>
              <Slide />
              <Slide />
              <Slide />
            </Carousel>
          </div>
        </div>

       <div className="content">
          <div className="box">
            <Card_ />
          </div>
       </div>
      </div>
    );
}}