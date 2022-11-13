import {Box} from '@mui/material';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Videos,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const {id}=useParams();
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [videos, setvideos] = useState([]);
  console.log('alldata',ChannelDetails,videos);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data)=>setChannelDetails(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideos(data?.items));
  }, [])
  return (
  <Box minHeight='95vh'>
    <Box>
      <div style={{
background: 'linear-gradient(90deg, rgba(255,100,168,1) 0%, rgba(2,100,214,1) 100%)',zIndex:10,height:'300px'}}/>
<ChannelCard channelDetail={ChannelDetails} marginTop="-110px"/>
      </Box>
<Box display="flex" p={2}>
  <Box sx={{ml:{sm:'100px'}}}/>
<Videos videos={videos}/>
  
</Box>
  </Box>
  )
}

export default ChannelDetail