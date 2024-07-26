import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import { Box } from '@mui/material'
import AboutUs from '../LandingPage/AboutUs/AboutUs'
import WhyWeIdeal from '../LandingPage/WhyWeIdeal/WhyWeIdeal'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import ReviewsCarousel from '../LandingPage/ReviewsCarousel/ReviewsCarousel'
import ContactUs from '../LandingPage/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
import FaqsPage from '../LandingPage/Faqs/faqsPage'

const About = () => {
  return (
    <>
    <Box sx={{
        backgroundImage:'linear-gradient( to right , #0d1834, #020307)',
        position:'relative', 
        minHeight:'100vh',
    }}>
        <AboutHero/>
        <WhyWeIdeal/>
        <WhyChooseUs/>
        <ReviewsCarousel/>
        <ContactUs/>
        <FaqsPage/>
        <Footer/>
    </Box>
    </>
  )
}

export default About