import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'



const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box   sx={{ mt: {lg: '4rem', xs: '2rem'}  }} >
        <Typography fontFamily='Work sans' fontWeight="500" variant='h5' mb={3} mx={2}>
            Exercises that target the same muscle group:
        </Typography>

        <Stack direction='row' p={2} sx={{ position:'relative' }}>
            { targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
                 : <Loader  />  }
        </Stack>

        <Typography fontFamily='Work sans' fontWeight="500" variant='h5' mb={3} mx={1}>
            Exercises that use the same equipment:
        </Typography>

        <Stack direction='row' sx={{ p: '2', position:'relative' }}>
            { equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
            : <Loader  />  }
        </Stack>
    </Box>
  )
}

export default SimilarExercises