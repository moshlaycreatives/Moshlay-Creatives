import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
// import { GoDotFill } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import "./AppDevelopmentTech.css"

const AppDevelopmentTech = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
            marginTop:isSmall ? '3rem' : '4rem',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent:'center'
          padding: "0% 10%",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
            fontWeight: 600,
            color: theme.palette.primary.main,
            textAlign: "center",
            // marginTop: "4rem",
            fontFamily: "montserrat",
          }}
        >
          {" "}
          OUR EXPERTISE WITH MAJOR MOBILE APP DEVELOPMENT TECHNOLOGIES
        </Typography>
        <Typography
          sx={{
            fontSize: isSmall ? "0.9rem" :"1rem",
            fontWeight: 400,
            color: "white",
            textAlign: "center",
            width: isSmall ? "100%" : isMedium ? "90%" : "70%",
            fontFamily: "montserrat",
          }}
        >
          Your business is unique and has distinct goals. That’s why we carry a
          vast arsenal of digital marketing you achieve those goals. Is it
          quality website traffic you seek?
        </Typography>
      </Box>
      {/* <br /> */}
      {/* <br /> */}

      <Box sx={{
        padding:'3% 10%'
      }}>

        {/* ===============================================TECH PART ONE======================================================== */}
        <Grid container spacing={5} >
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                    color:theme.palette.primary.main,
                    fontSize:isSmall ? '1.2rem' : isMedium ?  "1.5rem": '1.8rem',
                    fontFamily:'Montserrat',
                    fontWeight:500
                }}>
                iOS App Development
                </Typography>
                <br />
                <Typography sx={{
                    color:'white',
                    fontSize: isSmall ? "0.9rem" :"1rem",
                    fontFamily:'Montserrat',
                    fontWeight:400
                }}>
                We have all the expertise you need to produce fully-fledged,
                stable, and scalable mobile applications, including:
                </Typography>
                <br />
                <ul className="appdevtechios">
                    <li>iPhone App Development</li>
                    <li>iPad App Development</li>
                    <li >Apple Watch App Development</li>
                    <li>Apple TV App Development</li>
                    <li>App Clips Development</li>
                </ul>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} width={'100%'} >
                <Box sx={{
                    
                }}>
                    <Box sx={{
                    textAlign:isMedium ?  'center' : 'start',

                    }}>
                        <img src="appdevtech1.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech2.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech3.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech4.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech5.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech6.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        {/* ===============================================TECH PART TWO======================================================= */}
        <Grid container direction={"row-reverse"} spacing={5} marginTop={'2rem'}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                    color:theme.palette.primary.main,
                    fontSize:isSmall ? '1.2rem' : isMedium ?  "1.5rem": '1.8rem',
                    fontFamily:'Montserrat',
                    fontWeight:500
                }}>
                Android App Development
                </Typography>
                <br />
                <Typography sx={{
                    color:'white',
                    fontSize: isSmall ? "0.9rem" :"1rem",
                    fontFamily:'Montserrat',
                    fontWeight:400
                }}>
                We have all the expertise you need to produce fully-fledged,
                stable, and scalable mobile applications, including:
                </Typography>
                <br />
                <ul className="appdevtechios">
                    <li>Android Mobile App Development</li>
                    <li>Android TV App Development</li>
                    <li >Android Tablet App Development</li>
                    <li>Android Wear App Development</li>
                    {/* <li>iPhone App Development</li> */}
                </ul>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box>
                    <Box sx={{
                         textAlign:isMedium ?  'center' : 'start',
                        // textAlign:'end'
                    }}>
                         <img src="appdevtech1.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech2.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech3.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech4.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech5.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech6.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        {/* ===============================================TECH PART THREE======================================================== */}
        <Grid container spacing={5} marginTop={'2rem'}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                    color:theme.palette.primary.main,
                    fontSize:isSmall ? '1.2rem' : isMedium ?  "1.5rem": '1.8rem',
                    fontFamily:'Montserrat',
                    fontWeight:500
                }}>
                Cross-platform App Development
                </Typography>
                <br />
                <Typography sx={{
                    color:'white',
                    fontSize: isSmall ? "0.9rem" :"1rem",
                    fontFamily:'Montserrat',
                    fontWeight:400
                }}>
                We have all the expertise you need to produce fully-fledged,
                stable, and scalable mobile applications, including:
                </Typography>
                <br />
                <ul className="appdevtechios">
                    <li>Hybrid Mobile App Development</li>
                    <li>Hybrid Tablet App Development</li>
                    <li >Hybrid TV App Development</li>
                    {/* <li>iPhone App Development</li> */}
                    {/* <li>iPhone App Development</li> */}
                </ul>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box>
                    <Box sx={{
                         textAlign:isMedium ?  'center' : 'start'
                    }}>
                        <img src="appdevtech1.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech2.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech3.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech4.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech5.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech6.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        {/* ===============================================TECH PART FOUR======================================================= */}
        <Grid container direction={"row-reverse"} spacing={5} marginTop={'2rem'}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                    color:theme.palette.primary.main,
                    fontSize:isSmall ? '1.4rem' : '1.8rem',
                    fontFamily:'Montserrat',
                    fontWeight:500
                }}>
                Progressive Web App Development
                </Typography>
                <br />
                <Typography sx={{
                    color:'white',
                    fontSize: isSmall ? "0.9rem" :"1rem",
                    fontFamily:'Montserrat',
                    fontWeight:400
                }}>
                We have all the expertise you need to produce fully-fledged,
                stable, and scalable mobile applications, including:
                </Typography>
                <br />
                <ul className="appdevtechios">
                    <li>Cross-browser Web App Development</li>
                    <li>Responsive Web App Development</li>
                    <li >Offline Web App Development</li>
                    {/* <li>iPhone App Development</li> */}
                    {/* <li>iPhone App Development</li> */}
                </ul>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} justifyContent={'center'}>
                <Box sx={{
                    // display:'flex',
                    // justifyContent:'center'
                }}>
                    <Box sx={{
                        // display:'flex',
                        // justifyContent:'center'
                        textAlign:isMedium ?  'center' : 'start'
                    }}>
                        <img src="appdevtech1.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech2.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech3.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech4.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech5.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                        <img src="appdevtech6.png" alt="" style={{ width: '10rem', height: 'auto' }}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        

      </Box>

    </>
  );
};

export default AppDevelopmentTech;
