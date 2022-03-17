import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  
  return (
    <div className='navbar'>
        <Link to='/'>
        <a>Valorant-Unofficial-Info</a>
        </Link>
    </div>
  )
}

export default Navbar