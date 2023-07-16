import React from 'react'
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
          <Link to="/">MyShop</Link>
      </div>

      <div className='links'>
          <Link to="/" className='active' id='home'>Home</Link>
          <Link to="/cart" className='' id='cart'><ShoppingCart size={30}/></Link>
      </div>
    </div>
  )
}

export default Navbar
