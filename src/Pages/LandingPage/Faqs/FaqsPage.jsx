import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Faqs from "./Faqs";

const FaqsPage = () => {

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{
        padding:'5% 10% 3% 10%' 
      }}>
        <Box>
            <Typography sx={{
                fontSize:isSmall ? '1.6rem' : '2.5rem', fontWeight:'600' , textAlign:'center', marginBottom:'2rem',
                color:theme.palette.primary.main,
                fontFamily:'Montserrat'
            }}>
            Frequently Asked Questions
            </Typography>
        </Box>
        <Grid container  alignItems={"center"} spacing={5}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
           <Box width={"100%"} sx={{
            display:'flex',
            justifyContent:isMedium ? 'center': 'start'
           }}>
           <img src="faqs.svg" alt="" width={"100%"} />
           </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box>
                <Faqs/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FaqsPage;
