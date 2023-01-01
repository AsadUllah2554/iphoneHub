import '../components.css';

function ProductQuantity(props){

    return(
        <>
        <button className='counterBtn' onClick={props.increase}>+</button>
        <h5>{props.quantity}</h5>
        <button className='counterBtn' onClick={props.decrease}>-</button>
        </>
    )
}

export default ProductQuantity;