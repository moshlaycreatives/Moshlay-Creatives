import { ThemeContext } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const CareersHMQ = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
   
  return (
    <>
        <Box sx={{
          backgroundColor:theme.palette.primary.main,
          padding:'1.5rem',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          borderRadius:'10px',
          marginTop:'4rem'
        }}>
          <Box>
          <Typography sx={{
            color:'white',
            fontFamily:'Montserrat',
            fontSize:isSmall ? '1.6rem' : isMedium ? '2rem' : '2.5rem',
            fontWeight:600 
          }}>
          Have More Questions?
          </Typography>
          <Typography sx={{
            color:'white',
            fontFamily:'Inter',
            fontSize:'1rem',
            fontWeight:400 
          }}>
          Drop us a note and we’ll get back to you soon
          </Typography>
          </Box>
          <Button sx={{
            backgroundColor:'white',
            color:theme.palette.primary.main,
            padding:'1rem 2rem',
            fontSize:'1rem',
            fontFamily:500
          }}>
            Get in touch
          </Button>
        </Box>
    </>
  );
};

export default CareersHMQ;
