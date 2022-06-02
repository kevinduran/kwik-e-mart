import React, {useContext} from 'react'
import './Checkout.css'


import{CheckoutToggleContext} from '../Helper/Context'

function Checkout() {

  const {checkoutOpen, setCheckoutOpen} = useContext(CheckoutToggleContext)


  return (
    <div className={checkoutOpen ? 'checkout__container--open' : 'checkout__container--closed' }>
        <div className='checkout--open--button--close__container'>
          <button onClick={()=> setCheckoutOpen(false)}  className='checkout--open--button--close'>
            <div className='x--line x--line1'></div>
            <div className='x--line x--line2'></div>
          </button>
        </div>
        <div className='checkout--open--text__container'>
            <h2 className='checkout--text'>KWIK-E-MART is a demo site.</h2>
            <h2 className='checkout--text'>You can not buy anything.</h2> 
            <h2 className='checkout--text'>Go away.</h2>
        </div>
    </div>
  )
}

export default Checkout