import React, {useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import { createTheme, ThemeProvider, responsiveFontSizes} from '@mui/material/styles';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);

useEffect(() => {
      const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData
       ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
      };
      fetchExercisesData();
  }, []);

const handleSearch = async () => {
   if(search) {
      const exercisesData = await fetchData
      ( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions );

    const searchedExercises = exercisesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search) 
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
    );
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

setSearch('');
setExercises(searchedExercises);
}
};


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
    
<Stack alignItems='center' mt='2rem' justifyContent='center'
       p='20px'  >
     <ThemeProvider theme={theme}>
         <Typography fontWeight='600' variant='h4' sx={{mt:{sx:0, lg:'8rem'} ,
          fontFamily:'Work Sans' }}
          mb= '2rem' textAlign='center' textDecoration='capitalize'>
          Amazing exercises you should add to your routine.
         </Typography>
     </ThemeProvider>

     <Box position="relative" mb= '5rem' height='min-content' >
      <TextField sx={{ input: { fontWeight: '500' }, 
       width: { lg: '60vw', xs: '80vw'   }, color:'#753422' , bgColor:'#F5EFE6', fontSize:'.8rem'
       }} height='76px'
        value={search}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'  />
    <Button
     sx={{
    bgcolor:'#753422', color: '#F9E2B8',
    '&:hover':{bgcolor:'#B05B3B'},
    textTransform:'capitalize',
    width: { lg:'175px', xs:'80px' },
    fontSize: {lg: '1.2rem', xs:'.9rem'},
    height:'56px',
    position:'absolute',
    right: '0'
     }}
    onClick={handleSearch} >
    Search
    </Button>
    </Box>

    <Box sx={{ position: 'relative', width: '100%', p: '20px' }} >
    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Box>
</Stack>
   );
   };

export default SearchExercises