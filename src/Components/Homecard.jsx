import React from 'react'
import './Homecard.css'
import placeholder1 from '/src/assets/homeplaceholder1.webp'
import placeholder2 from '/src/assets/homeplaceholder2.webp'
import placeholder3 from '/src/assets/homeplaceholder3.webp'
import veg from '/src/assets/Homeveg.svg'
import arrowLeft from '/src/assets/Arrow-left.png'
import arrowright from '/src/assets/Arrow-right.png'

const Homecard = () => {
  let Homecard = [
    { img: placeholder1, url: veg, heading: "Cappuccino", para: "SHORT().", rate: "₹ 283.50", btn: "Add Item" },
    { img: placeholder2, url: veg, heading: "Signature Hot Chocolate", para: "SHORT(237ml).284 kcal", rate: "₹ 283.50", btn: "Add Item" },
    { img: placeholder3, url: veg, heading: "vanila Milkshake", para: "TALL(354mL).PER SERVE(354ml)-534 kcal", rate: "₹ 283.50", btn: "Add Item" }
  ];
  return (
    <div className='homeCard'>
      <div className='Sub-homeCard'>
        <div className='homecardsec1'>
          <h1>Barista Recomments</h1>
          <h5>View Menu</h5>
        </div>

        <div className='homecardsec2'>
        <div><button className='cardarrowleft-btn'><img src={arrowLeft} alt="" /></button></div>
          {Homecard.map(item => (
            <div className='card-Div'>

              <div className='topSec'>
              <div className='img1-Div'>
                <img className='img1' src={item.img} alt="" />
              </div>
              <div className='topContent'>
                <img className='img2' src={item.url} alt="" />
                <h2>{item.heading}</h2>
                <h6>{item.para}</h6>
                </div>
              </div>

              <div className='bottomsec'>
                <p>{item.rate}</p>
                <button>{item.btn}</button>
              </div>

            </div>
          ))}
        <div><button className='cardarrowright-btn' ><img src={arrowright} alt="" /></button></div>
        </div>

      </div>
    </div>
  )
}

export default Homecard