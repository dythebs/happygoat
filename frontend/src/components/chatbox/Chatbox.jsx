import React from 'react'
import "./chatbox.css"
import ReactDOM from 'react-dom';
class Chatbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showchat:this.props.showchat,
      data:new Array(),
      loading:false
    }
    // loading -false 未加载好
    // 0 表示机器人 1 表示个人
    this.hidechat = this.hidechat.bind(this);
    this.sendText = this.sendText.bind(this);
  }
  componentDidMount(){
    this.setState({
      data: [
        [0,"欢迎咨询"]
      ],
      loading: true
    })
    // let t = encodeURIComponent("https://changsha.daoxila.com/HunQing/Shop/AnLi").replace(new RegExp("%","g"),'~');
    let t = encodeURIComponent("https://sh.daoxila.com/HunYan").replace(new RegExp("%", "g"), '~');


    console.log(t);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==this.props){
      this.setState({
        showchat:nextProps.showchat
      })
    }
  }

  hidechat(){
    this.setState({
      showchat:false
    })
  }

  sendText(){
    let chats = this.state.data;
    let content = this.refs.textarea.value;
    console.log(content);
    if (content.trim() !== "") {
      chats.push([1, content]);
      this.setState({
        data: chats,
      })
      this.refs.textarea.value = "";
    }
    setTimeout(() => {
      document.getElementById('box').scrollTop = document.getElementById('box').scrollHeight;

    }, 0);

  }
   render(){
    const {showchat,data,loading} = this.state;
    return(
      showchat &&
      <div className="avenue-messenger">
        <div className="menu">
          <div className="button" onClick={this.hidechat}>&#10005;</div>
        </div>
        <div className="agent-face">
          <div className="half">
            <img className="agent circle" src="http://askavenue.com/img/17.jpg" alt="Jesse Tino"/>
          </div>
        </div>
        <div className="chat">
          <div className="chat-title">
            <h1>喜洋洋婚庆</h1>
            <h2>竭诚为您服务</h2>
          </div>
          <div className="messages" >
            <div className="messages-content" id="box" ref="container_" >
            {
              data.map((item, index) => (
                item[0] === 0?
                <div className="message new"><figure className="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure> {item[1]}</div>:
                <div className="message message-personal new">{item[1]}</div>
                // <div className="message loading new"><figure className="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure><span></span></div>
              ))
            }
            </div>
          </div>
          <div className="message-box">
            <textarea type="text" className="message-input" ref="textarea"></textarea>
            <button type="submit" className="message-submit" onClick={this.sendText}>发送</button>
          </div>
        </div>
      </div>
    );
}}

export default Chatbox;