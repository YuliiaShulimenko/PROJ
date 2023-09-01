import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import s from "./Header.module.css"
import image from "../../images/1.png"

function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>
 <img src={image} alt="logo"  /></div>
 <div></div>
      <NavMenu/>
    </div>
  )
}

export default Header