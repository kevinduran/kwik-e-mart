import React,{useState} from 'react'
import './App.css';
import ProductData from './products.json'
import Nav from './Navigation/Nav';
import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';

import {CartToggleContext} from './Helper/Context'

function App() {

  const [cartOpen, setCartOpen] = useState(false);

 

  return (
      <CartToggleContext.Provider value={{cartOpen, setCartOpen}}>
        <div className="App">
          <Nav/>
          <Cart/>
          <Header/>
          <Products productData={ProductData} />
        </div>  
      </CartToggleContext.Provider>
    
  );
}

export default App;


