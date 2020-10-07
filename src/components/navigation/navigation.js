import React from 'react'
import css from './style.module.scss'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navigation = () => {
  return (
    <ul className={css.navigation}>
      <li>
        <Link className="label" to="anchor1" smooth={true} duration={1000}>
          Основная информация
        </Link>
      </li>
      <li>
        <Link className="label" to="anchor2" smooth={true} duration={1500}>
          Новости
        </Link>  
      </li>
    </ul>
  )
}

export default Navigation