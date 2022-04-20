import React from 'react'
import './Products.css'


function Products(productData) {



  return (
    <div className='product__card__container'>
      {productData.productData.map((product,index)=>{
        return (
            //because flexbox & width:25%.use index values of 4
            index<16 &&
            <div className='product__card'>
                <img src={product.imageLink}/>
                <p>{product.itemName}</p>
                <p>$ {product.price}</p>
                <button className='product__card--button'>add to cart</button>
            </div>
           
        )
      })}
    </div>
  )
}

export default Products