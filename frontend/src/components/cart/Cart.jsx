import React from 'react'
import "../chatbox/chatbox.css"
class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showcart:this.props.showcart,
      data:[]
    }
    this.hidecart = this.hidecart.bind(this);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==this.props){
      this.setState({
        showcart:nextProps.showcart
      })
    }
  }
  hidecart(){
    this.props.hideComponent();
  }
   render(){
     const {showcart} = this.state;
    return(
      showcart &&
      <div className="avenue-messenger">
        <div className="menu">
          <div className="button" onClick={this.hidecart}>&#10005;</div>
        </div>
        <div className="agent-face">
          <div className="half">
            <img className="agent circle" src="http://askavenue.com/img/17.jpg" />
          </div>
        </div>
        <div className="chat">
          <div className="chat-title">
            <h1>喜洋洋婚庆</h1>
            <h2>竭诚为您服务</h2>
          </div>
          <div className="messages" >
            <div className="messages-content" id="box" ref="container_" >
              {/* {
                data.map((item, index) => (
                  item[0] === 0 ?
                    <div className="message new"><figure className="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure> {item[1]}</div> :
                    <div className="message message-personal new">{item[1]}</div>
                  // <div className="message loading new"><figure className="avatar"><img src="http://askavenue.com/img/17.jpg" /></figure><span></span></div>
                ))
              } */}
            </div>
          </div>
          <div className="message-box">
            {/* <textarea type="text" className="message-input" ref="textarea"></textarea> */}
            <button type="submit" className="message-submit">查看详情</button>
          </div>
        </div>
      </div>
    );
}}
export default Cart;