import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Bundle.css';

function Bundles() {
  const [bundleData, setBundleData] = useState([]);
  const bundlesApi = () => {
      axios.get('https://valorant-api.com/v1/bundles')
      .then(res => {
        console.log(res.data.data);
        setBundleData(res.data.data);
      })
      .catch(err => {
          console.log(err)
      })
  }
 
  useEffect(() => {
    bundlesApi()
  }, [])
  return (
    <div className='bundle-list'>
        {bundleData.map(data => {
            return(
            <div className="bundle-card" key={data.uuid}>
                <img src={data.displayIcon} alt="" width='300px' height='200px'/>
                <p>{data.displayName}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Bundles