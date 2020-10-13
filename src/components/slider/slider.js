import React, { Component } from 'react'
import Slider from 'react-slick'
import sliderPic from '../../images/slider_pic.jpg'
import css from './style.module.scss'
import cn from 'classnames'

const slides = [
  {
    id: 1,
    imgSrc: sliderPic
  },
  { 
    id: 2,
    imgSrc: sliderPic
  },
  {
    id: 3,
    imgSrc: sliderPic
  },
  {
    id: 4,
    imgSrc: sliderPic
  },
  {
    id: 5,
    imgSrc: sliderPic
  }
]

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
  state = {
    currentItem: 1
  }

  render() {
    const totalSlides = slides.length

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            dotsClass: 'slick-dots custom-dots'
          }
        }
      ],
      afterChange: (currentSlide) => {
        this.setState({ currentItem: currentSlide + 1 })
      }
    }
    return (
      <div className={css.slider}>
        <Slider {...settings}>
          {
            slides.map((slide) => {
              return (
                <div key={slide.id}>
                  <img src={slide.imgSrc} />
                </div>
              )
            }) 
          }
        </Slider>
        <div className={css.panel}>
        <span className={css.slidesCounter}> {this.state.currentItem} / {totalSlides} </span>
          <span className={cn(css.sliderLabel, 'label2')}>Подпись к блоку может быть опциональной. 
                Можно вводить различные сноски и ссылки для  блоков с фотографиями и видео</span>
          
        </div>
      </div>
    )
  }
}

export default AboutSlider