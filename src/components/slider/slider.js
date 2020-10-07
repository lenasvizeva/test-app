import React, { Component } from 'react'
import Slider from 'react-slick'
import sliderPic from '../../images/slider_pic.jpg'
import css from './style.module.scss'
import cn from 'classnames'

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={cn(css.arrows, css.arrowPrev)}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={cn(css.arrows, css.arrowNext)}
      onClick={onClick}
    />
  );
}

class AboutSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }
    return (
      <div className={css.slider}>
        <Slider {...settings}>
          <div>
            <img src={sliderPic} />
          </div>
          <div>
            <img src={sliderPic} />
          </div>
          <div>
            <img src={sliderPic} />
          </div>
          <div>
            <img src={sliderPic} />
          </div>
          <div>
            <img src={sliderPic} />
          </div>
          <div>
            <img src={sliderPic} />
          </div>
        </Slider>
        <div className={css.panel}>
          <span className={css.slidesCounter}>1 / 15</span>
          <span className={cn(css.sliderLabel, 'label2')}>Подпись к блоку может быть опциональной. 
                Можно вводить различные сноски и ссылки для  блоков с фотографиями и видео</span>
          
        </div>
      </div>
    )
  }
}

export default AboutSlider