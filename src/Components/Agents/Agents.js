import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Agents() {
  const [agentsData, setAgentsData] = useState([]);
  const history = useHistory()
  const agentsApi = () => {
    axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
    .then(res => {
        console.table(res.data.data);
        setAgentsData(res.data.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
      agentsApi()
  }, []);
  return (
    <div className="card-list-container">
    <div className='card-list'>
        {agentsData.map(data => {
            return(
          <div className="card" key={data.uuid}>
              <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="130"
        image={data.displayIconSmall}
        alt={data.developerName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.role.displayName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push(`/details/${data.uuid}`)}>Details</Button>
      </CardActions>
    </Card>
   </div>
            )
        })}
    </div>
  </div>
  )
}

export default Agents;

