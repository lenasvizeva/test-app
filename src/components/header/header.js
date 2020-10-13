import React, { useState } from 'react'
import css from './style.module.scss'
import logo from '../../images/logo.svg'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import cn from 'classnames'

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 0.3s ease-in 1s'
  })

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y
  
      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 0.3s ${isVisible ? 'ease-in 0.3s' : 'ease-out 0.3s'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)'
      }
  
      if (JSON.stringify(shouldBeStyle) != JSON.stringify(headerStyle)) 
        return setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

  return (
    <div className={css.header} style={{ ...headerStyle }}>
      <button className={cn(css.menuBtn, 'btn --round coral')}></button>
      <img src={logo} className={css.logo} />
      <div className={css.bttnGroup}>
        <button className={cn(css.langBtn, 'btn --round light-blue')}>En</button>
        <button className={cn(css.callBtn, 'btn --round primary-color')}></button>
      </div>
    </div>
  )
}

export default Header