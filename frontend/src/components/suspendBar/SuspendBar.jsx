import React from 'react'
import { Icon,BackTop,Progress} from "antd";
import './suspendBar.css'
import Chatbox from '../chatbox/Chatbox';
import Cart from '../cart/Cart';
import { connect } from "react-redux";
import * as Actions from "../../action/ActionType";
import { withRouter } from "react-router-dom";
class SuspendBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showchat:false,
      showcart:false,
      percent:this.props.progress
    }
    this.showchat = this.showchat.bind(this);
    this.showcart = this.showcart.bind(this);
    this.hidecart = this.hidecart.bind(this);
    this.hidechat = this.hidechat.bind(this);
  }

  componentDidMount(){
    // 获得userid，获得进度,设置进度值

  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        percent:nextProps.progress
      })
    }
  }

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

  toDetail = () => {
    this.props.history.push('/Center/3')
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
        <button className="bar-button" id='progress' href="#" title="婚礼进度" onClick={this.toDetail}>
          <Progress type="circle" percent={percent} width={40} />
        </button>
        <BackTop>
          <div className="bar-button">
            <Icon type="up-circle" theme="outlined" />
          </div>
        </BackTop>
        <Chatbox showchat={showchat} hideComponent={this.hidechat}/>
        <Cart showcart={showcart} hideComponent={this.hidecart}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress:state.progress
})

export default connect(mapStateToProps)(withRouter(SuspendBar));