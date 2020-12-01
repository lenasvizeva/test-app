import React from 'react'
import css from './style.module.scss'
import cn from 'classnames'

const Menu = ({menuOpen}) => {
  const visible = menuOpen === true ? 'visible' : ''

  return (
    <div className={cn(css.menuContainer, visible)}> 
      <ul className={css.menu}>
        <li><a href="#">Главная</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Новости</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
  )
}

export default Menu