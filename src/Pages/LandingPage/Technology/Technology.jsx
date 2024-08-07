import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Technologytwo from "../Technologytwo/Technologytwo";
import Technologytwosmall from "../Technologytwo/Technologytwosmall";

const Technology = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width : "100%",
        //   backgroundColor: "#263238",
          padding:'0 10%',
          marginTop:'1rem',
          overflow:'hidden'
          // padding:'0% 10%',

        }}
      >
        <Grid container spacing={isSmall ? 0 : 10} alignItems={'center'}>

        <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box>
              <Typography sx={{
                fontSize: isSmall  ? '1.4rem ' : '1.8rem',
                color:theme.palette.primary.main,
                fontWeight:600,
                marginBottom:'.5rem',
                fontFamily:'Montserrat',
                // textAlign:isSmall ? 'center' : '',

              }}> We do work with all kinds of
              Backends and Frontends 
              Services</Typography>

              <Typography sx={{
                fontSize: isSmall ? ' 1rem' : '1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'.5rem',
                // textAlign:isSmall ? 'center' : '',
                fontFamily:'Montserrat',
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portti tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum la lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus 
              </Typography>
              <Typography sx={{
                fontSize:'1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'2rem',
                // textAlign:isSmall ? 'center' : '',
                fontFamily:'Montserrat',
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portt tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum lao lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus 
              </Typography>
              {/* <Box>
                <Button variant="outlined" 
                sx={{
                    color:'white',
                    fontSize:'1rem'
                }}>Meet the Team</Button>
              </Box> */}
            </Box>
          </Grid>

          <Grid item lg={6} md={12} sm={12} xs={12} sx={{
                display:  'flex', alignItems:"center",
                justifyContent:isMedium ? 'center' : 'end',
                width:'100%',
                // minHeight:'50vh'
                // overflow:'hidden'
            }}>

              {isSmall ? (
                 <Box  sx={{  postition:'relative', width:'100%', oveflow:'hidden', }}>
                 {/* <img src="technology.svg" alt="" width={"100%"} /> */}
     
                 <Technologytwosmall/>
                 </Box>
              ) : (
                <Box  sx={{  postition:'relative', width:'100%', oveflow:'hidden', padding:'1rem'}}>
                {/* <img src="technology.svg" alt="" width={"100%"} /> */}
    
                <Technologytwo/>
                </Box>
              )}
           
          </Grid>
    
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
