import React from 'react'
import { Icon } from "antd";
import CardInner from './CardInner';
import './cardsheying.css'
class CardsSheying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zindex_: 4,
      type:this.props.type,
      data: {
        sheying:[
          {
            name: "韩国艺匠ARTIZ STUDIO",
            image: "/images/grogshop/1.jpg-w530h400"
          },
          {
            name: "珍妮花婚纱摄影",
            image: "/images/grogshop/1.jpg-w530h400"
          },
          {
            name: "呈色Lisa摄影工作室",
            image: "/images/grogshop/1.jpg-w530h400"
          },
          {
            name: '巴黎婚纱摄影',
            image: "/images/grogshop/1.jpg-w530h400"
          },
        ],
        hunsha:[
          {
            name: "InShine·婚纱之王",
            image: "/images/hunsha/1.jpg"
          },
          {
            name: "OnlyLove森系婚纱",
            image: "/images/hunsha/2.jpg"
          },
          {
            name: "韩国天使嫁衣礼服馆",
            image: "/images/hunsha/3.jpg"
          },
          {
            name: 'Eve King婚纱礼服高定',
            image: "/images/hunsha/4.jpg"
          },
        ],
        miyue: [
          {
            name: "【巴厘岛】希尔顿，悬崖海景酒店蜜月游",
            image: "/images/miyue/1.jpg"
          },
          {
            name: "【巴黎】勒斯旺贝斯特精品酒店蜜月游",
            image: "/images/miyue/2.jpg"
          },
          {
            name: "【芽庄】甄选，国境之南，尽情绽放甜蜜浪漫",
            image: "/images/miyue/3.jpg"
          },
          {
            name: '【北海道】一部写不完的情书，亲民蜜月',
            image: "/images/miyue/4.jpg"
          },
        ]
      }
    }
  }

  render() {
    const { data,type } = this.state;
    let data_ = data[type];
    return (
      <div className="s-container">
        {
          data_.map((item,index) => (
            <div className='card' key={index}>
              <img src={item.image}/>
              <h3>{item.name}</h3>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CardsSheying;