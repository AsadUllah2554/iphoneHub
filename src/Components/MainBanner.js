import '../components.css';
import Button from './Button';

function MainBanner(){
return(
   <div className="main-banner">
    <div className="main-banner-text">
    <h2 className="main-banner-heading">Selling more than <br/>
    just iPhones.</h2>
    <p className="main-banner-sml-heading">
    Honest pricing and unmatched experience.
    </p>
    </div>
    <Button/>
   </div>
    )
}

export default MainBanner;