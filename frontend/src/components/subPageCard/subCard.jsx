import React from 'react'
import {Icon} from 'antd'

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
      cast:this.props.item.cast
    }
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
        cast:nextProps.item.cast
      })
    }
  }
   render(){
    const {zan,img,title,changdi,shoppic,shopname,span,tags,cast} = this.state;
    let tagsH,changdiH;
    if(tagsH===[]){
      tagsH = ""
    }else{
      tagsH =
              tags.map((item, index) => (
                <div className="category" key={index}>{item}</div>
              ))
    }
    if(changdi==={}){
      changdiH = ""
    }else{
      // changdiH = <h2 className="sub_title location"><a href={changdi.href}>{changdi.location}</a></h2>
      changdiH = <div className="location"><a href={changdi.href}>{changdi.location}</a></div>
    }
    return(
      <div className="column">
        <div className="post-module">
          <div className="thumbnail">
            <div className="date">
              <div className="day">
                <Icon type="heart" theme="outlined" />
              </div>
              <div className="month">{zan}</div>
            </div>
            <img src={img} />
            <div className='mask'>
              <button className='fill'></button>
            </div>
          </div>
          <div className="post-content">
            {tagsH}
            <div className="cast">{cast}</div>
            <h1 className="title">{title}</h1>
            <h2 className="sub_title">{shopname}</h2>
            {changdiH}
            <div className="post-meta">
              <span className="timestamp"><img src={shoppic}/></span>

              {/* <span className="comments">{span}</span> */}
            </div>
            <div>{span}</div>
          </div>
        </div>
      </div>
    );
}}

export default SubCard;