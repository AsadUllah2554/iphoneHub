import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/notes/CartState'
import CartItem from '../CartItem'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase-config'
import products from '../productsData'

function ShoppingCart() {

    const { cartItems,  emptyCart ,calculateTotalAmount} = useContext(CartContext)
    const cartProductsRef = collection(db,"cartProducts") 
    const [btnText, setBtnText] = useState("Place Order")
    const totalAmount = calculateTotalAmount()
    const [shopText, setShopText] = useState("You have no items in your cart")
   
    const cartItemElements = products.map(item => {
        if (cartItems[item.key] !== 0 ){
            return <CartItem key={item.key} item={item} />
        }
        
     } )

    const sendDatatoFirestore = async ()=>{
    console.log(cartItems)
        await addDoc(cartProductsRef,{
            product:cartItems,
        })
    }

    function placeOrder() {
        setBtnText("Ordering...")
        setTimeout(() => {
            sendDatatoFirestore()
            emptyCart()
            setBtnText("Order Placed")
            setShopText("Order placed successfully")
            
        }, "2000")

    }
    return (

        <main className="cart-page">

            <h1>Check out</h1>
            {cartItemElements}
          
             {
               totalAmount !== 0 ? 
               <div className="order-button">
                <h4>Total amount: {totalAmount} RS </h4>
                <button onClick={placeOrder} className="addtocart-btn">{btnText}</button></div> :
                
                <div>
                    <p>{shopText}</p>
                    <Link to="/" className='links '><h3><span>Back to shopping</span></h3></Link>
                </div>
            }

        </main>
    )
}

export default ShoppingCart


