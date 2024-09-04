import { Box, Typography, useTheme, useMediaQuery, IconButton, Grid } from '@mui/material'
import React from 'react'
import { IoCheckmark } from "react-icons/io5";


const CustomIndustry = () => {
    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const  listData =[
    {img:'/customindustry1.png' , title :'Education'},
    {img:'/customindustry2.png' , title :'Healthcare'},
    {img:'/customindustry3.png' , title :'Financial Services'},
    {img:'/customindustry4.png' , title :'Transportation'},
    {img:'/customindustry5.png' , title :'Technology'},
    {img:'/customindustry6.png' , title :'Telecom'},
    {img:'/customindustry7.png' , title :'Energy'},
    {img:'/customindustry8.png' , title :'Real Estate'},
    {img:'/customindustry9.png' , title :'Retail'},
  ]

  return (
    <>
    <Box sx={{
        // backgroundImage: "linear-Gradient(to right  ,#21335b, #111112)",
        padding:'3% 10%'
    }}>
        <Typography sx={{
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            color:'white',
            fontFamily:'Montserrat',
            textAlign:'center',
            fontWeight:600, marginBottom:'2rem'
        }}>
           Featured Industries
        </Typography>

        <Box>
            <Grid container spacing={2}> 
                {listData.map((row, index)=>(
                    <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                    <Box sx={{
                        // backgroundColor:'white', 
                        border:'1px solid white',
                        borderRadius:'10px',
                        padding:'1rem', 
                        display:'flex', 
                        // justifyContent:'center',
                         alignItems:'center',
                    }}>
                        <Box>
                            <img src={row.img} alt="" width={isSmall ? '22rem' :'33rem'} color={'white'}/>
                        </Box>
                        <Typography sx={{
                            fontSize: isSmall ? '1.2rem' : isMedium ? '1.5rem' : '1.6rem',
                            color:'white', marginLeft:'1rem'
                        }}>
                        {row.title}
                        </Typography>
                    </Box>
                </Grid>
                ))}
                
            </Grid>
        </Box>

    </Box>
    </>
  )
}

export default CustomIndustry