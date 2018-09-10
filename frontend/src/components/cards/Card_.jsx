import React from 'react'
import "./card.css"
import CardInner from './CardInner';
import {Icon} from "antd"
class Card_ extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zindex_:4,
      isShowing:false,
      indexStart:0,
      data:[
        {
          name:"大西洋酒店",
          rating:5,
          price:"498-1388",
          desks:55,
          image:"/images/grogshop/1.jpg-w530h400"
        },
        {
          name: "太平洋酒店",
          rating: 4,
          price: "498-1388",
          desks: 55,
          image: "/images/grogshop/1.jpg-w530h400"
        },
        {
          name: "lall酒店",
          rating: 3,
          price: "498-1388",
          desks: 55,
          image: "/images/grogshop/1.jpg-w530h400"
        }
      ]
    }
    this.divcard = this.divcard.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  divcard(){
    const {isShowing} = this.state;
    this.setState({
      isShowing:!isShowing
    })
  }

  handlePrev(event){
    event.preventDefault();
    const {indexStart} = this.state;
    if(indexStart!==0){
      this.setState({
        indexStart:indexStart-1
      })
    }
  }
  handleNext(event){
    event.preventDefault();
    const { indexStart,data } = this.state;
    if (indexStart !== data.length-2) {
      this.setState({
        indexStart: indexStart + 1
      })
    }
  }
  render() {
    const { isShowing ,data,indexStart} = this.state;
    return (
      <div className={["cards",isShowing?"showing":""].join(" ")}>
        <a href="#" className="toggle-info btn prev" onClick={this.handlePrev}>
          <Icon type="left" theme="outlined" style={{fontSize:'24px',}}/>
        </a>
        <a href="#" className="toggle-info btn next" onClick={this.handleNext}>
          <Icon type="right" theme="outlined" style={{ fontSize: '24px'}} />
        </a>
        <CardInner changeShowing={this.divcard}
          item = {data[indexStart]}
        />
        <CardInner changeShowing={this.divcard}
          item = {data[indexStart+1]}
        />
      </div>
    );
  }
}

export default Card_;