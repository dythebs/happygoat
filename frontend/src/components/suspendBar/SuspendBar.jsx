import React from 'react'
import { Icon } from "antd";
import './suspendBar.css'
import Chatbox from '../chatbox/Chatbox';
class SuspendBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showchat:false
    }
    this.showchat = this.showchat.bind(this)
  }

  showchat(){
    this.setState({
      showchat:true
    })
  }
  render() {
    const {showchat} = this.state;
    return (
      <div>
        <button className="bar-button" id="portfolio" href="#" title="在线客服" onClick={this.showchat}>
          <Icon type="message" theme="outlined" className="icon"/>
        </button>
        <button className="bar-button" id="codepen" title="Follow me!">

        </button>

        <Chatbox showchat={showchat} />
      </div>
    );
  }
}

export default SuspendBar;