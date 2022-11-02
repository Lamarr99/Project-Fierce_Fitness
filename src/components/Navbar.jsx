import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button } from '@mui/material'
import Weightlifting from '../assets/images/weightlifting.png'

const Navbar = () => {
  return (
    <Stack
        direction='row'  alignItems='center' justifyContent='space-between' p={3}
        sx={{ gap: { xs:'2rem' }, position: { xs: 'sticky' }, zIndex:'100' }}>
      <Link to='/' > 
       <img src= { Weightlifting } alt='Logo image' 
       style={{ width: '2rem', height:'2rem'} }  />
     </Link>

   <Stack direction='row' gap='1rem' alignItems= 'flex-end' fontWeight='bold' >
    <Link to='/'  className='sink'
    style={{ textDecoration:'none',background:'#222222',borderRadius:'.5rem', 
          fontSize:'.9rem',padding:'.4rem',color: '#F9E2B8'}}>Home</Link>
    <a href="#exercises"  className='sink' 
    style={{textDecoration: 'none', color:'#753422', 
           border:'1px solid #753422',
           borderRadius:'.5rem', padding:'.4rem',fontSize:'0.9rem'
            }}>Exercises</a>
   </Stack>

  </Stack>
  )
}

export default Navbar