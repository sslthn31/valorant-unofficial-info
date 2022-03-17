import React from 'react'
import homeCarousel from '../../Videos/home-carousel.mp4';


function Carousel() {
  return (
    <div className='home-carousel'>
        <div className="home-title">
            <h1>valorant unofficial info</h1>
            <h4>a place where you can find about Valorant</h4>
        </div>
        <div className="home-video">
            <video autoPlay loop muted>
              <source src={homeCarousel} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Carousel