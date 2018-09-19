import React from 'react'
import { Icon,BackTop,Progress} from "antd";
import './suspendBar.css'
import Chatbox from '../chatbox/Chatbox';
import Cart from '../cart/Cart';
class SuspendBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showchat:false,
      showcart:false,
      percent:0
    }
    this.showchat = this.showchat.bind(this);
    this.showcart = this.showcart.bind(this);
    this.hidecart = this.hidecart.bind(this);
    this.hidechat = this.hidechat.bind(this);
  }

  componentDidMount(){
    // 获得userid，获得进度,设置进度值

  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.pro !== this.state.percent){
  //     this.setState({
  //       percent:nextProps.pro
  //     })
  //   }
  // }

  // updatePercent(){
  //   let p = sessionStorage.getItem('progress');
  //   if (p !== undefined) {
  //     this.setState({
  //       percent:p
  //     })
  //   }
  // }
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
    const {showchat,showcart,percent} = this.state;
    return (
      <div>
        <button className="bar-button" id="portfolio" href="#" title="在线客服" onClick={this.showchat}>
          <Icon type="message" theme="outlined" className="icon"/>
        </button>
        <button className="bar-button" id="codepen" title="购物车" onClick={this.showcart}>
          <Icon type="star" theme="outlined" className="icon" />
        </button>
        <button className="bar-button" id='progress' href="#" title="婚礼进度">
          <Progress type="circle" percent={percent} width={40} />
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