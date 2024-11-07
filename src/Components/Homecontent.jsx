import React from 'react'
import './Homecontent.css'
import dashboardbanner1 from '/src/assets/Dashboards_Banner_bg.png'

function Homecontent() {
  return (
    <div className='contents'>
      <div className='home-content1'>
        <div className='top1'><h5>Starbucks</h5></div>
        <div className='top2'><button className='homebutton1'>Know More</button></div>
      </div>
      <div className='home-content2'>
        <div className='slider'>
          <div>
            <img className='dasboardImg1' src={dashboardbanner1} alt="" />
          </div>
          <div>
            <p>introducing</p>
            <h1>Gift A Starbucks</h1>
            <p> This festive season, we bring to you the perfect gifting story from our India exclusive limited-edition range </p>
            <h6>starting from</h6>
            <h3>$350.00</h3>
          </div>
          <div>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Homecontent