import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import { Box } from '@mui/material'
import Services from '../Services/Services'
import WhyWeIdeal from '../WhyWeIdeal/WhyWeIdeal'
import KnowUs from '../KnowUs/KnowUs'
import ContactUs from '../ContactUs/ContactUs'
import Blogs from '../Blogs/Blogs'
import Footer from '../../Components/Footer/Footer'
import Technology from '../Technology/Technology'
import ReviewsCarousel from '../ReviewsCarousel/ReviewsCarousel'

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
            <ReviewsCarousel/>
            <Technology/>
            <KnowUs/>
            <ContactUs/>
            <Blogs/>
            <Footer/>
        </Box>
    </Box>
    </>
  )
}

export default HomeMain