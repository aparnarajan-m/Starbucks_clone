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
                        <h3 className='footer-heading'>About</h3>
                        <ul>
                            <li><a href="">Our Heritage</a></li>
                            <li><a href="">Coffeehouse</a></li>
                            <li><a href="">Our Company</a></li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <h3 className='footer-heading'>Responsibility </h3>
                        <ul>
                            <li><a href=""> Diversity </a></li>
                            <li><a href=""> Community </a></li>
                            <li><a href=""> Ethical Sourcing </a></li>
                            <li><a href=""> Environmental Stewardship </a></li>
                            <li><a href=""> Learn More </a></li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <h3 className='footer-heading'>Quick Links</h3>
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Starbucks India Mobile App <br /> Terms of Use</a></li>
                            <li><a href="">Customer Service</a></li>
                            <li><a href="">Delivery</a></li>
                            <li><a href="">Season's Gifting</a></li>
                            <li><a href="">Loyalty Program Terms and <br /> Conditions</a></li>
                            <li><a href="">Starbucks Rewards Day Offer</a></li>
                            <li><a href="">Beverage Subscription</a></li>
                            <li><a href="">Diwali Bonus Star Offer</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='socialmeadia-heading'>SOCIAL MEDIA</h1>
                        <ul className='socialmediaImg-div'>
                            <li><a href=""><img src={instagram} alt="" /></a></li>
                            <li><a href=""><img src={facebook} alt="" /></a></li>
                            <li><a href=""><img src={twitter} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className='androidIos-div'>
                        <a href=""><img src={ios} alt="" /></a>
                        <a href=""><img src={android} alt="" /></a>
                    </div>
                </div>

                <div className='footer-sec2'>
                    <div>
                        <ul>
                            <li><a href="">Web Accessiblity</a></li>
                            <li><a href="">Privacy Statement</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="">© 2024 Starbucks Coffee Company. All rights reserved.</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
