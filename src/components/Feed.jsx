import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Videos, Sidebar } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [vidoes, setvidoes] = useState([])
  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvidoes(data.items));
   console.log(selectedCategory,vidoes);
  }, [selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px soldiid £3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedcategory={selectedCategory} setselectedcategory={setselectedCategory}/>
        <Typography
          className='copyright'
          variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 Youtube V2
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#fc1503' }}>Videos</span>
        </Typography>
        <Videos videos={vidoes} />
      </Box>
    </Stack>
  )
}

export default Feed