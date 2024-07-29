import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const Technology = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          // width: "100%",
        //   backgroundColor: "#263238",
          padding:'0 10%',
          marginTop:'1rem',
          // padding:'0% 10%',

        }}
      >
        <Grid container spacing={isSmall ? 5 : 10} alignItems={'center'}>

        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography sx={{
                fontSize: isSmall  ? '1.4rem ' : '1.8rem',
                color:theme.palette.primary.main,
                fontWeight:700,
                marginBottom:'.5rem'
              }}> We do work with all kinds of
              Backends and Frontends 
              Services</Typography>

              <Typography sx={{
                fontSize: isSmall ? ' 1rem' : '1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'.5rem',
                textAlign:'justify'
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
                textAlign:'justify'
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

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                display:'flex', alignItems:"center",
                width:'100%'
            }}>
            <Box  sx={{ width:'100%'}}>
            <img src="technology.svg" alt="" width={"100%"} />
            </Box>
          </Grid>
    
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
