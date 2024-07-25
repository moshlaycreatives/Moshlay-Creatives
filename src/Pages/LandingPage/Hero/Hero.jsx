import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'

const Hero = () => {
  return (
    <>
    <Box sx={{
        width:'100%',
        height:'100vh',
        backgroundImage: 'linear-gradient(to right, #020307, #0d1834)',
    }}>
        <Box sx={{
            width:'100%',
            height:'40vh',
            position:'relative',
            overflow:'hidden',
        }}>
        <img src="heroImage.svg" alt="" style={{
            position:'absolute',width:'100%', top:-40 ,left:-60
            ,objectFit:'cover',
            objectPosition:'center'}}/>
        <img src="heroImage1.svg" alt="" style={{
            position:'absolute',width:'110%', top:-150, left:-40
            , objectFit:'cover',
            objectPosition:'center'}}/>
        </Box>

        <Box sx={{
            display:'flex',
            justifyContent:'center',
            width:'100%'
        }}>
            <img src="logo.svg" alt=""  style={{}}/>
        </Box>
        <Box sx={{
            display:'flex',
            justifyContent:'center'
        }}>
            <Typography sx={{
                fontSize:'2rem',
                fontWeight:'500',
                color:'white',
                textAlign:'center'
            }}>Your Vision, Our Innovation</Typography>
        </Box>
        <Box sx={{
            marginTop :'2.5rem',
            position:"absolute",
            bottom:2,
            // left:"1% ",
            textAlign:'center',
            width:'100%'
        }}>
            <Header/>
        </Box>
    </Box>
    </>
  )
}

export default Hero