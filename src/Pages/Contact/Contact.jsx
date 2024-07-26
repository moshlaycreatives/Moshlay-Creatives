import { Box } from '@mui/material'
import React from 'react'
import ContactHero from './ContactHero/ContactHero'
import ContactForm from './ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <Box sx={{
        backgroundImage:'linear-gradient( to right , #0d1834, #020307)',
        // position:'relative', 
        // minHeight:'100vh',
    }}>
        <ContactHero/>
        <ContactForm/>
        <Footer/>
    </Box>
    </>
  )
}

export default Contact