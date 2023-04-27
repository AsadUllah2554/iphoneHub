// In this file we will create all states we want to share in the app
import { useState,createContext } from "react";
import products from "../../Components/productsData";

export const CartContext = createContext();

export const CartProvider = props =>{

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < products.length + 1; i++) {
          cart[i] = 0;
        }
        return cart;
      };

    const [cartItems,setCartItems] = useState(getDefaultCart())

    function addToCart(itemId){
        setCartItems(prevItem=> ({...prevItem, [itemId]: prevItem[itemId] + 1 }))
    }

    function removeFromCart(itemId){
        setCartItems(prevItem=> ({...prevItem, [itemId]: prevItem[itemId] - 1 }))
    }

    function calculateTotalAmount(){
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
            let itemInfo = products.find((product)=> product.key === Number(item) )
        
            totalAmount += cartItems[item] * itemInfo.price
        }
           
        }
        return totalAmount
    }

    function emptyCart(){
        setCartItems(getDefaultCart())
    }
     
    // console.log(cartItems)
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart,calculateTotalAmount}}>
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


/// Old cart functionality 
// const [cartItems,setCartItems] = useState([])

// function addToCart(item){
//     setCartItems(prevItems=> [...cartItems, item])
// }

// function removeFromCart(id){
//     setCartItems(prevItems=> prevItems.filter(item=> item.id !== id))
// }

// function calculateTotalAmount(){
    
// }

// function emptyCart(){
//     setCartItems([])
// }
 
// return(
//     <CartContext.Provider value={{cartItems,addToCart,removeFromCart,emptyCart}}>
//         {props.children}
//     </CartContext.Provider>
// )

// }



