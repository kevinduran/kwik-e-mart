import React,{useContext} from 'react'
import './Cart.css'
import Apu from '../assets/apu.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

import{CartToggleContext} from '../Helper/Context'

function Cart() {

  const {cartOpen,setCartOpen} = useContext(CartToggleContext)

  return (
    <div className={cartOpen?'cart--open':'cart--closed'}>
        
        <div className='cart--open--top'>
            <div className='cart--open--button--close__container'>
                <button onClick={()=>setCartOpen(false)} className='cart--open--button--close'>
                    <div className='x--line x--line1'></div>
                    <div className='x--line x--line2'></div>
                </button>
            </div>
            <div className='cart--open--button--checkout__container'>
                <button className='cart--open--button--checkout'>
                <span className="cart--open--button--checkout--i"><FontAwesomeIcon icon={faArrowTurnRight}  /></span>
                <p className="cart--open--button--checkout--p">go to cart</p>
                </button>
            </div>
        </div>
        <div className='cart--open--bottom'>
            <div className='cart--open--bottom__item'>   
                <div className='cart--open__item--image__container'>
                    <img className='cart--open__item--image' src={Apu}/>
                </div>
                <div>

                </div>      
            </div>
        </div>
        
    </div>
  )
}

export default Cart