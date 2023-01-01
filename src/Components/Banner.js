import '../components.css';

function Banner() {
    return (
 <section className="banner">

    <div className="banner-items">
        <img src="images/warranty.avif" alt="warranty logo" className="sml-img" />
        <h1 className="md-heading">Quality Certification</h1>
        <h4 className="sml-heading"> Each smartphone is tested on 52 quality points by our team of experts</h4></div>
    
    <div className="banner-items">
        <img src="images/truck.webp" alt="truck logo" className="sml-img" />
        <div className="xyz">
            <h1 className="md-heading">7-Days return</h1>
            <h4 className="sml-heading"> Not satisfied with the phone? you can return it within 7 days of purchasing</h4>
        </div>
    </div>

     <div className="banner-items">
                <img src="images/notifi.webp" alt="notification logo" className="sml-img" />
                <h1 className="md-heading">1 Year Local Warranty</h1>
                <h4 className="sml-heading"> If a functional defect appears we either repair the phone or replace it</h4></div>

</section>
    )
}

export default Banner;