import { Box, Button, Grid, Typography, useTheme , useMediaQuery} from "@mui/material";
import React from "react";

const KnowUs = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery('(max-width:1400px)');
  const isEleven50 = useMediaQuery('(max-width:1150px)');

  return (
    <>
      <Box
        sx={{
          // width: "100%",
          backgroundColor: "#1c2844",
          marginTop:'5rem',
          padding:isMedium ? '5% 10%' : '2% 10%',

        }}
      >
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 2 : 1} sx={{
                display:'flex', alignItems:"center",
                justifyContent: isMedium ? 'center' : 'start',
                width:'100%'
            }}>


<Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: isMedium ? 'center' : 'start',
        '& img': {
          width: isMedium ? '70%' : isEleven50 ? '100%' : isLarge ? '80%' : '70%',
          animation: 'rotation 10s infinite linear', // Apply animation
        },
        '@keyframes rotation': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    >
      <img src="knowus.svg" alt="description" />
    </Box>


          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 1 : 2}>
            <Box>
              <Typography sx={{
                fontSize: isSmall ?  '1.6rem' : isMedium ? '2rem' :  '2.5rem',
                color:theme.palette.primary.main,
                fontWeight:600,
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}> Get to Know Us</Typography>
              <Typography sx={{
                fontSize: isSmall? "1.1rem":'1.2rem',
                color:"white",
                fontWeight:400,
                marginBottom:'.5rem',
                fontStyle:"italic",
                fontFamily:'Montserrat'
              }}> The Moshlay Creatives Team</Typography>
              <Typography sx={{
                fontSize: isSmall? "1rem":'1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portti tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum la lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus et 
              </Typography>
              <Typography sx={{
                fontSize: isSmall? "1rem":'1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'2rem',
                fontFamily:'Montserrat'
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
                    fontFamily:'Montserrat',
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
