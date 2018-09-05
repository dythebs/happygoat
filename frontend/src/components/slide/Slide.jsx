import React from 'react'
import "./slide.css"
class Slide extends React.Component {

  render() {
    return (
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide swiper-slide-active">
          <p>hu</p>
          <div className="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
    repellendus magni illo ea animi? </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;