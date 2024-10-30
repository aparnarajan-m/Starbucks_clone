import React from 'react'
import './Navbar.css'
import starbucksLogo from './assets/starbucksLogo.png'
import searchIcon from './assets/searchIcon.svg'
import profile from './assets/profileIcon.svg'

function Navbar() {
    return (
        <div>
            <nav className='container'>
                <div className='navSec1'>
                    <img src={starbucksLogo} alt="" />
                    <a href="">Home</a>
                    <a href="">Gift</a>
                    <a href="">Order</a>
                    <a href="">Pay</a>
                    <a href="">Store</a>
                </div>
                <div className='navSec2'>
                    <div className='searchdiv'><img className='navSearch' src={searchIcon} alt="" /><input type="text" placeholder='Looking for something specific?'/> </div>
                    <div><img src={profile} alt="" /></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
