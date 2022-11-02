import React from 'react'
import {Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banners.png'

import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';

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


const HeroBanner = () => {
  return (
    <Box position='relative' p={3} className='hero-banner' sx={{
      textAlign: { xs:'center', lg:'start' } }} >
      <ThemeProvider theme={theme}>
          <Typography fontFamily='Work sans' sx={{ fontSize: {xs:'2.5rem', sm:'4rem', md:'4rem'} }} color= '#222222' 
          fontWeight='600'>FierceFitness</Typography> 
      </ThemeProvider>

      <ThemeProvider theme={theme}>
        <Typography fontWeight='500' variant='h3' fontStyle='italic' fontFamily='laila'
         mb= "1.4rem" mt='1.4rem' letterSpacing="2px" >
          Burn fat, <br />Get shredded.
        </Typography>
      </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Typography variant='h6'color= '#222222' display='block' fontFamily="Work Sans"
            lineHeight='2rem' mb={4} >
            Check out the most effective exercises.
          </Typography>
        </ThemeProvider>
<div>
        <ThemeProvider theme={theme}>
           <Button variant="contained"
              href='#exercises' size='small'
              sx={{ padding:'1rem',color:'#F9E2B8', fontFamily:'Work Sans',borderRadius:'1.8rem' ,
               '&:hover':{backgroundColor: 'primary.dark', color:'#F9E2B8' },
               width:`200px`, height:{xs:'2rem', sm:'2.5rem',lg:'3rem' }, 
               position:'relative'}} >
              Explore Exercises
           </Button>
          </ThemeProvider>
          </div>
      {/* <Typography sx={{
      opacity: 0.1, display: { lg: 'block', xs: 'none' }, marginTop:'8rem' ,visibility:'hidden' ,
      fontSize:'13rem' }} >
      <img src={ Logo } alt="" />
      </Typography> */}
      <div>
      <img alt='hero-banner' className='hero-banner-img' src={HeroBannerImage} loading='lazy'  />
      </div>
    </Box>
  )
};

export default HeroBanner;