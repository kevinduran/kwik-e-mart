import React,{useState} from 'react'
import './App.css';
import ProductData from './products.json'
import Nav from './Navigation/Nav';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer'

import {CartToggleContext,CartItemQuantityContext,CartItemDataContext , ProductsFilterContext} from './Helper/Context'
function App() {

  const [cartOpen, setCartOpen] = useState(false);
  const [itemQuantity,setItemQuantity] = useState(1);
  const [cartItemData, setCartItemData] =  useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ProductsFilterContext.Provider value={{searchTerm,setSearchTerm}}>
    <CartItemDataContext.Provider value={{cartItemData,setCartItemData}}>
    <CartToggleContext.Provider value={{cartOpen, setCartOpen}}>
    <CartItemQuantityContext.Provider value={{itemQuantity,setItemQuantity}}>
        <div className="App">
          <Nav/>
          <Cart />
          <Header/>
          <Products productData={ProductData} />
          <Footer/>
        </div>  
     </CartItemQuantityContext.Provider> 
     </CartToggleContext.Provider> 
     </CartItemDataContext.Provider>
     </ProductsFilterContext.Provider>
  );
}

export default App;


