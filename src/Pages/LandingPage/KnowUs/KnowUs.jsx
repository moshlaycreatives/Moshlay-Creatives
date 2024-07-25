import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const KnowUs = () => {
    const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#263238",
          padding:'2rem',
          marginTop:'5rem'
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                display:'flex', alignItems:"center",
                width:'100%'
            }}>
            <Box  sx={{ width:'100%'}}>
            <img src="knowus.svg" alt="" width={"100%"} />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography sx={{
                fontSize:'2.5rem',
                color:theme.palette.primary.main,
                fontWeight:700,
                marginBottom:'.5rem'
              }}> Get to Know Us</Typography>
              <Typography sx={{
                fontSize:'1.2rem',
                color:"white",
                fontWeight:400,
                marginBottom:'.5rem',fontStyle:"italic"
              }}> The Moshlay Creatives Team</Typography>
              <Typography sx={{
                fontSize:'1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'.5rem'
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portti tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum la lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus et magnis dis pa es, nascetur ridiculus mus Orci
                varius natoque penatibus et mag ent mont es, nascetur ridiculus
                mus,
              </Typography>
              <Typography sx={{
                fontSize:'1.1rem',
                color:'white',
                fontWeight:400,
                marginBottom:'2rem'
              }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                portt tum elit ut facilisis. Curabitur sit amet sagittis magna.
                Vestibulum lao lacus, vitae venenatis magna interdum a.
                Pellentesque vestibulum tortor sed mollis. Orci varius natoque
                penatibus et magnis dis part es, nascetur ridiculus mus Orci
                varius natoque penatibus et mag ent mont es, nascetur ridiculus
                mus,
              </Typography>
              <Box>
                <Button variant="outlined" 
                sx={{
                    color:'white',
                    fontSize:'1rem'
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
