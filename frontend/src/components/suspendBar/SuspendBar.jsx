import React from 'react'
import { Icon,BackTop} from "antd";
import './suspendBar.css'
import Chatbox from '../chatbox/Chatbox';
import Cart from '../cart/Cart';
class SuspendBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showchat:false,
      showcart:false
    }
    this.showchat = this.showchat.bind(this);
    this.showcart = this.showcart.bind(this);
    this.hidecart = this.hidecart.bind(this);
    this.hidechat = this.hidechat.bind(this);
  }

  showchat(){
    this.setState({
      showchat:true
    })
  }

  showcart(){
    this.setState({
      showcart:true
    })
  }

  hidecart(){
    this.setState({
      showcart:false
    })
  }

  hidechat(){
    this.setState({
      showchat:false
    })
  }
  render() {
    const {showchat,showcart} = this.state;
    return (
      <div>
        <button className="bar-button" id="portfolio" href="#" title="在线客服" onClick={this.showchat}>
          <Icon type="message" theme="outlined" className="icon"/>
        </button>
        <button className="bar-button" id="codepen" title="购物车" onClick={this.showcart}>
          <Icon type="shopping-cart" theme="outlined" className="icon"/>
        </button>
        <BackTop>
          <div className="bar-button">UP</div>
        </BackTop>
        <Chatbox showchat={showchat} hideComponent={this.hidechat}/>
        <Cart showcart={showcart} hideComponent={this.hidecart}/>
      </div>
    );
  }
}

export default SuspendBar;