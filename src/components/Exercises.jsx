import React,{ useEffect,useState } from 'react'
import Pagination  from '@mui/material/Pagination'
import { Stack, Box, Typography } from '@mui/material'

import { exerciseOptions,fetchData } from '../utils/fetchData'
import  ExerciseCard  from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({exercises,setExercises, bodyPart }) => {
const [currentPage, setCurrentPage] = useState(1)
const exercisesPerPage = 10;

const indexOfLastExercise = currentPage * exercisesPerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
const currentExercises =  exercises.slice(indexOfFirstExercise, indexOfLastExercise) 


const paginate = (e, value) => {
setCurrentPage (value)

window.scrollTo({top: 1800, behavior: 'smooth'})
}

useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if(bodyPart === 'all') {
      exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );
    }else {
      exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions );

    }

    setExercises (exercisesData);
  }
    fetchExercisesData();
}, [bodyPart]);

if (!currentExercises.length) return <Loader />;

  return (
    <Box id='exercises' sx= {{ mt:{ lg:'6rem'} }} mt='2rem' p='1rem' >
      <Typography  variant='h5' fontFamily='Montserrat' m='3rem'>Boom shakalak! Let’s get started.</Typography>
      <Stack direction='row'
        sx={{ gap: { lg:'5rem', xs:'3rem' }}}
        flexWrap='wrap' justifyContent='center'>
        {currentExercises.map(( exercise, index ) => (
        <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

     <Stack sx={{ mt: { lg: '7rem', xs: '5rem' } }}  alignItems='center' >
      {exercises.length > 10 && (
        <Pagination 
      color='standard'
      defaultPage={1}
      count={Math.ceil(exercises.length / exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      size='large'
      shape='rounded'
        />
      ) }
    </Stack>
  </Box>
  )
}

export default Exercises