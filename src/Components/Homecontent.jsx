import React from 'react'
import './Homecontent.css'
import arrowLeft from '/src/assets/Arrow-left.png'
import dashboardbanner1 from '/src/assets/Dashboards_Banner_bg.png'
import arrowright from '/src/assets/Arrow-right.png'
// import Bestseller from '/src/assets/Bestseller.webp'
// import Drinks from '/src/assets/Drinks.webp'
// import Food from '/src/assets/Food.webp'
// import Merchandise from '/src/assets/Merchandise.webp'
// import CoffeeAtHome from '/src/assets/CoffeeAtHome.webp'
// import ReadyToEat from '/src/assets/ReadyToEat.webp'


function Homecontent() {
  return (
    <div>
    <div className='home-contents'>

      <div className='home-content1'>
        <div className='top1'><h5>Starbucks</h5></div>
        <div className='top2'><button className='homebutton1'>Know More</button></div>
      </div>

      
      <div className='home-content2'>
        <div><button className='home-content2-button1'><img src={arrowLeft} alt="" /></button></div>
          <div className='dashboardImg-div'>
            <img className='dashboardImg1' src={dashboardbanner1} alt="" />
          </div>
          <div>
            <p>introducing</p>
            <h1>Gift A Starbucks</h1>
            <p> This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range </p>
            <h6>starting from</h6>
            <h3>$350.00</h3>
          </div>
          <div className='content2-button-div'>
            <button>Know More</button>
          </div>
        <div><button className='home-content2-button2' ><img src={arrowright} alt="" /></button></div>
      </div>

    </div>
     </div>

  )
}

export default Homecontent


