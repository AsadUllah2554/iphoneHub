import '../../components.css'
import products from '../productsData';
import Card from '../ProductCard'

function Airpods(){

    return(
       <>
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
                         />
                         </div>
                        )
                        
                    }})
                }
                           
                </div>

                </>
       
    )
}

export default Airpods;