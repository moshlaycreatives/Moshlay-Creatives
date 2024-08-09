import { Box ,Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const WhyChooseUs = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isTwelve = useMediaQuery ('(max-width:1200px)');

  return (
    <>
    <Box sx={{
        padding:'2% 10%',
        marginTop:'2rem',
        marginBottom:isSmall ? '-3rem' : isMedium ? '-2rem' : '-1rem',

    }}>
        <Box>
            <Typography sx={{
                fontSize: isSmall ?  '1.8rem' : isMedium ? '2rem' :  '2.5rem',
                color:theme.palette.primary.main,
                marginBottom:'2rem',
                fontFamily:'Montserrat',
                fontWeight:600,
            }}>
            What Sets Us Apart?
            </Typography>
        </Box>

        {/* grid one  */}
    <Grid container alignItems={"center"} >
        {/* item one */}
    <Grid item lg={5} md={12} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus1.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#141e28f6',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              Proven Delivery Record
            </Typography>
            <Typography sx={{
                fontSize:isSmall ? '1rem' : '1.1rem',
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontWeight: 400,
                fontFamily:'Montserrat'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',fontFamily:'Montserrat'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elis
              non quam egestas sagittis. Sed gravida nulla tellus, eu aliqui
              vulputate at. Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,
            </Typography>
          </Box>
            </Grid>
          
        </Grid>

        {/* Grid two */}
        <Grid container alignItems={"center"}  marginTop={isMedium ? "0rem" : "2rem"}>
  
            <Grid item lg={7} md={12} sm={12} xs={12} order={isTwelve ? 2 : 1} sx={{
                padding:'2rem 0',
                zIndex:'99'
            }}>
            <Box sx={{
                marginRight: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#141e28f6',padding:'2rem',
                

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              We Own The Outcome
            </Typography>
            <Typography sx={{
                fontSize: isSmall ? '1rem' : "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontFamily:'Montserrat'
              }}>
            Your foundation for transformation and progress
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                fontFamily:'Montserrat'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elis
              non quam egestas sagittis. Sed gravida nulla tellus, eu aliqui
              vulputate at. Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,
            </Typography>
          </Box>
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12} order={isTwelve ? 1 : 2} zIndex={'98'}>
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end',
                
                
          }}>
            <img src="whychooseus2.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
          
        </Grid>

        {/* grid Three  */}
    <Grid container alignItems={"center"}  marginTop={ isMedium ? '0rem' : '2rem'}>
        {/* item one */}
    <Grid item lg={5} md={12} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus3.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#141e28f6',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              We Know How To Scale
            </Typography>
            <Typography sx={{
                fontSize: isSmall ? '1rem' : "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontFamily:'Montserrat'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                fontFamily:'Montserrat'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elis
              non quam egestas sagittis. Sed gravida nulla tellus, eu aliqui
              vulputate at. Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,Proin nunc magna, varius vel faucibus id, ornare
              msem. Nullam at molestie justo, ut fringilla dui. Nam convallis
              msodales augue consectetur,
            </Typography>
          </Box>
            </Grid>
          
        </Grid>
    </Box>
    </>
  )
}

export default WhyChooseUs