import React from 'react'
import s from "./NavMenu.module.css"
import { Link } from 'react-router-dom'

function NavMenu() {
  return (
    <div className={s.links}>
    <Link to="/">Main Page</Link>
    <Link to="/products/all">All products</Link>
    <Link to="/products/sales">All sales</Link>


{/* TEST */}
    <Link to="/categories/all">All categ</Link>

    
</div>
  )
}

export default NavMenu