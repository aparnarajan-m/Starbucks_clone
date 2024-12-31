import React from 'react'
import './Homecontent.css'
import arrowLeft from '/src/assets/Arrow-left.png'
import dashboardbanner1 from '/src/assets/Dashboards_Banner_bg.png'
import arrowright from '/src/assets/Arrow-right.png'
import Bestseller from '/src/assets/Bestseller.webp'
import Drinks from '/src/assets/Drinks.webp'
import Food from '/src/assets/Food.webp'
import Merchandise from '/src/assets/Merchandise.webp'
import CoffeeAtHome from '/src/assets/CoffeeAtHome.webp'
import ReadyToEat from '/src/assets/ReadyToEat.webp'


function Homecontent() {
  let handcrafted = [
    {url:Bestseller, heading:"Bestseller"},
    {url:Drinks, heading:"Drinks"},
    {url:Food, heading:"Food"},
    {url:Merchandise, heading:"Merchandise"},
    {url:CoffeeAtHome, heading:"Coffee At Home"},
    {url:ReadyToEat, heading:"Ready To Eat"}
  ];

  return (
    <div className='home-contents'>

      <div className='home-contentTop'>
        <div className='top2'><button className='homebutton1'>Know More</button></div>
      </div>

      <div className='home-contentBottom'>
        <div><button className='arrowleft-btn'><img src={arrowLeft} alt="" /></button></div>
        <div className='home-contentBottomSub'>

          <div className='BottomSub1'>
            <img className='dashboardImg1' src={dashboardbanner1} alt="" />
          </div>

          <div className='contentBottoms'>
          <div className='BottomSub2'>
            <p>introducing</p>
            <h2>Gift A Starbucks</h2>
            <p> This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range </p>
          </div>

          <div className='BottomSub3'>
            <div className='BottomSub3-content'>
              <h6>starting from</h6>
              <h3>₹ 350.00</h3>
            </div>
            <button className='BottomSub3-btn'>Know More</button>
            </div>
          </div>

        </div>
        <div><button className='arrowright-btn' ><img src={arrowright} alt="" /></button></div>
      </div>


      <div className='handcraftedDiv'>
        <div className='handcraftedSubdiv'>
          <div className='headingdiv'>
            <h1>Handcrafted Curation</h1>
            </div>

          <div className='handcraftedItemsDiv'>
        {handcrafted.map(item =>(
            <div className='handcraftedItems'>
              <div className='img-Div'><img className='handcraftedImg' src={item.url} alt="" /></div>
              <h4>{item.heading}</h4>
            </div>
        ))}
          </div>

        </div>
      </div>
   
    </div>

  )
}

export default Homecontent


