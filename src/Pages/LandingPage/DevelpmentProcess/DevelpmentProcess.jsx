import { Box, Grid, Typography, useTheme , useMediaQuery } from '@mui/material'
import React from 'react'

const DevelpmentProcess = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery('(max-width:1400px)');
  const isTen = useMediaQuery('(max-width:1050px)');

  return (
    <>
    <Box sx={{
      position:'relative',
      overflow:'hidden',
      marginBottom: isSmall ? "-3rem" :'-2rem'
    }}>
      <Box sx={{
        position:'absolute',
        padding:'1rem',
        right: isMedium ? -130 : isTen ? -130 : isLarge ? -90 : -80,
        top: isMedium ? 100 : isTen ? 90 : isLarge ? 110 : 95,
        display:isMedium ? ' none' : 'flex'
      }}>
      <img src="hand.svg" alt=""  style={{
        width: isSmall ? '30%' : isMedium ? '50%' : isTen ? '60%' : isLarge ? '70%' : '75%'
      }} />
      </Box>
      <Box>
        <Box sx={{
          padding:'2% 10% 0% 10%'
        }}>
          <Box sx={{
            marginBottom:'6rem'
          }}>
            <Typography variant='h3' sx={{
              color:theme.palette.primary.main,
              fontSize: isSmall ?  '1.5rem' : isMedium ? '2rem' :  '2.5rem',
              fontWeight:600,
              textAlign:'center',
              marginBottom:'1rem',
              fontFamily:'Montserrat'
            }}>
            Our Software Development Process
            </Typography>
            <Typography variant='h3' sx={{
              color:'white',
              fontSize: isSmall ?  '0.9rem' :'1rem',
              fontWeight:400,
              fontFamily:'Montserrat',
              textAlign:'center',
              marginBottom:isMedium ? '-3.2rem' : '-2rem'
            }}>
            With our streamlined software development process, we are able to build
            extraordinary products within ordinary timescales.
            </Typography>
          </Box >
          {/* flex box changes purpose  */}
          {/* <Box sx={{display:'flex' , justifyContent:'space-between', alignItems:'center', width:'100%'}}>
            <Box width={'100%'}> 
              <img src="develop.svg" alt=""  width={'100%'}/>
            </Box>
            <Box width={'100%'}>
              <img src="res-ln.svg" alt="" width={'100%'}/>
            </Box>
          </Box> */}

          <Grid container alignItems={'center'} justifyContent={'center'} marginTop={'0%'}>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Box width={'100%'} sx={{
              display:'flex',
              justifyContent:isMedium ? 'center' : 'start',
              width:'100%', height:'auto'
            }}> 
                <img src="develop.svg" alt=""  width={'85%'}
                //  height={'600rem'}
                  style={{cursor:'pointer'}}/>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} >
            <Box width={'100%'} sx={{
              display:'flex',
              justifyContent:isMedium ? 'center' : 'end',
            }}> 
                <img src="res-ln.svg" alt="" width={'85%'}
                //  height={'300rem'} 
                 style={{cursor:'pointer'}}/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default DevelpmentProcess