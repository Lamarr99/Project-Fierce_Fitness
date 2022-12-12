import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
       <img src={exercise.gifUrl} alt={exercise.name} loading='eager' /> 

    <Stack direction='row' gap='.5rem' p='.5rem' alignItems='center'
      sx={{
        height: {xs: 'min-content', sm:'max=content' }
        
      }}>

    <Button  sx={{  color:'#FEFFDE', background: '#753422', display: 'inline-block',
      '&:hover': { bgcolor: '#753422' },p:'.2rem .4rem',
      fontSize:{xs:'.8rem', sm: '1rem'},height:'min-content' , fontFamily:'Work sans',
      width: 'max-content', borderRadius:'.25rem', textTransform:'capitalize'
    }}>
        {exercise.bodyPart}
    </Button>

    <Button  sx={{ color:'#753422',bgcolor:'#F9E2B8',
      fontSize: {xs:'.8rem', sm: '1rem'} , fontFamily:'Work sans',
      borderRadius:'.25rem', width: 'min-content',
      '&:hover':{ bgcolor:'#F9E2B8'},p:'.2rem .4rem',
      height:'min-content' , textTransform:'capitalize'  
      }}>
      {exercise.target}
    </Button>

    <Typography  
      color='#000' fontFamily='Work sans' fontWeight='500' textTransform='capitalize' 
      fontSize='.8rem' >
        {exercise.name}
    </Typography>
    </Stack>
    </Link>
  )
};

export default ExerciseCard