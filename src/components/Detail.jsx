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
<Stack gap='3rem' sx={{ flexDirection: {md: 'row'}, p:'1.5rem',justifyContent: { xs:'center', md:'space-between'   } , alignItems:'center'}}>
        <img src={gifUrl} alt={name} className='detail-image' />    

    <Stack sx={{ gap: {lg: '2rem', xs:'1rem'} }}>
        <Typography fontFamily='Montserrat' variant='h5' fontWeight={600} textTransform="capitalize">
        {name}
        </Typography>

        <Typography variant='subtitle1'fontFamily='Work sans' fontWeight='500'   >
            Exercises keep you strong. <span style={{textTransform:'capitalize'}}>{name}</span>{' '} is one of the best exercises to target your {target}. It will help 
            improve your health and vitality. 
        </Typography>

        {extraDetail?.map((item) => (
        <Stack key={item.name}  direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background:'#fff2db', borderRadius:'50%', width:'4rem', height:'4rem' }}>
                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height:'50px'  }} />
            </Button >
            <Typography textTransform='capitalize'fontFamily='Work Sans' variant='h6'>
             {item.name}
            </Typography>
        </Stack>
        ))}
    
    </Stack>
</Stack>
  );
};

export default Detail