import { ThemeContext } from '@emotion/react'
import { Box, Button, Card, Grid, IconButton, Typography, useTheme } from '@mui/material'
import { FiShoppingBag } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";


import React from 'react'

const CareersJob = () => {
    const theme = useTheme();
  return (
    <>

    <Box sx={{
        padding:'0 10%'
    }}>

        <Box>
            <Typography sx={{
                fontSize:'1.1rem', 
                fontWeight:600,
                color:theme.palette.primary.main,
                textAlign:'center'
            }}> Our Jobs</Typography>
              <Typography sx={{
                fontSize:'2.5rem', 
                fontWeight:600,
                color:'white',
                textAlign:'center'
            }}> 
            Current Available Positions at Moshlay Creatives
            </Typography>
        </Box>

        {/* ===========================CARDS================================ */}

        <Grid container >

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ 
             padding:'2rem',
             backgroundColor:'#1b243b', borderRadius:'15px'
          }}>
            <Box sx={{
              display:'flex',
              justifyContent:'space-between'
            }}>

              <Box sx={{display:'flex', alignItems:'center'}}>
                <IconButton>
                <FiShoppingBag color={'white'}/>
                </IconButton>
                <Typography sx={{fontSize:'1rem', color:'white', fontWeight:'400'}}>
                  Frontend Developer - Full Time
                </Typography>
              </Box>
              <Button variant='contained' sx={{
                backgroundColor:'#3d4659',
                fontSize:'0.9rem',
                fontWeight:400,
                 color:'white', borderRadius:'20px', padding:'.8rem 1.5rem'
              }}> Designer</Button>
            </Box>
            <br />
            <Typography sx={{fontSize:'1rem', color:'white', fontWeight:'700', marginLeft:'.7rem'}}>
                UI | Ux Desinger
              </Typography>
              <br />

            <Box sx={{display:'flex'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton>
            <TbCurrentLocation color={'white'}/>
                </IconButton>
                <Typography sx={{fontSize:'1rem', color:'white', fontWeight:'400'}}>
                  Lahore - Pakistan
                </Typography>
            </Box>

            <Box sx={{display:'flex', alignItems:'center'}}> 
            <IconButton>
            <TbCurrentLocation color={'white'} />
                </IconButton>
                <Typography sx={{fontSize:'1rem', color:'white', fontWeight:'400'}}>
                  1-3 years
                </Typography>
            </Box>
            </Box>
            <br /><br />


            <Button variant='outlined' sx={{color:'white', border:'1px solid white',
              fontSize:'1rem', fontFamily:500,
              padding:'.8rem 2rem'
            }}>
              Apply Now
            </Button>

            

          </Card>

        </Grid>

        </Grid>


    </Box>
    
    </>
  )
}

export default CareersJob