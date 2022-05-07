import React,{useContext} from 'react'
import './Products.css'

import{CartToggleContext, CartItemDataContext,ProductsFilterContext,ProductsCategoryContext} from '../Helper/Context'

function Products(productData) {

  const {setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm} = useContext(ProductsFilterContext)
  const {categoryTerm} = useContext(ProductsCategoryContext)
   
      const handleBrokenImage = (event) => {
        event.target.src = 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg'
      }
  
  

  return (
    <div className='product__card__container'>
      {productData.productData.filter((val)=> {
        if(searchTerm === ''){
          return val
        }else if (val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ){
          return val
        }else{
          return val
        }
        
        
      }).filter((val)=> {
        if(categoryTerm === ''){
          return val
        }else if (val.itemCategory.toLowerCase().includes(categoryTerm.toLowerCase()) ){
          return val
        }else{
          return val
        }
  
      }).map((product,index)=>{
        
      
          return (
                    
            index<16 && <div className='product__card'>
              <div className='product__card--section__container product__card--image__container'>
                <img
                  className='product__card--image'
                  src={product.imageLink }
                  onError={handleBrokenImage} 
                  alt={product.itemName} 
                />
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
                        setCartItemData([...cartItemData,{itemName:product.itemName, price:product.price, imageLink:product.imageLink, itemCategory:product.itemCategory, itemQuantity:1}]) 
                      )}} className='product__card--button'>
                add to cart</button>
              </div>
            </div>         
           
        )
        
      })
      }
    </div>
  )
}

export default Products