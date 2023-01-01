// In this file we will create all states we want to share in the app
import { useState,createContext } from "react";

export const CartContext = createContext();

export const CartProvider = props =>{

    const [cartItems,setCartItems] = useState([])

    function addToCart(item){
        setCartItems(prevItems=> [...cartItems, item])
    }

    function removeFromCart(id){
        setCartItems(prevItems=> prevItems.filter(item=> item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }
     
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart}}>
            {props.children}
        </CartContext.Provider>
    )

}



// // In this file we will create all states we want to share in the app
// import { useState,createContext } from "react";

// export const CartContext = createContext();

// export const CartProvider = props =>{

//     const [cartState,updateCartState] = useState([{
//         key: 0,
//         name:"",
//         price: "",
//         img: '',
//         category: ""
//     }])

//     function addToCart(){

//     }

//     function removeFromCart(){
        
//     }
     
//     return(
//         <CartContext.Provider value={[cartState,updateCartState]}>
//             {props.children}
//         </CartContext.Provider>
//     )

// }



