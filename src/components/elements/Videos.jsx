import {Stack,Box,Slide } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({videos}) => {
  return (
<Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}> 
{
    videos.map((item,idx)=>(
      <Slide direction="up" in={true} mountOnEnter unmountOnExit key={idx}>
        <Box>
  {item.id.videoId && <VideoCard video={item} key={idx}/>}
  {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>    
        </Slide>
    ))
}
</Stack>  )
}

export default Videos