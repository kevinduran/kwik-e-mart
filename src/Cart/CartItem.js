import React from 'react'

function CartItem() {
  return (
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
                        <button onClick={()=> setItemQuantity(itemQuantity-1)} className='cart__item--quantity--button'>-</button>
                        <p className='cart__item--quantity--total'>{itemQuantity}</p>
                        <button onClick={()=> setItemQuantity(itemQuantity+1)} className='cart__item--quantity--button'>+</button>                          
                    </div>
                </div>
                <div className='cart__item--total__container'>
                    <div className='cart__item--total'>
                        <p className='cart__item--total--number'>${10*itemQuantity}</p>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default CartItem