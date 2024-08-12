import { ThemeContext } from '@emotion/react'
import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const CareersJob = () => {
    const theme = useTheme();
  return (
    <>

    <Box sx={{
        padding:'0 10%'
    }}>

        <Box>
            <Typography sx={{
                fontSize:'1.1rem', 
                fontWeight:600,
                color:theme.palette.primary.main,
                textAlign:'center'
            }}> Our Jobs</Typography>
              <Typography sx={{
                fontSize:'2.5rem', 
                fontWeight:600,
                color:'white',
                textAlign:'center'
            }}> 
            Current Available Positions at Moshlay Creatives
            </Typography>
        </Box>
    </Box>
    
    </>
  )
}

export default CareersJob