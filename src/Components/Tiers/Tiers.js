import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Tiers.css';

function Tiers() {
  const [tiersData, setTiersData] = useState([]);
  const tiersApi = () => {
    axios.get(`https://valorant-api.com/v1/competitivetiers`)
    .then(res => {
        console.log(res.data.data[3].tiers);
        setTiersData(res.data.data[3].tiers)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
      tiersApi()
  }, []);
  return (
    <div className='tier-card-list'>
        {tiersData.map(data => {
            return(
                <div className="tier-card" key={data.tier=[1]}>
                    {data.smallIcon === null ? <p>NULL</p> : <p>{data.tierName}</p>}
                    {data.smallIcon === null ? <p>NULL</p> : <img src={data.smallIcon} alt="" />}
                </div>
            )
        })}
    </div>
  )
}

export default Tiers