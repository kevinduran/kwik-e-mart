import React,{useContext} from 'react'
import './Cart.css'
import empty from '../assets/cart_empty.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import{CartToggleContext, CartItemQuantityContext, CartItemDataContext,CartTotalPriceContext} from '../Helper/Context'

function Cart() {

  const {cartOpen,setCartOpen} = useContext(CartToggleContext)
  const {itemQuantity,setItemQuantity} = useContext(CartItemQuantityContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {cartTotalPrice,setCartTotalPrice} = useContext(CartTotalPriceContext)

  const handleBrokenImage = (event) => {
    event.target.src = 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg'
  }

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
            
            {

            cartItemData.length > 0 ? cartItemData.map((data)=>{

                return (
                    <div className='cart--open--bottom__item'>   
                            <div className='cart--open__item--image__container'>
                                <img className='cart--open__item--image' src={data.imageLink} onError={handleBrokenImage} alt={data.itemName}/>
                            </div>
                            <div className='cart--open__item--info__container'>
                                <div className='cart__item--info--top'>
                                    <div className='cart__item--info--top--left'>
                                        <p>{data.itemName}</p>
                                    </div>
                                    <div className='cart__item--info--top--right'>
                                        <button 
                                            onClick={()=>{
                                                let newList = cartItemData.filter((item)=>{
                                                        return (item.itemName !== data.itemName)
                                                })
                                                // newList.map((newPrice)=>{
                                                //     return (setCartTotalPrice([newPrice.price]))
                                                // })
                                                setCartItemData(newList)





                                            //ABOVE NEEDS FIXING FOR NEXT PROBLEM


                                            }} 
                                            className='cart__item--close__button'>
                                            <span className="cart__item--close__button--icon"><FontAwesomeIcon icon={faTrashCan}  /></span>
                                        </button>
                                    </div>
                                </div>
                                <div className='cart__item--info--bottom'>
                                    <div className='cart__item--quantity__container'>
                                        <div className="cart__item--quantity--button__container">
                                            <button onClick={()=> setItemQuantity(itemQuantity-1)} className='cart__item--quantity--button'>-</button>
                                            <p className='cart__item--quantity--total'>{itemQuantity}</p>
                                            <button onClick={()=> setItemQuantity(itemQuantity+1)} className='cart__item--quantity--button'>+</button>                          
                                        </div>
                                    </div>
                                    <div className='cart__item--total__container'>
                                        <div className='cart__item--total'>
                                            <p className='cart__item--total--number'>${(data.price * itemQuantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            
                    </div>
                )
                
            }) : <div><h2>Your cart is empty sir.</h2><img className='cart--empty--image' src={empty}/></div>
            }
            {/* <div className='cart__total__container'>
                    <h3 className='cart__total'>Total : <span className='blood'>${cartTotalPrice.reduce((a,b)=>a+b,0)}</span></h3>
            </div>    */}
        </div>
        
    </div>
  )
}

export default Cart