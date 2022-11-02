import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
       <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' /> 

    <Stack direction='row' gap='1rem' p='1rem' alignItems='center' >
    <Button size='small' p='.7rem' sx={{  color:'#FEFFDE', background: '#753422', '&:hover': { bgcolor: '#753422',  },
    fontSize:'1rem',height:'min-content' , fontFamily:'Work sans',width:'max-content', borderRadius:'.5rem', textTransform:'capitalize'
              }}>
{exercise.bodyPart}
    </Button>
    <Button size='small' p='.7rem' sx={{ color:'#753422',bgcolor:'#F9E2B8',
      fontSize:'1rem', fontFamily:'Work sans',borderRadius:'.5rem',width:'max-content','&:hover':{ bgcolor:'#F9E2B8', border:'none' },
      height:'min-content' , textTransform:'capitalize'  }}>
      {exercise.target}
    </Button>
    <Typography  color='#000' fontFamily='Work sans' fontWeight='500' textTransform='capitalize' fontSize='1.1rem' >
    {exercise.name}
    </Typography>
    </Stack>
    </Link>
  )
};

export default ExerciseCard