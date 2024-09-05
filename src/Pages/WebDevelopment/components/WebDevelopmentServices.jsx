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
        padding:'4% 10%', marginTop :isSmall ?  "-1rem": "0rem"
    }}>
        <Typography sx={{
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            color:'white',
            fontFamily:'Montserrat',
            textAlign:'center',
            fontWeight:600,
             marginBottom:'.5rem'
        }}>
            Full Website
        </Typography>
        <Typography sx={{
            fontSize: isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            color:theme.palette.primary.main,
            fontFamily:'Montserrat',
            textAlign:'center',
            fontWeight:600,
             marginBottom:'1.3rem'
        }}>
            Development Services
        </Typography>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                alignItems:'center',
                width: isSmall ? '100%' : 'auto', 
                cursor:'pointer',
            }}>
                <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize:isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                    Web Designing
                </Typography>
            </Box>

            {/* =============================================TWO================================================= */}
            <Box sx={{
                backgroundColor:'#6e7587',
                display:'flex',
                alignItems:'center',
                borderRadius:'5px',
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto',
                cursor:'pointer',
            }}>
                  <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize:isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto',
                cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
              <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize:isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : ' 1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
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
                padding:'.8rem .5rem',
                justifyContent:isSmall ? 'start' : 'center',
                width: isSmall ? '100%' : 'auto', cursor:'pointer',
            }}>
               <Box sx={{color:theme.palette.primary.main, marginRight:isSmall ? '0rem ': '0.5rem',display:'flex',
                    alignItems:'end',
                    // marginLeft:'0.5rem'
                }}>
                <img src="/webdevservicetick.png" alt="" width={isSmall ?  '70%': '85%'} />
                </Box>
                <Typography sx={{color:'white', fontSize: isSmall ? '0.9rem' : '1.1rem', fontWeight:500, fontFamily:'Montserrat', textAlign:'center'}}>
                Content Migration
                </Typography>
            </Box>

        </Box>

    </Box>
    </>
  )
}

export default WebDevelopmentServices