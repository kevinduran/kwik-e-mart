import React,{useState} from 'react'
import './App.css';
import ProductData from './products.json'
import Nav from './Navigation/Nav';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer'

import {CartToggleContext,CartItemQuantityContext,CartItemDataContext , ProductsFilterContext,ProductsCategoryContext, CategoryToggleContext, ArrowPositionContext, CategoryMenuNameContext, CategoryTermAmountContext,ProductCardAmountInfoContext,CartTotalPriceContext} from './Helper/Context'
function App() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [arrowPosition, setArrowPosition] = useState(true);
  const [categoryMenuName, setCategoryMenuName] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemQuantity,setItemQuantity] = useState(1);
  const [cartItemData, setCartItemData] =  useState([]);
  const [categoryTerm, setCategoryTerm] = useState('');
  const [categoryTermAmount,setCategoryTermAmount] = useState(0);
  const [cartTotalPrice,setCartTotalPrice] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productCardAmountInfo,setProductCardAmountInfo] = useState(false)
  return (
    <ProductsCategoryContext.Provider value={{categoryTerm,setCategoryTerm}}>
    <ProductsFilterContext.Provider value={{searchTerm,setSearchTerm}}>
    <ProductCardAmountInfoContext.Provider value={{productCardAmountInfo,setProductCardAmountInfo}}>
    <CategoryTermAmountContext.Provider value={{categoryTermAmount,setCategoryTermAmount}}>  
    <CartTotalPriceContext.Provider value={{cartTotalPrice,setCartTotalPrice}}>
    <CartItemDataContext.Provider value={{cartItemData,setCartItemData}}>
    <CategoryToggleContext.Provider value={{categoryOpen, setCategoryOpen}}>
    <CategoryMenuNameContext.Provider value={{categoryMenuName,setCategoryMenuName}}>
    <ArrowPositionContext.Provider value={{arrowPosition, setArrowPosition}}>
    <CartToggleContext.Provider value={{cartOpen, setCartOpen}}>
    <CartItemQuantityContext.Provider value={{itemQuantity,setItemQuantity}}>
        <div className="App">
          <Nav />
          <Cart />
          <Header/>
          <Products productData={ProductData} />
          <Footer/>
        </div>  
     </CartItemQuantityContext.Provider> 
     </CartToggleContext.Provider> 
     </ArrowPositionContext.Provider> 
     </CategoryMenuNameContext.Provider>  
     </CategoryToggleContext.Provider>
     </CartItemDataContext.Provider>
     </CartTotalPriceContext.Provider>
     </CategoryTermAmountContext.Provider>
     </ProductCardAmountInfoContext.Provider>  
     </ProductsFilterContext.Provider>
     </ProductsCategoryContext.Provider>
  );
}

export default App;


