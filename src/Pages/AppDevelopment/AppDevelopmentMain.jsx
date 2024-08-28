import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ContactUs from '../LandingPage/ContactUs/ContactUs'
import AppDevelopmentHero from './components/AppDevelopmentHero'
import AppDevelopmentServices from './components/AppDevelopmentServices'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header2'
import AppDevelopmentPlatforms from './components/AppDevelopmentPlatforms'
import AppDevelopmentTech from './components/AppDevelopmentTech'
import AppDevelopmentSteps from './components/AppDevelopmentSteps'
import Page from '../../components/Page/Page'



const AppDevelopmentMain = () => {
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
    <Page title="App Development">
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
        <AppDevelopmentHero/>
        <AppDevelopmentServices/>
        <AppDevelopmentPlatforms/>
        <AppDevelopmentTech/>
        <AppDevelopmentSteps/>
        <ContactUs/>
        <Footer/>
    </Box>
    </Page>

    
    </>
  )
}

export default AppDevelopmentMain;