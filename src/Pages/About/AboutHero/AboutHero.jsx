import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import React from "react";

const AboutHero = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery('(max-width:1250px)');
    const minDesktop = useMediaQuery('(max-width:1000px)');
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isTwelve = useMediaQuery('(max-width:1200px)')

  
  return (
    <>
      {/* <Box sx={{
            width: '100%',
            padding: '2% 10%',
            position: 'relative',
            minHeight:'100vh',
            marginBottom:'4rem'
        }}>
        <Box sx={{
            width: '100%',
            marginTop: '2rem',
            position: 'relative',
        }}>
          <Box sx={{
            width: '50%',
            zIndex: 1, // Ensures text is above the images
          }}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom:'.5rem'
              }}
            >
              About Moshlay Creatives
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
          <Box sx={{
            position: 'absolute',
            top: '10%', 
            right: '0%',
            width: minDesktop ? '43%' : '38%',
          }}>
            <img src="aboutHero1.svg" alt="aboutHero1" width="100%" />
          </Box>
          <Box sx={{
            position: 'absolute',
            right: '0%',
            top: isDesktop ? '110%' : '130%',
            width: '60%',
          }}>
            <img src="aboutHero2.svg" alt="aboutHero2" width="100%" />
          </Box>
          <Box sx={{
            position: 'absolute', 
            width: '38%',
            top: '105%',
          }}>
            <img src="aboutHero3.svg" alt="aboutHero3" width="100%" />
          </Box>
        </Box>
      </Box> */}


      <Box sx={{
        padding:'2% 10%',
        marginBottom:'-3rem',
      }}>
        <Grid container spacing={10}>
            <Grid item lg={7} md={12} sm={12} xs={12}>
            <Box sx={{
          }}>
            <Typography
              sx={{
                fontSize: isSmall ? '1.5rem' : "2rem",
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom:'.5rem'
              }}
            >
              About Moshlay Creatives
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
            <Grid item lg={5} md={12} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="aboutHero1.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
        </Grid>

        <Grid container  spacing={isMedium ? 2 : 10}
        sx={{
            marginTop: isSmall ? '1rem' : isTwelve ? "3rem" : ".1rem"
        }}>
            <Grid item lg={5} md={12} sm={12} xs={12}>
            <Box sx={{
                marginTop:isSmall ? '-1rem' : '-3rem'
          }}>
            <img src="aboutHero3.svg" alt="aboutHero1" width="100%" />
          </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12}>
            <Box sx={{
            // position: 'absolute',
            // top: '10%', 
            // right: '0%',
            // width: minDesktop ? '43%' : '38%',
          }}>
            <img src="aboutHero2.svg" alt="aboutHero1" width="100%" />
          </Box>
            </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default AboutHero;
