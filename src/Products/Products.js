import React,{useContext} from 'react'
import './Products.css'

import{CartToggleContext, CartItemDataContext,ProductsFilterContext} from '../Helper/Context'
import { getValue } from '@testing-library/user-event/dist/utils'


function Products(productData) {

  const {cartOpen,setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm,setSearchTerm} = useContext(ProductsFilterContext)


  // val.itemName.toLowerCase().incudes(searchTerm.toLowerCase())

  return (
    <div className='product__card__container'>
      {productData.productData.filter((val)=> {
        if(searchTerm == ''){
          console.log(productData.spice(0,3))
          return val

        }
      }).map((product,index)=>{
        return (
            //because flexbox & width:25%.use index values of 4
            index<28 &&
            <div className='product__card'>
              <div className='product__card--section__container product__card--image__container'>
                <img src={product.imageLink}/>
              </div>
              <div className='product__card--section__container product__card--info__container'>
                <p>{product.itemName}</p>
  
                <p className='product__card--info--price' >$ {product.price}</p>
              </div>
              <div className='product__card--section__container product__card--button__container'>
                <button 
                  onClick={()=>{
                     return ( 
                        setCartOpen(true),
                        setCartItemData([...cartItemData,{itemName:product.itemName, price:product.price, imageLink:product.imageLink, itemCategory:product.itemCategory}]) 
                      )}} className='product__card--button'>
                add to cart</button>
              </div>
            </div>
           
        )
      })}
    </div>
  )
}

export default Products