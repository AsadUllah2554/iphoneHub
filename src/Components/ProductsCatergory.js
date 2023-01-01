import '../components.css';
import { Link } from 'react-router-dom'

function ProductsCategory() {
    return (
        <div className="products-category">
            <h1 className="products-category-heading">We Heard You! ❤️</h1>
            <h4 className="main-banner-sml-heading">
              Introducing IPHONE HUB Certified Apple Watches, AirPods & More!
            </h4>
            <div class="menu-content">
            <div class="row">
                <img src="images/iphone.jpg" alt="main item"/>
                <div class="menu-text">
                    <div class="menu-left">
                        <h4>iPhone</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <img src="images/watch.jpg" alt="main item"/>
                <div class="menu-text">
                    <div class="menu-left">
                        <h4>Apple Watch</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <img src="images/airpods.jpg" alt="main item"/>
                <div class="menu-text">
                    <div class="menu-left">
                        <h4>Airpods</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <img src="images/accessories.jpg" alt="main item"/>
                <div class="menu-text">
                    <div class="menu-left">
                        <h4>Accessories</h4>
                    </div>
                </div>
            </div>
        </div>
       </div>

    )
}

export default ProductsCategory;
