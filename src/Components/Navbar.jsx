import React from 'react'
import './Navbar.css'
import starbucksLogo from '/src/assets/starbucksLogo.png'
import searchIcon from '/src/assets/searchIcon.svg'
import profile from '/src/assets/profileIcon.svg'

function Navbar() {
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <div className='navSec1'>
                    <div className='nav-starbuckslogo-div'><img className='nav-starbuckslogo' src={starbucksLogo} alt="" /></div>
                    <div className='nav-a-div'>
                    <a href="">Home</a>
                    <a href="">Gift</a>
                    <a href="">Order</a>
                    <a href="">Pay</a>
                    <a href="">Store</a>
                    </div>
                </div>
                <div className='navSec2'>
                    <div className='nav-searchdiv'><img className='navSearch' src={searchIcon} alt="" /><input type="text" placeholder='Looking for something specific?'/> </div>
                    <div className='pro-div'><img className='profile' src={profile} alt="" /></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
