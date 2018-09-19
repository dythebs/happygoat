import React from 'react'
import "../chatbox/chatbox.css"
import {connect} from 'react-redux'
import {Icon} from 'antd'
import * as Actions from '../../action/ActionType'
import {Link } from "react-router-dom";
class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showcart:this.props.showcart,
      data:this.props.cartData
    }
    this.hidecart = this.hidecart.bind(this);
    this.delCart = this.delCart.bind(this);
  }

  componentDidMount(){
    console.log(this.props.cartData);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps!==this.props){
      this.setState({
        showcart:nextProps.showcart,
        data:nextProps.cartData
      })
    }
  }
  hidecart(){
    this.props.hideComponent();
  }

  delCart(index){
    const {data} = this.state;
    const select = data[index];
    console.log(index,'select',select);
    this.props.delproduct(select.title);
   this.forceUpdate();
  }
   render(){
     const {showcart,data} = this.state;
     console.log(this.props.cartData,"9999")
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
              {
                data!==undefined &&
                data.map((item, index) => (
                  <div className='cart-item' key={index}>
                    <img className="item-img" src={item.img}/>
                    <div className="item-detail">
                      <p><a className='item-title'>{item.title}</a></p>
                      <p>{item.detail}</p>
                    </div>
                    <span className='button-save'><Icon type="minus-circle" theme="outlined" onClick={()=>this.delCart(index)}/></span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="message-box" style={{border:'none'}}>
            <button className="message-submit clear-button" onClick={this.props.clearCart}>清空</button>
            <Link className="message-submit" to='/Center/1'>查看详情</Link>
          </div>
        </div>
      </div>
    );
}}
const mapStateToProps = state => ({
  cartData:state.data
})
const mapDispatchToProps = dispatch => ({
  // addproduct: item => dispatch(Actions.addproduct(item))
  delproduct: title => dispatch(Actions.delproduct(title)),
  clearCart: () => dispatch(Actions.clear_cart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);