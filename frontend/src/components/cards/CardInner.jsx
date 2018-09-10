import React from 'react'
import {Rate} from "antd"
class CardInner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowing : false,
      data_:this.props.item
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log("ddd",this.props);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps!==this.props) {
      this.setState({
        data_:nextProps.item
      })
    }
  }
  handleClick(event) {
    event.preventDefault();
    const {isShowing} = this.state;
    this.setState({
      isShowing:!isShowing
    })
    this.props.changeShowing();
  }
   render(){
    const {isShowing,data_} = this.state;
    return(
      <div className={["card", isShowing ? "show" : ""].join(" ")} onClick={this.handleClick}>
        <img src={data_.image} alt="" />
        <div className="card-title">
          <a href="#" className="toggle-info btn">
            <span className="left"></span>
            <span className="right"></span>
          </a>
          <h3>{data_.name}</h3>
          <Rate disabled value={data_.rating} />
          {/* <p>Image from unsplash.com</p> */}
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            {/* This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available
            etc. */}
            价格：{data_.price}
            桌数：{data_.desks}
          </div>
          <div className="card-flap flap2">
            <div className="card-actions">
              <a href="#" className="btn">了解更多</a>
            </div>
          </div>
        </div>
      </div>
    );
}}

export default CardInner;