import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ContactHero = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "5% 10%",
          marginBottom:'2rem'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: isSmall ? '100%' : '50%',
          }}>
          <Typography
            sx={{
              fontSize: isSmall ? '2rem' : isMedium ? '3.5rem' : "5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign:'center',
              fontFamily: 'Montserrat',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign:'center',
              marginBottom:'5rem',
              fontFamily: 'Montserrat',
            }}
          >
          Have a project in mind? Ready to take your business to the next level? Let's connect! Contact us today for a free consultation. Our team of experts is eager to discuss your needs and provide tailored solutions.
          </Typography>
          {/* <Box>
            <img src="getintouch.svg" alt="" />
          </Box> */}

          {/* =================================ADD ANIMATION ================================ */}
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: 'fit-content',
        height: 'fit-content',
      }}
    >
      <img
        src="Frame2.svg"
        alt="Frame 1"
        style={{
          // position: 'absolute',
          marginBottom: '-1.2rem',
          animation: 'fade 2s infinite',
          animationDelay: '0s', // Starts immediately
        }}
      />
      <img
        src="Frame2.svg"
        alt="Frame 2"
        style={{
          // position: 'absolute',
          marginBottom: '-1.2rem',
          animation: 'fade 2s infinite',
          animationDelay: '3s', // Starts after 3s
        }}
      />
      <img
        src="Frame3.svg"
        alt="Frame 3"
        style={{
          // position: 'absolute',
          animation: 'fade 2s infinite',
          animationDelay: '6s', // Starts after 6s
        }}
      />
      <style>
        {`
          @keyframes fade {
            0% {
              opacity: 1; /* All images fully visible */
            }
            25% {
              opacity: 0.7; /* First image fades */
            }
            50% {
              opacity: 0.4; /* First and second images faded */
            }
            75% {
              opacity: 0.2; /* First, second, and third images faded */
            }
            100% {
              opacity: 1; /* All images back to full opacity */
            }
          }
        `}
      </style>
    </Box>


          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactHero;
