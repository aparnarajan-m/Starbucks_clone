import React from 'react'
import './Homecontent.css'
import dashboardbanner1 from '/src/assets/Dashboards_Banner_bg.png' 

function Homecontent() {
  return (
    <div>
      <div className='home-container'>
        <div className='top1'><h5>Starbucks</h5></div>
        <div className='top2'><button className='homebutton1'>Know More</button></div>
      </div>
      <div className='homeslider-div'>
          <div><img className='homeslider' src={dashboardbanner1} alt="" /></div>
      </div>
    </div>

  )
}

export default Homecontent