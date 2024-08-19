import { Box, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'
import React from 'react'

const AppDevelopmentPlatforms = () => {
    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [

    {
      careerlogo: "webdevplatform1.png",
      careertitle: "ENative Mobile App Development",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdevplatform2.png",
      careertitle: "Hybrid Mobile App Development",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdevplatform3.png",
      careertitle: "Progressive Web App Development",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdevplatform4.png",
      careertitle: "Wearables and Embedded Software",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
  ];

  return (
   <>
   <Box sx={{
       backgroundImage: 'linear-gradient(to right, #1c2844, #1c2844)',
       width:'100%',

   }}>
    <Box sx={{
        backgroundImage:'url(appdevplatfomsmask.png)',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:' 4rem 10%'
    }}>
    <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
            // justifyContent:'center'
        }}>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
            //   marginTop:'4rem',
              fontFamily: "montserrat",
            }}
          >
            {" "}
            MOBILE APPLICATION DEVELOPMENT SERVICES 
FOR VARIOUS PLATFORMS
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing 
            you achieve those goals. Is it quality website traffic you seek?
          </Typography>
        </Box>
        <br /><br />

        {/* ================================================CARDS =============================================== */}
<Grid container spacing={6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={3} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  // flexDirection: isSmall ? 'column' : 'row',
                  // padding:'1.5rem',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    // justifyContent: "center",
                  }}
                >
                  <img src={row.careerlogo} alt="" width={"15%"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent:'center'
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: isSmall ? "1.1rem" : "1.2rem",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      // textAlign: "center",
                    }}
                  >
                    {row.careertitle}
                  </Typography>
                  <br />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      // textAlign: "center",
                    }}
                  >
                    {row.carrerdes}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

    </Box>

   </Box>
   </>
  )
}

export default AppDevelopmentPlatforms