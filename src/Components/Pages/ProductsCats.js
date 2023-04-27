import '../../components.css'
import { useContext } from 'react';
import products from '../productsData';
import Card from '../ProductCard'
import { CartContext } from '../../Context/notes/CartState';
import { useLocation } from 'react-router-dom';

function ProductsPage(){

    const { addToCart} = useContext(CartContext)
    const PageCategory = useLocation().pathname.substring(1);
      
    return(
       <>

     { PageCategory === "iphone" &&
       <div>
           <h1 className="md-heading">iPhones</h1>
                <div className="product">
                {
                    products.map((product)=>{
                      if(product.category === "iPhone") 
                      {return(
                        <div className="four-box" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            category={product.category}
                            addToCart={addToCart}
                         />
                         </div>
                        )
                        
                    }})
                }
                           
                </div>
        </div>
             
    }

{ PageCategory === "watches" &&
       <div>
           <h1 className="md-heading">Apple Watches</h1>
                <div className="product">
                {
                    products.map((product)=>{
                      if(product.category === "watches") 
                      {return(
                        <div className="four-box" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            category={product.category}
                            addToCart={addToCart}
                         />
                         </div>
                        )
                        
                    }})
                }
                           
                </div>
        </div>
             
            }


       { PageCategory === "airpods" &&
       <div>
           <h1 className="md-heading">Airpods</h1>
                <div className="airpods product">
                {
                    products.map((product)=>{
                      if(product.category === "airpods") 
                      {return(
                        <div className="four-box" key={product.key}>
                            <Card
                            key={product.key}
                            id={product.key}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            category={product.category}
                            addToCart={addToCart}
                         />
                         </div>
                        )
                        
                    }})
                }
                           
                </div>
                </div>
             
            }
          </>
    )
}

export default ProductsPage;