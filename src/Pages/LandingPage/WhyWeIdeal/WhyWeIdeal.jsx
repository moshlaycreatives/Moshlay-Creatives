import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const WhyWeIdeal = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Box marginBottom={"2rem"}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "6rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            What Makes Us The Ideal Software Development Company
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontSize: "1.1rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

             Some of the reasons why clients choose and recommend our software
            development services company
          </Typography>
        </Box>
        <Grid container spacing={20}>
          <Grid lg={6} md={6} sm={12} xs={12} item>
            <Box sx={{
                display:'flex',
                alignItems:"end",
                // position:'relative',
                width:'100%'
            }}>
              <img src="whyWeIdeal.svg" alt=""  width={"100%"}/>
              <Box sx={{
                display:'flex',
                flexDirection:"column",
                backgroundColor:theme.palette.primary.main,
                height:'85vh',
                gap:10, 
                borderRadius:'20px 0 20px 0', 
                padding:'1rem',
                marginLeft:'-10%'
              }}>
                <Typography sx={{
                    fontSize:'2.5rem', 
                    color:'white', 
                    fontWeight:'500'
                }}> 40%</Typography>
                 <Typography sx={{
                    fontSize:'2.5rem', 
                    color:'white', 
                    fontWeight:'500'
                }}> 50%</Typography>
                 <Typography sx={{
                    fontSize:'2.5rem', 
                    color:'white', 
                    fontWeight:'500'
                }}> 85%</Typography>
                 <Typography sx={{
                    fontSize:'2.5rem', 
                    color:'white', 
                    fontWeight:'500'
                }}> 97%</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} 
          sx={{
            display:'flex',
            alignItems:'end'
          }}>
            <Box>

              <Box sx={{
                display:'flex', 
                flexDirection:'column',
                gap:1
              }}>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    color: "white",
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography sx={{
                    fontSize:'1rem',
                    color:'white'
                }}> 
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"}/>
              </Box>

              <Box sx={{
                display:'flex', 
                flexDirection:'column',
                gap:1
              }}>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    color: "white",
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography sx={{
                    fontSize:'1rem',
                    color:'white'
                }}> 
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"}/>
              </Box>

              <Box sx={{
                display:'flex', 
                flexDirection:'column',
                gap:1
              }}>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    color: "white",
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography sx={{
                    fontSize:'1rem',
                    color:'white'
                }}> 
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"}/>
              </Box>

              <Box sx={{
                display:'flex', 
                flexDirection:'column',
                gap:1
              }}>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    color: "white",
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography sx={{
                    fontSize:'1rem',
                    color:'white'
                }}> 
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"}/>
              </Box>  
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyWeIdeal;
