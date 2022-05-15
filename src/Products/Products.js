import React,{useContext} from 'react'
import './Products.css'

import{CartToggleContext, CartItemDataContext,ProductsFilterContext,ProductsCategoryContext,CategoryTermAmountContext,ProductCardAmountInfoContext,CartTotalPriceContext,EmptyProductsDefaultContext} from '../Helper/Context'

function Products(productData) {

  const {setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm} = useContext(ProductsFilterContext)
  const {categoryTerm} = useContext(ProductsCategoryContext)
  const {categoryTermAmount,setCategoryTermAmount} = useContext(CategoryTermAmountContext)
  const {productCardAmountInfo} = useContext(ProductCardAmountInfoContext)
  const {cartTotalPrice, setCartTotalPrice} = useContext(CartTotalPriceContext)
  const {emptyProductsDefault, setEmptyProductsDefault} = useContext(EmptyProductsDefaultContext)
   
      const handleBrokenImage = (event) => {
        event.target.src = 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg'
      }
  
      let myProductData= productData.productData;
      let myProductArray = []

  return (
    <div className='product__card__container'>
      {productCardAmountInfo && <p className='product__card__container--info'>* we found {categoryTermAmount} total {categoryTerm} products</p>   }
      {emptyProductsDefault && <h2 className='blood'>hmmm we could not find any ' {searchTerm} '...</h2>}
      {     
      // eslint-disable-next-line
       myProductData.filter((val)=> {        
        if(searchTerm === ''){
          setEmptyProductsDefault(false)  

          return val
        }else if (val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ){   
          setEmptyProductsDefault(false)  
          return val
        }else if (val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) === false){
          setEmptyProductsDefault(true);
        }
          // eslint-disable-next-line
      }).filter((val)=> {
        if(categoryTerm === ''){
          setEmptyProductsDefault(false)  

          return val
        }else if (val.itemCategory.toLowerCase().includes(categoryTerm.toLowerCase()) ){
          myProductArray.push(val)
          setCategoryTermAmount(myProductArray.length)   
          //NEED TO SOMEHOW SET TOTAL NUMBER OF CATEGORY ITEMS HERE
          
          return val
        }
  // eslint-disable-next-line
      }).map((product,index)=>{
          return (
               
            index < 16 &&
            
            <div className='product__card' key={product.itemnum}>
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
                        //"itemQuantity:1 IS THE KEY TO SOLVING THE CART QUANTITY PROBLEM"
                        setCartItemData([...cartItemData,{itemName:product.itemName, price:product.price, imageLink:product.imageLink, itemCategory:product.itemCategory, itemQuantity:1}]), 
                        setCartTotalPrice([...cartTotalPrice,product.price])
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