import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header2';
import Header from '../Components/Header';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Page from '../../components/page';
import { useLocation } from 'react-router';
import PrivacyPolicyText from './PrivacyPolicyText';
import Footer from '../Components/Footer/Footer';

const PrivacyPolicy = () => {

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
     <Page title="Privacy Policy">
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
        <PrivacyPolicyText/>
        <Footer/>
    </Box>
    </Page>
   </>
  )
}

export default PrivacyPolicy