import React,{useContext} from 'react'
import './Cart.css'
import Apu from '../assets/apu.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

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
                <p className="cart--open--button--checkout--p">go to checkout</p>
                </button>
            </div>
        </div>
        <div className='cart--open--bottom'>
            {/* below should be a component */}

            <div className='cart--open--bottom__item'>   
                <div className='cart--open__item--image__container'>
                    <img className='cart--open__item--image' src={Apu}/>
                </div>
                <div className='cart--open__item--info__container'>
                    <div className='cart__item--info--top'>
                        <div className='cart__item--info--top--left'>
                            <p>Weihenstephan Hefe-Weiss 6 Pack 12oz Bottles</p>
                        </div>
                        <div className='cart__item--info--top--right'>
                            <button className='cart__item--close__button'>
                                <span className="cart__item--close__button--icon"><FontAwesomeIcon icon={faTrashCan}  /></span>
                            </button>
                        </div>
                    </div>
                    <div className='cart__item--info--bottom'>
                        <div className='cart__item--quantity__container'>
                            <div className="cart__item--quantity--button__container">
                                <button className='cart__item--quantity--button'>-</button>
                                <p className='cart__item--quantity--total'>0</p>
                                <button className='cart__item--quantity--button'>+</button>                          
                            </div>
                           </div>
                        <div className='cart__item--total__container'>
                            <div className='cart__item--total'>
                                <p className='cart__item--total--number'>$69</p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
        
    </div>
  )
}

export default Cart