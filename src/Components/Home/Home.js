import React from 'react'
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <Carousel />
        <div className="home-button-list">
        <Link to='/agents' className='button'>
        <button>AGENTS PAGE</button>
        </Link>
        <Link to='/tiers' className='button'>
        <button>TIERS PAGE</button>
        </Link>
        <Link to='/bundles' className='button'>
        <button>BUNDLES PAGE</button>
        </Link>
        </div>
    </div>
  )
}

export default Home