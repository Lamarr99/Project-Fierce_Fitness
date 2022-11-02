import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

import Logo1 from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='4rem' bgcolor='#F9E2B8'>
      <Stack gap='2rem' 
        alignItems= 'center'pt='1.5rem'>
        <img src={Logo1} alt='Logo' width='200px' loading=''  />

        <Typography fontFamily='Work sans' variant='body2' pb='.5rem' mt='1rem'  >
             <a href="https://github.com/Lamarr99"> Built by Tony Osijo</a>
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer