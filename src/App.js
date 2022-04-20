import React,{useEffect} from 'react'
import './App.css';
import ProductData from './products.json'
import Nav from './Navigation/Nav';
import Header from './Header/Header';
import Products from './Products/Products';


function App() {
  

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Products productData={ProductData}/>
      
    </div>
  );
}

export default App;


