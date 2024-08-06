import { Box, Button, Grid, Typography, useTheme , useMediaQuery} from "@mui/material";
import React from "react";

const KnowUs = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery('(max-width:1500px)');

  return (
    <>
      <Box
        sx={{
          // width: "100%",
          backgroundColor: "#263238",
          marginTop:'5rem',
          padding:isMedium ? '5% 10%' : '2% 10%',

        }}
      >
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 2 : 1} sx={{
                display:'flex', alignItems:"center",
                width:'100%'
            }}>
            <Box  sx={{ width:'100%'}}>
            <img src="knowus.svg" alt="" width={isLarge ? '80%' : '70%' } />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 1 : 2}>
            <Box>
              <Typography sx={{
                fontSize: isSmall ?  '1.6rem' : isMedium ? '2rem' :  '2.5rem',
                color:theme.palette.primary.main,
                fontWeight:700,
                marginBottom:'.5rem'
              }}> Get to Know Us</Typography>
              <Typography sx={{
                fontSize: isSmall? "1.1rem":'1.2rem',
                color:"white",
                fontWeight:400,
                marginBottom:'.5rem',fontStyle:"italic"
              }}> The Moshlay Creatives Team</Typography>
              <Typography sx={{
                fontSize: isSmall? "1rem":'1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'.5rem'
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portti tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum la lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus et 
              </Typography>
              <Typography sx={{
                fontSize: isSmall? "1rem":'1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'2rem'
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portt tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum lao lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus et 
              </Typography>
              <Box>
                <Button variant="outlined" 
                sx={{
                    color:'white',
                    fontSize:'1rem',
                    textTransform:'none'
                }}>Meet the Team</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default KnowUs;
