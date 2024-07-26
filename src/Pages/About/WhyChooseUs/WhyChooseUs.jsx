import { Box ,Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const WhyChooseUs = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <Box sx={{
        padding:'2% 10%'
    }}>
        <Box>
            <Typography sx={{
                fontSize:'2.5rem',
                color:theme.palette.primary.main,
                marginBottom:'2rem'
            }}>
            What Sets Us Apart?
            </Typography>
        </Box>

        {/* grid one  */}
    <Grid container alignItems={"center"} >
        {/* item one */}
    <Grid item lg={5} md={5} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus1.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isMedium ?  '0rem' : "-2rem",
                backgroundColor:'#141e28da',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 700,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem'
              }}
            >
              Proven Delivery Record
            </Typography>
            <Typography sx={{
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 100,
                color: "white",
                textAlign: 'justify'
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
  
            <Grid item lg={7} md={7} sm={12} xs={12} order={isMedium ? 2 : 1} sx={{
                padding:'2rem 0',
                zIndex:'99'
            }}>
            <Box sx={{
                marginRight: isMedium ?  '0rem' : "-2rem",
                backgroundColor:'#141e28da',padding:'2rem',
                

             }}>
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 700,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem'
              }}
            >
              We Own The Outcome
            </Typography>
            <Typography sx={{
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem'
              }}>
            Your foundation for transformation and progress
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 100,
                color: "white",
                textAlign: 'justify'
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
            <Grid item lg={5} md={5} sm={12} xs={12} order={isMedium ? 1 : 2} zIndex={'98'}>
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
    <Grid container alignItems={"center"}  marginTop={'2rem'}>
        {/* item one */}
    <Grid item lg={5} md={5} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus3.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isMedium ?  '0rem' : "-2rem",
                backgroundColor:'#141e28da',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 700,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem'
              }}
            >
              We Know How To Scale
            </Typography>
            <Typography sx={{
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 100,
                color: "white",
                textAlign: 'justify'
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