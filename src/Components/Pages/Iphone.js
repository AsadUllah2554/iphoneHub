import '../../components.css'
import products from '../productsData';
import Card from '../ProductCard'

function Iphone(){

    return(
        <>
            <h1 className="md-heading">iPhones</h1>
                <div className="product ">
                {
                    products.map((product)=>{
                      if(product.category === "iphone") 
                      {return(
                        <div  className="four-box" key={product.key}>
                            <Card
                           
                            id={product.key}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            category={product.category}
                            />
                            </div>
                        )
                    }})
                }

        </div>
        </>
    )
}

export default Iphone;