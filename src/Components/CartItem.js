import React from "react"
import { useContext } from "react"
import { CartContext } from "../Context/notes/CartState"

function CartItem(props) {

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)
    return(

        <div className="cart">
        <div className="cartItem">
        <img src={props.item.img} width="180px" height="170px"  />
        <div className="description">
            <p><b>{props.item.name}</b></p>
            <p>Price: {`${props.item.price} RS`}</p>
            <div className="countHandler">
        <button className="quantityBtns" onClick={()=>addToCart(props.item.key)}>+</button>
        <span className="quantity">Quantity: {cartItems[props.item.key]}</span>
        <button className="quantityBtns" onClick={()=>removeFromCart(props.item.key)}>-</button>
        </div>
        </div> 
        </div>
        </div>
    )

}

export default CartItem
