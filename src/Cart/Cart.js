import React from 'react'
import './Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <div className='cart'>
        <div className='cart--open'>
            <div className='cart--open--button--close__container'>
                <button className='cart--open--button--close'>
                    <div className='x--line x--line1'></div>
                    <div className='x--line x--line2'></div>
                </button>
            </div>
            <div className='cart--open--button--checkout__container'>
                <button className='cart--open--button--checkout'>
                    <FontAwesomeIcon icon={faArrowTurnRight}  />
                </button>
            </div>
            

        </div>
        
    </div>
  )
}

export default Cart