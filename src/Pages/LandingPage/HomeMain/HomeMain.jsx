import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import { Box } from '@mui/material'
import Services from '../Services/Services'
import WhyWeIdeal from '../WhyWeIdeal/WhyWeIdeal'
import KnowUs from '../KnowUs/KnowUs'

const HomeMain = () => {
  return (
    <>
    <Box sx={{
        width:'100%',
        height:'auto',
        // padding:'2%  10%',
        backgroundImage: 'linear-gradient(to right, #0d1834, #020307 )',
    }}>
        <Box sx={{
            padding:'2% 10%',
            // height:"auto",
        }}>
            <AboutUs/>
            <br />
            <Services/>
            <WhyWeIdeal/>
            <KnowUs/>
        </Box>
    </Box>
    </>
  )
}

export default HomeMain