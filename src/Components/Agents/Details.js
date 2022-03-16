import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import './detailStyle.css';

function Details(props) {
  const [agentsDetails, setAgentsDetails] = useState([])
  useEffect(() => {
  console.log(props.match.params.id)
  const id = props.match.params.id
  axios.get(`https://valorant-api.com/v1/agents/${id}`)
  .then(res => {
      console.log(res.data.data)
      setAgentsDetails(res.data.data)
    })
  }, [props]);
  if (agentsDetails.abilities) {
    return (
      <div className='details'>
          <div className="bg">
          <img src={agentsDetails.background} alt="" width="600px" height="400px"/>
          <img className="portrait" src={agentsDetails.fullPortrait} alt="" width="250px" height="250px"/>
          </div>
            <div className="agent-info">
            <p>{agentsDetails.displayName} ({agentsDetails.developerName})</p>
            <p>{agentsDetails.role.displayName}</p>
            <p>{agentsDetails.description}</p>
            </div>
            <div className="abilities-list">
                <div className="abilities">
                <img src={agentsDetails.abilities[0].displayIcon} alt={agentsDetails.abilities[0].displayName} width="100px" height="100px"/>
                <p>{agentsDetails.abilities[0].displayName}</p>
                </div>
                <div className="abilities">
                <img src={agentsDetails.abilities[1].displayIcon} alt={agentsDetails.abilities[1].displayName} width="100px" height="100px"/>
                <p>{agentsDetails.abilities[1].displayName}</p>
                </div>
                <div className="abilities">
                <img src={agentsDetails.abilities[2].displayIcon} alt={agentsDetails.abilities[2].displayName} width="100px" height="100px"/>
                <p>{agentsDetails.abilities[2].displayName}</p>
                </div>
                <div className="abilities">
                <img src={agentsDetails.abilities[3].displayIcon} alt={agentsDetails.abilities[3].displayName} width="100px" height="100px"/>
                <p>{agentsDetails.abilities[3].displayName}</p>
                </div>
                   
            </div>
            {/* <audio controls src={agentsDetails.voiceLine.mediaList[0].wave} /> */}
        </div>
      )
  }
  return <h3>LOADING...</h3>
}

export default withRouter(Details)