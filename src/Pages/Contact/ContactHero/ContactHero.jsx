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
              fontSize: isSmall ? '2rem' : isMedium ? '3rem' : "4rem",
              fontWeight: 700,
              color: "white",
              textAlign:'center'
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
              marginBottom:'5rem'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            porttitor fermentum elit ut facilisis. Curabitur sit amet sagittis
            magna. porttitor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Typography>
          <Box>
            <img src="getintouch.svg" alt="" />
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactHero;
