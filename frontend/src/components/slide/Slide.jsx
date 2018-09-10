import React from 'react'
import "./slide.css"
class Slide extends React.Component {

  render() {
    return (
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide swiper-slide-active">
          <div className="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">案例推荐</span>
            <div className="blog-slider__title">十里桃林</div>
            <div className="blog-slider__text">中式梦幻|仙气十足|古韵情怀 </div>
            <a href="#" className="blog-slider__button">查看更多</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;