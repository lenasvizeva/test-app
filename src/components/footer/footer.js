import React from 'react'
import css from './style.module.scss'

const Footer = () => {
  return (
    <div className={css.footer}>
      <p className='label'>2005—2019 © «Метро»</p>
      <p className='label'>Сделано в <a href='#'>CreativePeople</a></p>
    </div>
  )
}

export default Footer