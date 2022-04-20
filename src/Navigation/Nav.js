import React from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Nav.css'



function Nav() {
  return (
    <nav>
        <div className='logo__container'>
            <img className='logo__container--img' alt="store logo" src={logo}></img> 
        </div>
        <div className='input__container'>
            <input className='input__container--input' placeholder='search products'></input>
            <button className='input__container--button' type="button">search</button>
        </div>
        <div className='cart__container'>
            <span class="cart__container--logo"><FontAwesomeIcon icon={faCartShopping} className='cart__container--logo--i' /></span>
        </div>
        </nav>
  )
}

export default Nav