import React from "react";
import { NavLink } from "react-router-dom";
import style from './style.module.css'

const MenuNavigation = () => {
  return (
    <nav className={style.menu}>
      <div className={style.menuItem}>
        <NavLink to={'/homepage'}>STARS WARS</NavLink>
      </div>
    </nav>
  )
}
export default MenuNavigation