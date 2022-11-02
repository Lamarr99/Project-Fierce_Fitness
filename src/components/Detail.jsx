import React from 'react'
import { Stack,Typography, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,

        },
        {
            icon: TargetImage,
            name: target,

        },
        {
            icon: EquipmentImage,
            name: equipment,

        }
    ];

  return (
<Stack gap='60px' sx={{ flexDirection: {lg: 'row'}, p:'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />    

    <Stack sx={{ gap: {lg: '2rem', xs:'1rem'} }}>
        <Typography  variant='h4' fontWeight={700} textTransform="capitalize">
        {name}
        </Typography>

        <Typography variant='body1'fontFamily='Laila'  color="#4F4C4C" >
            Exercises keep you strong. <span style={{textTransform:'capitalize'}}>{name}</span>{' '} is one of the best exercises to target your {target}. It will help 
            improve your health and vitality. 
        </Typography>

        {extraDetail?.map((item) => (
        <Stack key={item.name}  direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background:'#fff2db', borderRadius:'50%', width:'7rem', height:'7rem' }}>
                <img src={item.icon} alt={bodyPart} loading='lazy'  style={{ width: '50px', height:'50px'  }} />
            </Button >
            <Typography textTransform='capitalize'fontFamily='Work Sans' variant='h5'>
             {item.name}
            </Typography>
        </Stack>
        ))}
    
    </Stack>
</Stack>
  );
};

export default Detail