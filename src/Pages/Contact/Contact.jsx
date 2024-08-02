import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContactHero from './ContactHero/ContactHero'
import ContactForm from './ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header2'

const Contact = () => {
  const [isScroll, setIsScroll] = useState(false);


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
    <Box sx={{
        backgroundImage:'linear-gradient( to right , #0d1834, #020307)',
        // position:'relative', 
        // minHeight:'100vh',
    }}>
       <Box sx={{
        width:'100%',
        textAlign:'center',
        background:isScroll ? '#0d1834e8' : 'transparent',  
        transition:'transform 1s, opacity 0.5s, background-color 0.5s',
        position:isScroll ? 'sticky' : 'none',
        zIndex:1400,
        top:0
      }}>
      <Header2/>
      </Box>      
        <ContactHero/>
        <ContactForm/>
        <Footer/>
    </Box>
    </>
  )
}

export default Contact