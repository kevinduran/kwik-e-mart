import React,{useContext} from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Nav.css'

import{CartToggleContext,CartItemDataContext, ProductsFilterContext,CategoryToggleContext} from '../Helper/Context'

function Nav() {
  const {categoryOpen,setCategoryOpen} = useContext(CategoryToggleContext)  
  const {cartOpen,setCartOpen} = useContext(CartToggleContext)
  const {cartItemData,setCartItemData} = useContext(CartItemDataContext)
  const {searchTerm,setSearchTerm} = useContext(ProductsFilterContext)

 const categories = [
    'IPA',
    'Stout & Porter',
    'Hard Seltzer',
    'Craft Beer',
    'Malt Liquor',
    'Lager',
    'Energy Drinks',
    'Water & Sparkling Water',
    'Wheat Beer',
    'Belgain-style Ale',
    'Import Beer',
    'Mixers & Ice',
    'Chips & Crackers',
    'Cigarettes - Packages',
    'Domestic Beer',
    'Chocolate',
    'Smokeless Tobacco',
    'Hard Kombucha',
    'Sodas',
    'Salty Snacks',
    'Rum',
    'Hard Lemonade',
    'Juice & Team & Coffee',
    'Hard Cider',
    'Vodka',
    'Pinot Grigio',
    'Flavored Whisky',
    'Cabernet Sauvignon',
    'Tequila & Mezcal',
    'Cigars',
    'Personal Care',
    'Scotch Whisky',
    'Hard Tea',
    'Other Whites',
    'Other Reds',
    'Fresh Groceries & Pantry',
    'Fortified Wine',
    'Home Essentials',
    'Medicine',
    'Ice Cream',
    'Puff Bars & Vapes',
    'Cookies & Pastries',
    'Candy & Sweets',
    'Sports Drinks',
    'Brandy',
    'Rye Whiskey',
    'Chardonnay',
    'Sauvignon Blanc',
    'Liqueur',
    'RosÃ©',
    'Sparkling Wine',
    'Ready-to-Drink Cocktails',
    'Champagne',
    'Merlot',
    'Bourbon',
    'Healthy Snacks',
    'Irish Whiskey',
    'Flavored & Fruit Wine',
    'Cognac',
    'American Whiskey',
    'Other Whisky',
    'Flavored Vodka',
    'Flavored Rum',
    'Canadian Whisky',
    'Other Liquor',
    'Hard Soda',
    'Blush Wine',
    'Red Blends',
    'Sparkling RosÃ©',
    'White Blends',
    'Sake',
    'Malbec',
    'Zinfandel',
    'Other Tobacco Products',
    'Cigarettes - Cartons',
    'Loose Leaf Tobacco',
    'Cocktail Kits'
]

  return (
    <nav>
        <div className="nav--top">
            <div className='logo__container'>
                <img className='logo__container--img' alt="store logo" src={logo}></img> 
            </div>
            <div className='input__container'>
                <input className='input__container--input' placeholder='search product name' onChange={event=>{return (setSearchTerm(event.target.value),console.log(searchTerm))}} ></input>
            </div>
            <div className='cart__container'>
                <button onClick={()=>setCartOpen(true)} className="cart__container--logo--button"><FontAwesomeIcon icon={faCartShopping} className='cart__container--logo--i' /></button>
            </div>
        </div>
        
        <div className='nav--bottom'>
            <button className="nav--bottom__button"  onClick={()=>setCategoryOpen(!categoryOpen)} >
                <p>search category name</p>
                <p><FontAwesomeIcon icon={faArrowDown}  /></p>
            </button>
        </div>
        <div className={categoryOpen?'category__modal--open':'category__modal--closed'}>
            <div className='category__modal--item__container'>
                {categories.map((name)=>{
                    return(
                        <button className='category__modal--item'>{name}</button>
                    )
                })}
            </div>   
        </div>
    </nav>
  )
}

export default Nav