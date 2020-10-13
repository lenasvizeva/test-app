import React, { Component } from 'react'
import Slider from 'react-slick'
import './gallery.scss'

class GallerySlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      verticalSwiping: false,
    }

    return (
      <div className='gallery-slider'>
        <Slider {...settings} data={this.props} >
          {
            this.props.data.map((item) => {
              return (
                <div className='item__caption' key={item.id}>
                  <span className='item__title label2'>{item.title}</span>
                  <span className='item__subtitle'>{item.subtitle}</span>
                  <p className='item__text'>{item.text}</p>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default GallerySlider