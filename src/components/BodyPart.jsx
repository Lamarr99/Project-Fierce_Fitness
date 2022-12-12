import React from 'react'
import {Stack, Typography } from '@mui/material'
import Cardio from '../assets/icons/equipment.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => (
  
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{ bgcolor: bodyPart === item ? '#F7DCA5' : '',
    border: bodyPart === item ? '1px solid rgba(117, 52, 34, .7)' : '',
    width: '15rem',
    height:'17rem',
    cursor:'pointer',
    my:'2rem',
    gap:'47px' }}

    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior:'smooth'})
    }}>
      <img src={Cardio} alt={item} style={{ width:'40px', height:'40px' }} />
     
      <Typography fontFamily='Montserrat' fontSize='1.2rem' fontWeight='bold' color='#753422' 
      textTransform='capitalize' >
       {item}
      </Typography>
      </Stack>
    
    
);

export default BodyPart;