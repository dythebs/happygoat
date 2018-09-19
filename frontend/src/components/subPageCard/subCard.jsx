import React from 'react'
import {Icon, message} from 'antd';
import { connect } from 'react-redux'
import * as Actions from "../../action/ActionType"
import ajaxhost from '../../ajaxhost';

const htttps = "https://";
class SubCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zan:this.props.item.zan,
      img:htttps + this.props.item.img,
      title:this.props.item.title,
      changdi:this.props.item.changdi,
      shoppic: htttps + this.props.item.shoppic,
      span:this.props.item.span,
      shopname:this.props.item.shopname,
      tags:this.props.item.tags,
      cast:this.props.item.cast,
      type:this.props.type,
      anlihref: props.item.anlihref,

      href: this.props.href,
      summary: this.props.summary,
      price: this.props.item.price,
      img_:this.props.item.img
    }

    this.addAnliToCart = this.addAnliToCart.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log("subCard",this.props,nextProps);
    if (nextProps!==this.props) {
      this.setState({
        zan: nextProps.item.zan,
        img: "https://" + nextProps.item.img,
        title: nextProps.item.title,
        changdi: nextProps.item.changdi,
        shoppic: "https://" + nextProps.item.shoppic,
        span: nextProps.item.span,
        shopname: nextProps.item.shopname,
        tags: nextProps.item.tags,
        cast:nextProps.item.cast,
        anlihref:nextProps.item.anlihref,
        type:nextProps.type,
        href:nextProps.href,
        summary:nextProps.summary,
        price:nextProps.item.price
      })
    }
  }

  addAnliToCart(){
    const { title, shopname, tags} = this.state;
    let select = this.state;
    select.detail = title + shopname + tags.join(' ');
    message.info('已添加');
    this.props.addproduct(select);
  }
   render(){
    const {zan,img,title,changdi,shoppic,shopname,span,tags,cast,type,href,summary,price,img_,anlihref} = this.state;
    let tagsH, changdiH;

    if(type === 'anli'){
      if (tagsH === []) {
        tagsH = ""
      } else {
        tagsH =
          tags.map((item, index) => (
            <div className="category" key={index}>{item}</div>
          ))
      }
      if (changdi === {}) {
        changdiH = ""
      } else {
        // changdiH = <h2 className="sub_title location"><a href={changdi.href}>{changdi.location}</a></h2>
        changdiH = <div className="location"><a href={changdi.href}>{changdi.location}</a></div>
      }
      return (
        <div className="column">
          <div className="post-module">
            <div className="thumbnail">
              <div className="date">
                <div className="day">
                  <Icon type="heart" theme="outlined" />
                </div>
                <div className="month" onClick={this.addAnliToCart}>{zan}</div>
              </div>
              <img src={img} />
              {/* <div className='mask'>
              <button className='fill'><Icon type="star" theme="outlined" onClick={this.addAnliToCart} /></button>
            </div> */}
            </div>
            <div className="post-content">
              {tagsH}
              <div className="cast">{cast}</div>
              <h1 className="title">
              {console.log(anlihref)}
                <a className='detail' target='_blank' href={ajaxhost + '/detail/hunlicehua/https~3A~2F~2Fsh.daoxila.com' + encodeURIComponent( anlihref ).replace(new RegExp("%", "g"), '~')}>{title}</a>
              </h1>
              <h2 className="sub_title">{shopname}</h2>
              {changdiH}
              <div className="post-meta">
                <span className="timestamp"><img src={shoppic} /></span>

                {/* <span className="comments">{span}</span> */}
              </div>
              <div>{span}</div>
            </div>
          </div>
        </div>
      );
    } else if( type === 'miyue') {
      // console.log(this.props.item,'.......')
      return (
        <div className="column">
          <div className="post-module">
            <div className="thumbnail">
              <div className="date">
                <div className="day">
                  <Icon type="heart" theme="outlined" />
                </div>
              </div>
              <img src={img_} />
              {/* <div className='mask'>
              <button className='fill'><Icon type="star" theme="outlined" onClick={this.addAnliToCart} /></button>
            </div> */}
            </div>
            <div className="post-content">
              <div className="cast">{price}</div>
              <h1 className="title">
                <a className='detail' target='_blank' href={ajaxhost + '/detail/miyue/' + encodeURIComponent({href}).replace(new RegExp("%", "g"), '~')}>{title}</a>
              </h1>
              <div className="post-meta">
                <span className="timestamp">{summary}</span>

              </div>
            </div>
          </div>
        </div>
      )
    }
}}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}
const mapDispatchToProps = dispatch => ({
  addproduct: item => dispatch(Actions.addproduct(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(SubCard);