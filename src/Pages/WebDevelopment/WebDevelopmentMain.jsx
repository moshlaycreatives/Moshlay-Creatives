import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header2'
import WebDevelopmentHero from './components/WebDevelopmentHero'
import WebDevelopmentServices from './components/WebDevelopmentServices'
import WebDevelopmentDigitalStand from './components/WebDevelopmentDigitalStand'
import WebDevelopmentType from './components/WebDevelopentType'
import ContactUs from '../LandingPage/ContactUs/ContactUs'
import WebDevelopmentBenefit from './components/WebDevelopmentBenefit'
import WebDevelopmentTech from './components/WebDevelopmentTech'
import Page from '../../components/Page/Page'





const WebDevelopmentMain = () => {
  const [isScroll, setIsScroll] = useState(false);
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  useEffect(()=>{
   const handleScroll =()=>{
    if (window.scrollY > 20) {
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
    <Page title='Web Development'>
    <Box sx={{
        backgroundImage: 'linear-gradient(to right, #132650, #000000)',
        // position:'relative', 
        // minHeight:'100vh',
    }}>
       <Box sx={{
        width:'100%',
        textAlign:'center',
        background:isScroll ? '#000205f8' : 'transparent',  
        transition:'transform 1s, opacity 0.5s, background-color 0.5s',
        position:isScroll ? 'sticky' : 'none',
        zIndex:1000,
        top:0
      }}>
      <Header2/>
      </Box>      
        <WebDevelopmentHero/>
        <WebDevelopmentServices/>
        <WebDevelopmentDigitalStand/>
        <WebDevelopmentBenefit/>
        <WebDevelopmentType/>
        <WebDevelopmentTech/>
        <ContactUs/>
        <Footer/>
    </Box>
    </Page>

   
    </>
  )
}

export default WebDevelopmentMain;