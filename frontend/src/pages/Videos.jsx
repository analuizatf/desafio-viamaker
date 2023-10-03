import * as React from 'react'
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player'

const videos = [
  'https://www.youtube.com/watch?v=lTRiuFIWV54',
  'https://youtu.be/vJuxkZkfFQM?si=zfevB-YU9WFjxoQj',
  'https://youtu.be/1bvbsx-hpFc?si=mhECliV8Fp5hFYFZ',
  'https://youtu.be/Nyx6SBixRE8?si=h1qz7vrN5G-fwRus'
];

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/watch?v=lTRiuFIWV54');

  return (
    <Stack sx={{mt:'100px', ml:'20px'}}>
        <Box>
            <Typography variant="h6" sx={{mb:'10px'}}>Meu vídeo favorito</Typography>
            <ReactPlayer url={selectedVideo} controls={true} />    
            <Typography variant="h6" sx={{mt:'20px', mb:'10px'}}>Outros vídeos que eu gosto</Typography>
        </Box>
        <Stack direction='row' spacing={4}>
          
          {videos.map((video) => (
            <ReactPlayer url={video} light={true} onClickPreview={() => {
              setSelectedVideo(video)
            }} width='240px' height='135px' />   
          ))}
        </Stack>
    </Stack>
  );
}

export default Videos;