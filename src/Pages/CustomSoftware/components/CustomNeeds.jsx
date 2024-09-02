import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const CustomNeeds = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{
        padding:'3% 10%'
    }}>
      <Grid container spacing={isMedium ? 1: 5}>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom:isSmall ?'-.5rem' :'-1rem'
            }}
          >
            WHY PARTNER
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom:isSmall ?'-.5rem' :'-1rem'
            }}
          >
            WITH Moshlay
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom:isSmall ?'-.5rem' :'-1.2rem'
              
            }}
          >
            FOR YOUR
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background:
               isSmall  ?  "linear-gradient(to bottom, transparent 50%, #98c447 50%)" : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
               height: isMedium ?'15%' :'15%',
              padding:isSmall ?  '0rem': "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom: isSmall ?  'orem':'-.8rem'
            }}
          >
            Custom
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background:
               isSmall  ?  "linear-gradient(to bottom, transparent 60%, #98c447 50%)" : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
               height: isMedium ?'15%' :'15%',
              padding: "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom: isSmall ?  'orem':'-.8rem'
            }}
          >
            Software
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background:
              isSmall  ?  "linear-gradient(to bottom, transparent 60%, #98c447 50%)" : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
              height: isMedium ?'15%' :'15%',
              padding: "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom:isSmall ?  'orem': '-.3rem'
            }}
          >
            Development
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
            }}
          >
            NEEDS?
          </Typography>
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12}>
      <Box  sx={{
        display:'flex', 
        alignItems:'center',
         flexDirection:'column',
        justifyContent:'center', height:'100%'
      }}>
      <Typography
          sx={{
            color: "white",
            fontSize: isSmall ? "0.9rem" : "1rem",
            fontWeight: 400,
            fontFamily: "Montserrat",
            marginBottom: isSmall ? '1rem': '2rem'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
          felis non quam egestas sagittis. Sed gravida nulla tellus, eu aliquam
          m i vulputate at. Proin nunc magna, varius vel faucibus id, ornare
          dignissi m sem. Nullam at molestie justo, ut fringilla dui. Nam
          convallis ipsu m sodales augue consectetur, sed aliquam tortor
          aliquam. Suspen disse eu consequat sem. Donec ac gravida metus, non
          tincidunt null a. Pellentesque ullamcorper at felis ut ornare.
        </Typography>
        
        <Typography
          sx={{
            color: "white",
            fontSize: isSmall ? "0.9rem" : "1rem",
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
          felis non quam egestas sagittis. Sed gravida nulla tellus, eu aliquam
          m i vulputate at. Proin nunc magna, varius vel faucibus id, ornare
          dignissi m sem. Nullam at molestie justo, ut fringilla dui. Nam
          convallis ipsu m sodales augue consectetur, sed aliquam tortor
          aliquam. Suspen disse eu consequat sem. Donec ac gravida metus, non
          tincidunt null a. Pellentesque ullamcorper at felis ut ornare.
        </Typography>
      </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default CustomNeeds;
