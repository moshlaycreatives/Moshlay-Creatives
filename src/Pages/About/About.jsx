import React, { useEffect, useState } from 'react'
import AboutHero from './AboutHero/AboutHero'
import { Box } from '@mui/material'
import AboutUs from '../LandingPage/AboutUs/AboutUs'
import WhyWeIdeal from '../LandingPage/WhyWeIdeal/WhyWeIdeal'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import ReviewsCarousel from '../LandingPage/ReviewsCarousel/ReviewsCarousel'
import ContactUs from '../LandingPage/ContactUs/ContactUs'
import Footer from '../Components/Footer/Footer'
import FaqsPage from '../LandingPage/Faqs/faqsPage'
import Header2 from '../Components/Header2'

const About = () => {
  const [isScroll, setIsScroll] = useState(false);


  useEffect(()=>{
   const handleScroll =()=>{
    if (window.scrollY > 0) {
        setIsScroll(true);
    } else {
        setIsScroll(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
   return ()=>{
    window.removeEventListener('scroll',handleScroll);}
  },[])
  return (
    <>
    <Box sx={{
        backgroundImage:'linear-gradient( to right , #0d1834, #020307)',
        position:'relative', 
        minHeight:'100vh',
    }}>
      <Box sx={{
        width:'100%',
        textAlign:'center',
        background:isScroll ? '#000205f8' : 'transparent',  
        transition: 'transform 1s,  opacity 0.5s, background-color 0.5s',

        position:isScroll ? 'sticky' : 'none',
        zIndex:1400,
        top:0
      }}>
      <Header2/>
      </Box>
        <AboutHero />
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