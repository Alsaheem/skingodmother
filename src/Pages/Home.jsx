import LandingImg from '../assets/landing_img/landing.png';
import First from '../assets/product_img/first.png';
import Second from '../assets/product_img/second.png';
import Third from '../assets/product_img/third.png';
import Forth from '../assets/product_img/fourth.png';
import Fifth from '../assets/product_img/fifth.png';
import Sixth from '../assets/product_img/sixth.png';

const Home = () => {
    return <>
        <div className="w3-content" style={{ maxWidth: 1200 }}>
            <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{ zIndex: 3, width: 250 }} id="mySidebar">
                <div className="w3-container w3-display-container w3-padding-16">
                    <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright" />
                    <h3 className="w3-wide"><b>SGM</b></h3>
                </div>
                <div className="w3-padding-64 w3-large w3-text-grey" style={{ fontWeight: 'bold' }}>
                    <a href="#" className="w3-bar-item w3-button">Creams/Butter</a>
                    <a href="#" className="w3-bar-item w3-button">Soaps</a>
                    <a href="#" className="w3-bar-item w3-button">Scrubs</a>
                    <a href="#" className="w3-bar-item w3-button">Oils</a>
                </div>
                <a href="#footer" className="w3-bar-item w3-button w3-padding"><i class="fa fa-instagram"></i> Instagram</a>
                <a href="#footer" className="w3-bar-item w3-button w3-padding"><i class="fa fa-phone"></i>Contact</a>
                <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding" onClick="document.getElementById('newsletter').style.display='block'"><i class="fa fa-newspaper-o"></i>Newsletter</a>
                <a href="#footer" className="w3-bar-item w3-button w3-padding"><i class="fa fa-hand"></i>Subscribe</a>
            </nav>
            <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
                <div className="w3-bar-item w3-padding-24 w3-wide">SGM</div>
                <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick="w3_open()"><i className="fa fa-bars" /></a>
            </header>
            <div className="w3-overlay w3-hide-large" onClick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
            <div className="w3-main" style={{ marginLeft: 250 }}>
                <div className="w3-hide-large" style={{ marginTop: 83 }} />
                <header className="w3-container w3-xlarge">
                    <p className="w3-left">SKINGODMOTHER</p>
                    <p className="w3-right">
                        <i className="fa fa-shopping-cart w3-margin-right" />
                        <i className="fa fa-search" />
                    </p>
                </header>
                <div className="w3-display-container w3-container">
                    <img src={LandingImg} alt="Jeans" style={{ width: '100%', height: "600px" }} />
                    <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                        <h1 className="w3-jumbo w3-hide-small" style={{color: 'black' , backgroundColor:"white" , padding: "2px"}}>New arrivals</h1>
                        <h1 className="w3-hide-large w3-hide-medium " style={{color: 'black' , backgroundColor:"white" , padding: "2px"}}>New arrivals</h1>
                        <h1 className="w3-hide-small" style={{color: 'black' , backgroundColor:"white" , padding: "2px"}}>COLLECTION 2022</h1>
                        <p><a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
                    </div>
                </div>
                <div className="w3-container w3-text-grey" id="jeans">
                    <p>8 items</p>
                </div>
                <div className="w3-row-padding ">
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={First} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={Sixth} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={Third} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={Forth} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={Fifth} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                    <div className="w3-col l3 s6 ">
                        <div className="w3-container">
                            <img src={Second} style={{ width: '100%' }} />
                            <p>Ripped Skinny Jeans<br /><b>$24.99</b></p>
                            <button className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                    </div>
                </div>
                <div className="w3-container w3-black w3-padding-32">
                    <h1>Subscribe</h1>
                    <p>To get special offers and VIP treatment:</p>
                    <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" style={{ width: '100%' }} /></p>
                    <button type="button" className="w3-button w3-red w3-margin-bottom">Subscribe</button>
                </div>
                <footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
                    <div className="w3-row-padding">
                        <div className="w3-col s4">
                            <h4>Contact</h4>
                            <p>Questions? Go ahead.</p>
                            <form action="/action_page.php" target="_blank">
                                <p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name" required /></p>
                                <p><input className="w3-input w3-border" type="text" placeholder="Email" name="Email" required /></p>
                                <p><input className="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required /></p>
                                <p><input className="w3-input w3-border" type="text" placeholder="Message" name="Message" required /></p>
                                <button type="submit" className="w3-button w3-block w3-black">Send</button>
                            </form>
                        </div>
                        <div className="w3-col s4">
                            <h4>About</h4>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">We're hiring</a></p>
                            <p><a href="#">Support</a></p>
                            <p><a href="#">Find store</a></p>
                            <p><a href="#">Shipment</a></p>
                            <p><a href="#">Payment</a></p>
                            <p><a href="#">Return</a></p>
                            <p><a href="#">Help</a></p>
                        </div>
                        <div className="w3-col s4 w3-justify">
                            <h4>Store</h4>
                            <p><i className="fa fa-fw fa-map-marker" /> SKINGODMOTHER</p>
                            <p><i className="fa fa-fw fa-phone" /> 0044123123</p>
                            <p><i className="fa fa-fw fa-envelope" /> skingodmother@mail.com</p>
                            <h4>We accept</h4>
                            <p><i className="fa fa-fw fa-cc-amex" /> Transfer</p>
                            <p><i className="fa fa-fw fa-credit-card" /> Credit Card</p>
                            <br />
                            <i className="fa fa-facebook-official w3-hover-opacity w3-large" />
                            <i className="fa fa-instagram w3-hover-opacity w3-large" />
                            <i className="fa fa-snapchat w3-hover-opacity w3-large" />
                            <i className="fa fa-pinterest-p w3-hover-opacity w3-large" />
                            <i className="fa fa-twitter w3-hover-opacity w3-large" />
                            <i className="fa fa-linkedin w3-hover-opacity w3-large" />
                        </div>
                    </div>
                </footer>
                <div className="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-opacity">w3.css</a></div>
            </div>
            <div id="newsletter" className="w3-modal">
                <div className="w3-modal-content w3-animate-zoom" style={{ padding: 32 }}>
                    <div className="w3-container w3-white w3-center">
                        <i onClick="document.getElementById('newsletter').style.display='none'" className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge" />
                        <h2 className="w3-wide">NEWSLETTER</h2>
                        <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
                        <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" /></p>
                        <button type="button" className="w3-button w3-padding-large w3-red w3-margin-bottom" onClick="document.getElementById('newsletter').style.display='none'">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    </>

}
export default Home