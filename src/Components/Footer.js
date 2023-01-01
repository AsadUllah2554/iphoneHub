
import '../components.css';

function Footer() {
    return (
        <footer >
            <div className='footer'>
            <div className="footer-container">
                <div className="email-box">
                    <h1 className="md-heading">Let's get in touch</h1>
                    <h4 className="sml-heading">Enter your email below to be the first to know about new discounts and product launches.</h4>
                    <form action="" className="newsletter">
                    <input type='email' placeholder="Enter your email"
                     className="input" />
                         <button className="main-banner-btn ">Subscribe</button></form>
            </div>
            

               <div className="footer-links">
                
                <div className="footer-items">
                    <ul className="links">
                        <li className="li-heading">Our Store</li>
                        <li className="list-items ">iPhones</li>
                        <li className="list-items ">Apple Watches</li>
                        <li className="list-items ">Airpods</li>
                        <li className="list-items ">Accessories</li>

                    </ul>
                </div>
                <div className="footer-items">
                    <ul className="links">
                        <li className="li-heading">Support</li>
                        <li className="list-items ">Whatsapp</li>
                        <li className="list-items ">Community</li>
                        <li className="list-items ">Support Center</li>
                        <li className="list-items ">Warranty Claims</li>

                    </ul>
                </div>
                <div className="footer-items">
                    <ul className="links">
                        <li className="li-heading ">Legal</li>
                        <li className="list-items ">Shipping Policy</li>
                        <li className="list-items ">Terms of Service</li>
                        <li className="list-items ">Return </li>
                        <li className="list-items ">Refund</li>
                    </ul>
                </div>
                </div>
            </div>

            </div>


            <div className="footer-end">
            <div className="h-icons footer-icons">
                    <i class='bx bxl-facebook-circle'></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-whatsapp' ></i>
           </div>

                <div className="footer-text">
                <h4 className="footer-txt">© Asad development. All rights reserved</h4> 
                </div>
          
            </div>


        </footer>)
}

// background image property
// background-image: url(./images/react-icon-large.png);
// background-repeat: no-repeat;
// background-position: right 75%;

export default Footer;