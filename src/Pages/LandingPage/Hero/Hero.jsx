import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'

const Hero = () => {
    const theme = useTheme();
    const twelve = useMediaQuery('(max-width:1200px)');
    const ten = useMediaQuery('(max-width:1000px)');
    const seven5 = useMediaQuery('(max-width:750px)');
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const four = useMediaQuery('(max-width:400px)');

  return (
    <>
    <Box sx={{
        width:'100%',
        height:'100vh',
        backgroundImage: 'linear-gradient(to right, #020307, #0d1834)',
        position:'relative'
    }}>
        <Box sx={{
            width:'100%',
            height: isSmall ? '25vh': isMedium ? '30v' : '40vh',
            position:'relative',
            overflow:'hidden',
        }}>
        <img src="heroImage.svg" alt="" style={{
            position:'absolute',width:'100%',
            height: isSmall ? '15vh' : isMedium ? '10vh' : 'auto',
             top: four ? 2 : isSmall ? -5 : seven5 ? -25 : isMedium ? -30 : ten ? -30 : twelve ? -35 : -40 ,
             left:isSmall ? -5 : isMedium ? -40 : ten ? -45 :  twelve ? -50 : -60 
            ,objectFit:'cover',
            objectPosition:'center'}}/>
        <img src="heroImage1.svg" alt="" style={{
            position:'absolute',width:'110%',
            top: four ? -30 : isSmall ? -40 : seven5 ? -70 : isMedium ? -90 : ten ? -110 : twelve ? -130 : -150 ,
            left:isSmall ? -20 : isMedium ? -30 : twelve ? -35  : -40 
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
        {/* <Box sx={{
            marginTop :'2.5rem', 
            position:"absolute",
            top:0,
            // bottom:2,
            // left:"1% ",
            // paddingBottom:'.5rem',
            textAlign:'center',
            width:'100%',
            zIndex: 1000, 
        }}>
            <Header style={{position:'sticky'}} />
        </Box> */}
    </Box>
    </>
  )
}

export default Hero