import '../../components.css'
import products from '../productsData';
import Card from '../ProductCard'

function Watches(){

    return(
       <>
           <h1 className="md-heading">Apple Watches</h1>
                <div className="watches product">
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
                            />
                            </div>
                        )
                    }})
                }
                   
                </div>

                </>
       
    )
}

export default Watches;