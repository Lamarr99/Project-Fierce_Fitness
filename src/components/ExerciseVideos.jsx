import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Loader from './Loader';

import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';


const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return <Loader />;

    let theme = createTheme({
        palette: {
          primary: {
            main: '#222222',
         
          },
          secondary: {
            light: '#0066ff',
            main: '#F9E2B8',
            contrastText: '#ffcc00',
          },
        
          custom: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          contrastThreshold: 3,
          
          tonalOffset: 0.2,
        },
      });
      theme = responsiveFontSizes(theme);

    

  return (
    <Box sx={{ marginTop: { lg: '200px', xs:'20px'}}}  p='20px'>
         <ThemeProvider theme={theme}>
        <Typography  fontFamily="Montserrat" fontWeight='500' variant='h5' mb='33px'>
            Watch <span style={{textTransform: 'capitalize',color:'#52734D' }} >{name}</span> exercises videos:
        </Typography>
        </ThemeProvider>

    <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx={{
            flexDirection: { lg:'row' }, gap: { lg:'110px', xs:'0'}
        }} >
            { exerciseVideos?.slice(1, 5).map((item, index) => (
                    <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
                        className='exercise-video'
                        key={index}
                        target='_blank'
                        rel='noreferrer' >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy' />
                        <Box  >
                            <ThemeProvider theme={theme}>
                                <Typography variant='body1' my='1rem' fontFamily="laila" color='#000'>
                                {item.video.title}
                                </Typography>
                            </ThemeProvider>
                             <Typography variant='body1' mb='1rem' p='12px' borderRadius='25px'
                                 maxWidth='fit-content' fontFamily="Work Sans" bgcolor='#222222' color='#F9E2B8'>
                                {item.video.channelName}
                             </Typography>
                        </Box>
                    </a>
            ) )}
    </Stack>
    </Box>
  )}

export default ExerciseVideos