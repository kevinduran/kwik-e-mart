import React,{useContext} from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ProductData from '../products.json'

import './Nav.css'

import{CartToggleContext,CartItemDataContext, ProductsFilterContext} from '../Helper/Context'

function Nav() {

  const {cartOpen,setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm,setSearchTerm} = useContext(ProductsFilterContext)


  return (
    <nav>
        <div className='logo__container'>
            <img className='logo__container--img' alt="store logo" src={logo}></img> 
        </div>
        <div className='input__container'>
            <input className='input__container--input' placeholder='search products' onChange={event=>{return (setSearchTerm(event.target.value),console.log(searchTerm))}} ></input>
        </div>
        <div className='cart__container'>
            <button onClick={()=>setCartOpen(true)} className="cart__container--logo--button"><FontAwesomeIcon icon={faCartShopping} className='cart__container--logo--i' /></button>
        </div>
        </nav>
  )
}

export default Nav