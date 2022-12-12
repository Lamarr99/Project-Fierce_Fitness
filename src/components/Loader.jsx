import React from 'react'
import { Stack } from '@mui/material'
import {Rings} from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <Rings width='4rem' color='#3d3d3d' />

    </Stack>
  )
}

export default Loader