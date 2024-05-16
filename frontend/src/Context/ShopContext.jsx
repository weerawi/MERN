import React, { createContext, useState } from 'react'
import all_product from '../Assets/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for(let index=0 ; index < 300+1 ; index++){
    cart[index] = 0;
  }

  return cart;
}

const ShopContextProvider = (props) => { 
  // const [all_product,setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());  

  const addToCart = (itemId) => {
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for(const item in cartItems){
      if(cartItems[item]> 0){
        let itemInfo = all_product.find((e)=>e.id ===Number(item))
        totalAmount += itemInfo.new_price*cartItems[item];
      }
    }

    return totalAmount;

  }
  const getTotalCartItems = () => {
    let totalItems = 0;

    for(const item in cartItems){
      if(cartItems[item]> 0){
        totalItems += cartItems[item];
      }
    }

    return totalItems;

  }

  const deleteFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:0}));
  }


  const contextValue = {
     
    all_product, 
    cartItems,
    removeFromCart,
    addToCart,
    deleteFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    } ;
    
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider