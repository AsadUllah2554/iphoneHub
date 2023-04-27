import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import '../components.css';
import products from './productsData'

function ProductPage(props) {
    const location = useLocation();
    console.log(location)
    const productData = location.state;
    console.log(productData)
    const productId = useParams();
    console.log(productId)
    const thisProduct = products.find(product => product.key == productId.id)
   
    return (
    location.state ? 
     
 <div className='single-productpage'>

 <div >
 <img src={productData.img.substring(1)}
  alt="phone" className="single-productpage--img" />
     <div class="menu-text">
         <div class="menu-left">
 <h4 className="single-product-heading">{productData.name}</h4>
 <p className="sml-heading"> From Rs.{productData.price}</p>
 <p className="main-banner-sml-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
     Suspendisse euismod scelerisque tellus id molestie.
      Donec imperdiet sit amet ante sodales imperdiet. </p>
 
 <button className="addtocart-btn">
     Add to cart
 </button>
         </div>
     </div>
 </div>
 </div>
    
    :

        <div className='single-productpage'>
            <div >
       
            <img src={thisProduct.img.substring(1)}
             alt="phone" className="single-productpage--img" />
                <div class="menu-text">
                    <div class="menu-left">
            <h4 className="single-product-heading">{thisProduct.name}</h4>
            <p className="sml-heading"> From Rs.{thisProduct.price}</p>
            <p className="main-banner-sml-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse euismod scelerisque tellus id molestie.
                 Donec imperdiet sit amet ante sodales imperdiet. </p>

            <button className="addtocart-btn" onClick={() =>
            props.handleClick(props.id, props.img, props.name, props.price, props.category)}>
                Add to cart
            </button>
                    </div>
                </div>
            </div>
      
        
        </div>
    )
}

export default ProductPage;