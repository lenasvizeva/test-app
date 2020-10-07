import React from 'react'
import css from './style.module.scss'

const Footer = () => {
  return (
    <div className={css.footer}>
      <span className='label2'>2005-2019</span>
      <span className='label2'>Сделано в <a href='#'>CreativePeople</a></span>
    </div>
  )
}

export default Footer