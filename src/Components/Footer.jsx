import React from 'react'
import './Footer.css'
import starbucksLogo from '/src/assets/starbucksLogo.png'
import instagram from '/src/assets/instagram.svg'
import facebook from '/src/assets/facebook.svg'
import twitter from '/src/assets/twitter.svg'
import android from '/src/assets/appstoreAndroid.png'
import ios from '/src/assets/appstoreios.png'


function Footer() {
    return (
        <div>
            <footer className='main-footer'>
                <div className='footer-container'>
                <div className='footer-sec1'>
                    <div className='footerLogo-div'><img className='footer-logo' src={starbucksLogo} alt="" /></div>
                    <div className="footerlist">
                        <h3 className='footer-heading'>About Us</h3>
                        <ul className='footer-Ul'>
                            <li className='footer-Li'><a className='footer-a' href="">Our Heritage</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Coffeehouse</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Our Company</a></li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <h3 className='footer-heading'>Responsibility </h3>
                        <ul className='footer-Ul'>
                            <li className='footer-Li'><a className='footer-a' href=""> Diversity </a></li>
                            <li className='footer-Li'><a className='footer-a' href=""> Community </a></li>
                            <li className='footer-Li'><a className='footer-a' href=""> Ethical Sourcing </a></li>
                            <li className='footer-Li'><a className='footer-a' href=""> Environmental Stewardship </a></li>
                            <li className='footer-Li'><a className='footer-a' href=""> Learn More </a></li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <h3 className='footer-heading'>Quick Links</h3>
                        <ul className='footer-Ul'>
                            <li className='footer-Li'><a className='footer-a' href="">Privacy Policy</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">FAQs</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Starbucks India Mobile App <br /> Terms of Use</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Customer Service</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Delivery</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Season's Gifting</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Loyalty Program Terms and <br /> Conditions</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Starbucks Rewards Day Offer</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Beverage Subscription</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Diwali Bonus Star Offer</a></li>
                            <li className='footer-Li'><a className='footer-a' href="">Beverage Subscription</a></li>
                        </ul>
                    </div>
                    <div className='socialmedia-div'>
                        <h2 className='socialmeadia-heading'>SOCIAL MEDIA</h2>
                        <ul className='footer-Ul socialmediaImg-div'>
                            <li className='footer-Li'><a href=""><img className='socialmediaImg' src={instagram} alt="" /></a></li>
                            <li className='footer-Li'><a href=""><img className='socialmediaImg' src={facebook} alt="" /></a></li>
                            <li className='footer-Li'><a href=""><img className='socialmediaImg' src={twitter} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className='androidIos-div'>
                        <a href=""><img className='androIos' src={ios} alt="" /></a>
                        <a href=""><img className='androIos' src={android} alt="" /></a>
                    </div>
                </div>

                <div className='footer-sec2'>
                    <div className='sec2-bottom1'>
                        <ul className='footer-Ul sec2-bottom1-ul'>
                            <li className='footer-Li bottomLi liborder'><a className='bottomLi-a' href="">Web Accessiblity</a></li>
                            <li className='footer-Li bottomLi liborder'><a className='bottomLi-a' href="">Privacy Statement</a></li>
                            <li className='footer-Li bottomLi liborder'><a className='bottomLi-a' href="">Terms of Use</a></li>
                            <li className='footer-Li bottomLi'><a className='bottomLi-a' href="">Contact Use</a></li>
                        </ul>
                    </div>
                    <div className='sec2-bottom2'>
                        <ul className='footer-Ul'>
                            <li className='bottom2Li'><a href="">© 2024 Starbucks Coffee Company. All rights reserved.</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
