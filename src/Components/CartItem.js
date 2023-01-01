import React,{useContext} from "react"

function CartItem(props) {
    return(
        <div className="cart-item">
        {/* <i className={deleteIconClass}
         onClick={()=>removeFromCart(props.item.key)}
         ></i> */}
        <img src={props.item.img} width="180px" height="170px" alt="product-pictures" />
        <h3>{props.item.name}</h3>
        <p>{`${props.item.price} RS`}</p>
    </div>
    )

}

export default CartItem