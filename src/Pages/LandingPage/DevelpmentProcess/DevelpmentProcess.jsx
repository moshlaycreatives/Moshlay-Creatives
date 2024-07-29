import { Box, Grid, Typography, useTheme , useMediaQuery } from '@mui/material'
import React from 'react'

const DevelpmentProcess = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <Box sx={{
      position:'relative',
      overflow:'hidden',
      marginBottom:'-2rem'
    }}>
      <Box sx={{
        position:'absolute',
        right:-60,
        top:50,
        display:isMedium ? ' none' : 'flex'
      }}>
      <img src="hand.svg" alt="" width={'80%'} />
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
              fontSize: isSmall ?  '1.6rem' : isMedium ? '2rem' :  '2.5rem',
              fontWeight:700,
              textAlign:'center',
              marginBottom:'1rem'
            }}>
            Our Software Development Process
            </Typography>
            <Typography variant='h3' sx={{
              color:'white',
              fontSize:'1.1rem',
              fontWeight:400,
              textAlign:'center',
              marginBottom:isMedium ? '-3.2rem' : '-2rem'
            }}>
            With our streamlined software development process, we are able to build
            extraordinary products within ordinary timescales.
            </Typography>
          </Box>

          <Grid container alignItems={'center'} justifyContent={'center'} marginTop={'0%'}>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Box width={'100%'} sx={{
              display:'flex',
              justifyContent:isMedium ? 'center' : 'start',
            }}> 
                <img src="develop.svg" alt=""  width={'90%'} style={{cursor:'pointer'}}/>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} >
            <Box width={'100%'} sx={{
              display:'flex',
              justifyContent:isMedium ? 'center' : 'end',
            }}> 
                <img src="res-ln.svg" alt="" width={'90%'} style={{cursor:'pointer'}}/>
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