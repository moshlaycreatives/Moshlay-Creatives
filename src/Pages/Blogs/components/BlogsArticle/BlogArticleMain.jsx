import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import ContactForm from './ContactForm/ContactForm'

import { useLocation } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import Header2 from '../../../Components/Header2'
import BlogsHero from '../BlogsHero'
import BlogsArticleHero from './BlogsArticleHero'
import BlogsArticleDetails from './BlogsArticleDetails'
// import BlogsCard from '../LandingPage/Blogs/blogsCard'   

const BlogsArticleMain = () => {
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
        <BlogsArticleHero/>
        <BlogsArticleDetails/>
        <Footer/>
    </Box>
    </>
  )
}

export default BlogsArticleMain;