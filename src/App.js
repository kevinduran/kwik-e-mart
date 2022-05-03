import React,{useState} from 'react'
import './App.css';
import ProductData from './products.json'
import Nav from './Navigation/Nav';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer'

import {CartToggleContext,CartItemQuantityContext,CartItemDataContext , ProductsFilterContext,ProductsCategoryContext, CategoryToggleContext} from './Helper/Context'
function App() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemQuantity,setItemQuantity] = useState(1);
  const [cartItemData, setCartItemData] =  useState([]);
  const [categoryTerm, setCategoryTerm] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ProductsCategoryContext.Provider value={{categoryTerm,setCategoryTerm}}>
    <ProductsFilterContext.Provider value={{searchTerm,setSearchTerm}}>
    <CartItemDataContext.Provider value={{cartItemData,setCartItemData}}>
    <CategoryToggleContext.Provider value={{categoryOpen, setCategoryOpen}}>
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
     </CategoryToggleContext.Provider> 
     </CartItemDataContext.Provider>
     </ProductsFilterContext.Provider>
     </ProductsCategoryContext.Provider>
  );
}

export default App;


