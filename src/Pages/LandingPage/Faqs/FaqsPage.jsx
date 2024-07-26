import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Faqs from "./Faqs";

const FaqsPage = () => {

    const theme = useTheme();

  return (
    <>
      <Box sx={{
        padding:'2% 10%'
      }}>
        <Box>
            <Typography sx={{
                fontSize:'2rem', fontWeight:'700' , textAlign:'center', marginBottom:'2rem',
                color:theme.palette.primary.main
            }}>
            Frequently Asked Questions
            </Typography>
        </Box>
        <Grid container  alignItems={"center"} spacing={5}>
          <Grid item lg={4.5} md={4.5} sm={12} xs={12}>
           <Box width={"100%"}>
           <img src="faqs.svg" alt="" width={"100%"} />
           </Box>
          </Grid>
          <Grid item lg={7.5} md={7.5} sm={12} xs={12}>
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
