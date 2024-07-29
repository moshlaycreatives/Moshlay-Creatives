import { Box, Button, Grid, Typography, useTheme,useMediaQuery } from "@mui/material";
import React from "react";

const ContactUs = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

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
            <Box sx={{ width: "100%" }}>
              <img src="rocket.svg" alt="" width={"100%"} />
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
                }}
              >
                You have a vision. We have a team to get you there.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.9rem",
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
                  fontSize: "1.1rem",
                  color: "white",
                  fontWeight: 600,
                  marginBottom: ".5rem",
                }}
              >
                +92 (308) 5465788
              </Typography>
              <Typography
                sx={{
                  fontSize: "2.5rem",
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
                    textTransform:'none'
                  }}
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
