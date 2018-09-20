import React from 'react'
import "./content.css"
import Slide from '../slide/Slide';
import { Carousel } from "antd";
import Card_ from '../cards/Card_';
import CardsSheying from '../cards/CardsSheying';
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

            <Carousel vertical  autoplay effect="fade" >
              <Slide img={'/images/1.jpg'} title='一世相守就是最美的告白' span='' />
              <Slide img={'/images/2.jpg'} title='摘下天下繁星戴于你指尖' span='' />
              <Slide img={'/images/3.jpg'} title='爱琴海畔结长长久久之缘' span='' />
            </Carousel>
          </div>
        </div>

       <div className="content">
          <div className="box" style={{width:'95%'}}>
            <Card_ />
          </div>
       </div>

       <div className='content'>
        <div className='box'>
            <CardsSheying  type='sheying'/>
        </div>
       </div>

        <div className='content'>
          <div className='box'>
            <CardsSheying type='hunsha'/>
          </div>
        </div>

        <div className='content'>
          <div className='box'>
            <CardsSheying type='miyue' />
          </div>
        </div>
      </div>
    );
}}