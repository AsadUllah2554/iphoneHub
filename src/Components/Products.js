import '../components.css';
import products from './productsData'
import Card from './ProductCard'
import {useContext} from 'react';
import {CartContext} from '../Context/notes/CartState'

function Products() {

    const { addToCart} = useContext(CartContext)
    
    return (
        
        <div className="products-mainpage">
            <h1 className="products-category-heading"> Certified Apple iPhones, Watches, AirPods & More! </h1>
            <h4 className="sml-heading ">
                Certified by our team of experts, backed with IPHONE HUB's 1 Year Warranty!
            </h4>
            <div className="products">
                <h1 className="md-heading">iPhones</h1>
                <div className="product ">
                {
                    products.map((product)=>{
                      if(product.category === "iphone") 
                      {return(
                        <div  className="margin" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            item={product}
                            category={product.category}
                            addToCart={addToCart}/>
                        </div>
                        )
                    }})
                }
                
                </div>
                <h1 className="md-heading">Apple Watches</h1>
                <div className="watches product">
                {
                    products.map((product)=>{
                      if(product.category === "watches") 
                      {return(
                        <div  className="margin" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            item={product}
                            category={product.category}
                            addToCart={addToCart}/>
                            </div>
                        )
                    }})
                }
                   
                </div>
                <h1 className="md-heading">Airpods</h1>
                <div className="airpods product">
                {
                    products.map((product)=>{
                      if(product.category === "airpods") 
                      {return(
                        <div  className="margin" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            item={product}
                            category={product.category}
                            addToCart={addToCart}/>
                             </div>
                        )
                    }})
                }        
                </div>
            </div>
        </div>

    )
}

export default Products;




// const [cartProducts,updatecartProducts] = useContext(CartContext)
    
    
//     function getProduct(id,img,name,price,category){
        
//         updatecartProducts([
//             ...cartProducts,  
//             {
//                 key:id,
//                 name:name,
//                 price: price,
//                 img: img,
//                 category: category,
//             }
//         ]) 
//     }

//     return (
        
//         <div className="products-mainpage">
//             <h1 className="products-category-heading"> Introducing Certified Apple iPhones, Watches, AirPods & More! </h1>
//             <h4 className="sml-heading ">
//                 Certified by our team of experts, backed with IPHONE HUB's 1 Year Warranty!
//             </h4>
//             <div className="products">
//                 <h1 className="md-heading">iPhones</h1>
//                 <div className="product ">
//                 {
//                     products.map((product)=>{
//                       if(product.category === "iphone") 
//                       {return(
//                         <div  className="four-box" key={product.key}>
//                             <Card
//                             key={product.key}
//                             id={product.key}
//                             name={product.name}
//                             price={product.price}
//                             img={product.img}
//                             category={product.category}
//                             handleClick={getProduct}/>
//                         </div>
//                         )
//                     }})
//                 }
                
//                 </div>
//                 <h1 className="md-heading">Apple Watches</h1>
//                 <div className="watches product">
//                 {
//                     products.map((product)=>{
//                       if(product.category === "watches") 
//                       {return(
//                             <Card
//                             key={product.key}
//                             id={product.key}
//                             name={product.name}
//                             img={product.img}
//                             price={product.price}
//                             category={product.category}
//                             handleClick={getProduct}/>
//                         )
//                     }})
//                 }
                   
//                 </div>
//                 <h1 className="md-heading">Airpods</h1>
//                 <div className="airpods product">
//                 {
//                     products.map((product)=>{
//                       if(product.category === "airpods") 
//                       {return(
//                             <Card
//                             key={product.key}
//                             id={product.key}
//                             name={product.name}
//                             img={product.img}
//                             price={product.price}
//                             category={product.category}
//                             handleClick={getProduct}/>
//                         )
//                     }})
//                 }        
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Products;