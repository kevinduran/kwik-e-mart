import React,{useContext} from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ProductData from '../products.json'

import './Nav.css'

import{CartToggleContext,CartItemDataContext, ProductsFilterContext,CategoryToggleContext} from '../Helper/Context'

function Nav() {
  const {categoryOpen,setCategoryOpen} = useContext(CategoryToggleContext)  
  const {cartOpen,setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm,setSearchTerm} = useContext(ProductsFilterContext)


  return (
    <nav>
        <div className="nav--top">
            <div className='logo__container'>
                <img className='logo__container--img' alt="store logo" src={logo}></img> 
            </div>
            <div className='input__container'>
                <input className='input__container--input' placeholder='search product name' onChange={event=>{return (setSearchTerm(event.target.value),console.log(searchTerm))}} ></input>
            </div>
            <div className='cart__container'>
                <button onClick={()=>setCartOpen(true)} className="cart__container--logo--button"><FontAwesomeIcon icon={faCartShopping} className='cart__container--logo--i' /></button>
            </div>
        </div>
        
        <div className='nav--bottom'>
            <button className="nav--bottom__button"  onClick={()=>setCategoryOpen(!categoryOpen)} >
                <p>search category name</p>
                <p><FontAwesomeIcon icon={faArrowDown}  /></p>
            </button>
        </div>
        <div className={categoryOpen?'category__modal--open':'category__modal--closed'}>
            
        </div>
    </nav>
  )
}

export default Nav