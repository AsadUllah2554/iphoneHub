import { Link } from 'react-router-dom';
import '../components.css';
import { useContext } from 'react';
import {CartContext} from '../Context/notes/CartState'

function ProductCard(props) {

    const {cartItems} = useContext(CartContext)
    const cartItemQuantity = cartItems[props.id]
    return (
    <div className="item">
        <Link to={`/singleproduct/${props.id}`} className='links'>
             <img src={props.img}
                        alt="phone" className="images" />
                    <p className="md-heading">{props.name}</p>
                    <p className="sml-heading"> From Rs.{props.price}</p>
        </Link>
     <button className="addtocart-btn" 
     onClick={() => props.addToCart(props.id)}>Add to cart {cartItemQuantity > 0 &&<>({cartItemQuantity})</> }</button>
    </div>
    )
}

export default ProductCard;
