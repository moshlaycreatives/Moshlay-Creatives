import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header2'
import CustomHero from './components/CustomHero'
import ContactUs from '../LandingPage/ContactUs/ContactUs'
import Page from '../../components/Page/Page'
import CustomAdvantage from './components/CustomAdvantage'
import CustomNeeds from './components/CustomNeeds'
import CustomTabs from './components/CustomTabs'
import CustomDiscuss from './components/CustomDiscuss'
import CustomCaseStudy from '../CustomSoftware/components/CustomCaseStudy'
import CustomIndustry from '../CustomSoftware/components/CustomIndustry'
import CustomTools from './components/CustomTools'





const CustomSoftwareMain = () => {
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
        <CustomHero/>
        <CustomNeeds/>
        <CustomTabs/>
        <CustomAdvantage/>
        <CustomDiscuss/>
        <CustomTools  />
        <CustomCaseStudy/>
        <CustomIndustry/>
        {/* <WebDevelopmentServices/> */}
        {/* <WebDevelopmentDigitalStand/> */}
        {/* <WebDevelopmentBenefit/> */}
        {/* <WebDevelopmentType/> */}
        {/* <WebDevelopmentTech/> */}
        {/* <ContactUs/> */}
        <Footer/>
    </Box>
    </Page>

   
    </>
  )
}

export default CustomSoftwareMain;