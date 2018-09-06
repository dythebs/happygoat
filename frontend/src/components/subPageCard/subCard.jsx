import React from 'react'
import {Icon} from 'antd'
class SubCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zan:this.props.item.zan,
      img:"https://" + this.props.item.img,
      title:this.props.item.title,
      changdi:this.props.item.changdi,
      shoppic: "https://" + this.props.item.shoppic,
      span:this.props.item.span,
      shopname:this.props.item.shopname,
      tags:this.props.item.tags
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps!==this.props) {
      this.setState({
        zan: nextProps.item.zan,
        img: "https://" + nextProps.item.img,
        title: nextProps.item.title,
        changdi: nextProps.item.changdi,
        shoppic: "https://" + nextProps.item.shoppic,
        span: nextProps.item.span,
        shopname: nextProps.item.shopname,
        tags: nextProps.item.tags
      })
    }
  }
   render(){
    const {zan,img,title,changdi,shoppic,shopname,span,tags} = this.state;
    let tagsH,changdiH;
    if(tagsH===[]){
      tagsH = ""
    }else{
      tagsH =
          <div className="category">
            {
              tags.map((item, index) => (
                <div className="category">{item}</div>
              ))
            }
          </div>
    }
    if(changdi==={}){
      changdiH = ""
    }else{
      changdiH = <h2 className="sub_title"><a href={changdi.href}>{changdi.location}</a></h2>
    }
    return(
      <div className="post-module">
        <div className="thumbnail">
          <div className="date">
            <div className="day">
              <Icon type="heart" theme="outlined" />
            </div>
            <div className="month">{zan}</div>
          </div>
          <img src={img} />
        </div>
        {/* <!-- Post Content--> */}
        <div className="post-content">
          {tagsH}
          <h1 classNameName="title">{title}</h1>
          {changdiH}
          <h2 className="sub_title">{ shopname }</h2>
          <div className="post-meta">
            {/* <span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span> */}
            <span className="timestamp"><img src={shoppic}/></span>
            {/* <span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span> */}
            <span className="comments">{span}</span>
          </div>
        </div>

      </div>
    );
}}

export default SubCard;