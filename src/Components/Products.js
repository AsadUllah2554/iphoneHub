import '../components.css';
import products from './productsData'
import Card from './ProductCard'
import {useContext,useState} from 'react';
import {CartContext} from '../Context/notes/CartState'

function Products() {

    const { addToCart} = useContext(CartContext)
    const [elements,setElements] = useState(8)
    
    const iphones = products.filter(product=> product.category === "iPhone")
    const slicedIphones = iphones.slice(0,elements)
    return (
        
        <div className="products-mainpage">
            <h1 className="products-category-heading"> Certified Apple iPhones, Watches, AirPods & More! </h1>
            <h4 className="sml-heading ">
                Certified by our team of experts, backed with IPHONE HUB's 1 Year Warranty!
            </h4>
            <div className="products">
                <h1 className="md-heading">iPhones</h1>
                <div className="product">
                {
                    slicedIphones.map((product)=>{
                
                      return(
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
                    })   
                }
          
          <div className="show--hide"> 
                {slicedIphones.length !== iphones.length?
    <button className="load" onClick={()=>setElements(elements+4)}>View more</button>:
    <button className="load" onClick={()=>setElements(8)}>View less</button>
    }     </div>
    

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

// OLD Logic of rendering iPhones 
{/* <h1 className="md-heading">iPhones</h1>
                <div className="product">
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
                } */}
