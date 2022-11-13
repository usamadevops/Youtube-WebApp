import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../../utils/Constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: {md:'358px',xs:'100%'}, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
                    <Typography variant='subtitle' lineHeight={1.5} fontFamily='sans-serif'
                        fontWeight="bold" color={'#fff'}
                    >
                        {snippet?.title.slice(0, 120) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2'
                        fontWeight="600" color="gray" mt={1}
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard