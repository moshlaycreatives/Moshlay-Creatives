import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import React from 'react'
import { IoCheckmark } from "react-icons/io5";


const WebDevelopmentServices = () => {
    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
    <Box sx={{
        backgroundImage: "linear-Gradient(to right  ,#21335b, #111112)",
        padding:'5% 10%'
    }}>
        <Typography sx={{
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            color:'white',
            fontFamily:'Montserrat',
            textAlign:'center',
            fontWeight:600
        }}>
            Full Website
        </Typography>
        <br />
        <Typography sx={{
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            color:theme.palette.primary.main,
            fontFamily:'Montserrat',
            textAlign:'center',
            fontWeight:600
        }}>
            Development Services
        </Typography>
        <br />
{/* ==========================================ROW ONE ==================================================================== */}
        <Box sx={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:1
        }}>

            {/* =============================================ONE================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize:isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                    Web Designing
                </Typography>
            </Box>

            {/* =============================================TWO================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize:isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Front-End Development
                </Typography>
            </Box>

             {/* =============================================THREE================================================= */}
             <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Back-End Development
                </Typography>
            </Box>

            {/* =============================================FOUR================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Database Integration
                </Typography>
            </Box>

        </Box>

        {/* ==========================================ROW Two ==================================================================== */}
        <Box sx={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:1,
            marginTop:'.5rem'
        }}>

            {/* =============================================ONE================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                E-Commerce Integration
                </Typography>
            </Box>

            {/* =============================================TWO================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Responsive Design
                </Typography>
            </Box>

             {/* =============================================THREE================================================= */}
             <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize:isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Search Engine Optimization
                </Typography>
            </Box>

        </Box>

                {/* ==========================================ROW THREE ==================================================================== */}
                <Box sx={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:1,
            marginTop:'.5rem'
        }}>

            {/* =============================================ONE================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : ' 1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Web Testing & Debugging
                </Typography>
            </Box>

            {/* =============================================TWO================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Security Measures
                </Typography>
            </Box>

             {/* =============================================THREE================================================= */}
             <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                justifyContent:'center',
                padding:'.2rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto'
            }}>
                <IconButton sx={{color:theme.palette.primary.main, marginLeft:'-.5rem'}}>
                <IoCheckmark fontSize={'1.8rem'} fontWeight={'900'} />
                </IconButton>
                <Typography sx={{color:'white', fontSize: isSmall ? '1rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Content Migration
                </Typography>
            </Box>

        </Box>

    </Box>
    </>
  )
}

export default WebDevelopmentServices