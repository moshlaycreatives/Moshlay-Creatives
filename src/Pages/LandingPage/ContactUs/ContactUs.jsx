import { Box, Button, Grid, Typography, useTheme,useMediaQuery, keyframes } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ContactUs = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery('(max-width:1400px)');


  const translateYAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
`;

  return (
    <>
      <Box
        sx={{
            backgroundImage: 'url(contactusback.png)',
            // backgroundColor:'red',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding:isMedium ? '5% 10%' : '2% 10%',
          // marginTop: "3rem",
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            order={isMedium ? 2 : 1}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", animation: `${translateYAnimation} 2s linear infinite`, }}>
              <img src="rocket2.svg" alt="" width={ isLarge ? '100%' : '90%'} />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 1 : 2}>
            <Box sx={{
                display:'flex',
                // justifyContent:'center',
                flexDirection:'column',
                alignItems:'center',
                
            }}>
              <Typography
                sx={{
                  fontSize: isSmall ? '1.6rem' : isMedium ? '2rem' : '3rem',
                  color: 'white',
                  fontWeight: 700,
                  marginBottom: ".5rem",
                  textAlign: "center",
                  fontFamily:'Montserrat'
                }}
              >
                You have a vision. We have a team to get you there.
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: 400,
                  marginBottom: ".5rem",
                  fontStyle: "italic",
                  fontFamily:'Moon Dance'
                }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "white",
                  fontWeight: 600,
                  marginBottom: ".5rem",
                }}
              >
                +92 (308) 5465788
              </Typography>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: 400,
                  marginBottom: "1rem",
                  fontFamily:'Moon Dance'
                }}
              >
                or
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "1rem",
                    backgroundColor:'white',
                    textTransform:'none',
                    fontFamily:'Montserrat',
                    fontWeight:500
                  }}
                  onClick={()=>navigate('/contact')}
                >
                  Send A Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUs;
