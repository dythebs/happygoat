import React from 'react'
import "./slide.css"
import { Link } from "react-router-dom";
class Slide extends React.Component {

  render() {
    const { img,title,span} = this.props
    return (
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide swiper-slide-active">
          <div className="blog-slider__img">
            <img src={img} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">案例推荐</span>
            <div className="blog-slider__title">{title}</div>
            <div className="blog-slider__text">{span} </div>
            <Link to='/Anli/1' className="blog-slider__button">查看更多</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;