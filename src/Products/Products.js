import React,{useContext} from 'react'
import './Products.css'

import{CartToggleContext} from '../Helper/Context'


function Products(productData) {

  const {cartOpen,setCartOpen} = useContext(CartToggleContext)


  return (
    <div className='product__card__container'>
      {productData.productData.map((product,index)=>{
        return (
            //because flexbox & width:25%.use index values of 4
            index<64 &&
            <div className='product__card'>
              <div className='product__card--section__container product__card--image__container'>
                <img src={product.imageLink}/>
              </div>
              <div className='product__card--section__container product__card--info__container'>
                <p>{product.itemName}</p>
  
                <p className='product__card--info--price' >$ {product.price}</p>
              </div>
              <div className='product__card--section__container product__card--button__container'>
                <button onClick={()=>setCartOpen(true)} className='product__card--button'>add to cart</button>
              </div>
            </div>
           
        )
      })}
    </div>
  )
}

export default Products