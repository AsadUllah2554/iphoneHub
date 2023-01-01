import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/notes/CartState'
import CartItem from '../CartItem'

function ShoppingCart() {

    const [btnText, setBtnText] = useState("Place Order")
    const { cartItems, addToCart, removeFromCart, emptyCart } = useContext(CartContext)
    const [shopText, setShopText] = useState("You have no items in your cart")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.key} item={item} />

    ))

    function placeOrder() {
        setBtnText("Ordering...")
        setTimeout(() => {
            emptyCart()
            setBtnText("Order Placed")
            setShopText("Order placed successfully")

        }, "2000")

    }
    return (

        <main className="cart-page">

            <h1>Check out</h1>
            {cartItemElements}
            {/* <p className="total-cost">Total: {totalCostDisplay}</p> */}

            {
                cartItems.length !== 0 ? <div className="order-button">
                    <button onClick={placeOrder} className="addtocart-btn">{btnText}</button></div> : <div>
                    <p>{shopText}</p>

                    <Link to="/" className='links '><h3><span>Back to shopping</span></h3></Link>
                </div>
            }

        </main>


    )
}

export default ShoppingCart


// <CartTable
// cartProducts={cartItems}/>
//  <h3 className="main-banner-sml-heading">{cartItems.length > 1 ? "":"Cart is currently empty"} 
