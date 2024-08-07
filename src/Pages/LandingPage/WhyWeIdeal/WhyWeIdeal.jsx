import {
  Box,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { isAsyncThunkAction } from "@reduxjs/toolkit";
import React from "react";

const WhyWeIdeal = () => {
  const theme = useTheme();
  const isfour = useMediaQuery('(max-width:400px)');
  const isfour50 = useMediaQuery('(max-width:450px)');
  const isfive = useMediaQuery('(max-width:500px)');
  const isfive50 = useMediaQuery('(max-width:550px)');
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isseven = useMediaQuery('(max-width:700px)');
  const isEight = useMediaQuery('(max-width:800px)');
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isTen = useMediaQuery('(max-width:1000px)');
  const istwelve80 = useMediaQuery('(max-width:1280px)');
  const istwelve = useMediaQuery('(max-width:1200px)');
  const isLarge = useMediaQuery('(max-width:1400px)');
  const isExtraLarge = useMediaQuery('(max-width:1500px)');

  return (
    <>
      <Box
        sx={{
          // margin:'2rem 0rem',
          padding: "0% 10%",
        }}
      >
        <Box marginBottom={"2rem"}>
          <Typography
            // variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontSize: isSmall ? "1.7rem" : isMedium ? "2rem" : "2.5rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "6rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily:'Montserrat',
            fontWeight:600, 
            }}
          >
            What Makes Us The Ideal Software Development Company
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: isMedium ? "1rem" : "1.1rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily:'Montserrat',
            fontWeight:400, 
            }}
          >
            Some of the reasons why clients choose and recommend our software
            development services company
          </Typography>
        </Box>

        <Grid container spacing={ isMedium ? 5 : istwelve ? 5 : isExtraLarge ? 20 :  5} alignItems={'end'}>
          <Grid item lg={6} md={12} sm={12} xs={12}  >
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: istwelve ? 'center' : 'start',
                width: "100%",
              }}
            >
              <img src="whyWeIdeal.svg" alt="" style={{
                width: isMedium ? '100%' : istwelve ? '50%' : istwelve80 ? '100%' : isLarge ? '95%' : isExtraLarge ? '85%' : '75%'
              }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  backgroundColor: theme.palette.primary.main,
                  height: "85%",
                  // gap: isSmall ? 5 : isMedium ? 7 :  11,
                  gap:11,
                  borderRadius: "20px 0 20px 0",
                  padding: "1rem",
                  marginLeft: "-10%",
                  display: istwelve ? "none" : "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                    fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  50%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  85%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  97%
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  backgroundColor: theme.palette.primary.main,
                  height: "100%",
                  // gap: isSmall ? 5 : isMedium ? 7 :  11,
                  gap:8,
                  borderRadius: "20px 0 20px 0",
                  padding: "1rem",
                  // marginLeft: "-10%",
                  display: istwelve ? "flex" : "none",
                  marginRight:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                    fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  50%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat'
                  }}
                >
                  {" "}
                  85%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",fontFamily:'Montserrat',
                    marginBottom:'30%'
                  }}
                >
                  {" "}
                  97%
                </Typography>
              </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                    fontFamily:'Montserrat',
                   fontWeight:500, 
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:400,
                  }}
                >
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:500, 
                  }}
                >
                  Successful Projects
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:400, 
                  }}
                >
                  We have completed over 20 successful projects demonstrating
                  our capability to deliver software solutions that meet and
                  exceed client expectations.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                 gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:500, 
                  }}
                >
                  Faster Delivery
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:400, 
                  }}
                >
                  Our team can be expanded according to your project
                  requirements in order to ensure faster delivery of your
                  project.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                    fontFamily:'Montserrat',
                    fontWeight:500, 
                  }}
                >
                  Client Retention Rate
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                    
                    fontFamily:'Montserrat',
                    fontWeight:400, 
                  }}
                >
                  97% of our clients who chose us for bespoke software
                  development continue to hire us for their additional projects,
                  which demonstrates how well we serve our clients.
                </Typography>
                <Divider color={"white"} />
              </Box>
            </Box>
          </Grid>  */}
          

          {/* test  */}

          <Grid
  item
  lg={6}
  md={12}
  sm={12}
  xs={12}
  sx={{
    display: "flex",
    alignItems: "flex-start", // Ensure alignment at the top for large screens
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Align content to the start
      backgroundColor: theme.palette.primary.main,
      height: "100%",
      borderRadius: "20px 0 20px 0",
      padding: isSmall ? '.5rem .5rem .5rem .5rem' :  "1rem 1rem 2rem 1rem",
      gap: isfour ? 27 : isfour50 ? 22  : isfive ? 18 : isfive50 ? 15.5 : isSmall ? 15 : isseven ? 14 : isEight ? 13 : isMedium ? 12 : isTen ? 10 :  8, // Adjust gap to maintain spacing between percentages
      paddingBottom : isfour ? '9rem' : isfour50 ? '8rem' : isfive ? '7rem' : isfive50 ? '7rem' : isSmall ? '6rem' : isseven ? '4rem' : isEight ? '3rem' : isMedium ? '3rem' : '2rem' ,
      display: istwelve ? 'flex' : 'none' , // Show only on small screens and above
      marginRight: '1rem',
    }}
  >
    <Typography
      sx={{
        fontSize: isSmall ? '1.8rem' : isMedium ? '2rem' : "2.5rem",
        color: "white",
        fontWeight: "500",
        fontFamily: 'Montserrat',
      }}
    >
      40%
    </Typography>
    <Typography
      sx={{
        fontSize: isSmall ? '1.8rem' : isMedium ? '2rem' : "2.5rem",
        color: "white",
        fontWeight: "500",
        fontFamily: 'Montserrat',
      }}
    >
      50%
    </Typography>
    <Typography
      sx={{
        fontSize: isSmall ? '1.8rem' : isMedium ? '2rem' : "2.5rem",

        color: "white",
        fontWeight: "500",
        fontFamily: 'Montserrat',
      }}
    >
      85%
    </Typography>
    <Typography
      sx={{
        fontSize: isSmall ? '1.8rem' : isMedium ? '2rem' : "2.5rem",

        color: "white",
        fontWeight: "500",
        fontFamily: 'Montserrat',
        marginBottom: '30%',
      }}
    >
      97%
    </Typography>
  </Box>

  <Box sx={{ flex: 1 }}>
    {[
      {
        title: "Happy Customers",
        text: "A wide client base across various industries is proof of our ability to deliver remarkable software solutions, and we endeavor to meet the needs of every client.",
      },
      {
        title: "Successful Projects",
        text: "We have completed over 20 successful projects demonstrating our capability to deliver software solutions that meet and exceed client expectations.",
      },
      {
        title: "Faster Delivery",
        text: "Our team can be expanded according to your project requirements in order to ensure faster delivery of your project.",
      },
      {
        title: "Client Retention Rate",
        text: "97% of our clients who chose us for bespoke software development continue to hire us for their additional projects, which demonstrates how well we serve our clients.",
      },
    ].map(({ title, text }, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: '1rem',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
            color: "white",
            fontFamily: 'Montserrat',
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "white",
            fontFamily: 'Montserrat',
            fontWeight: 400,
          }}
        >
          {text}
        </Typography>
        <Divider color={"white"} />
      </Box>
    ))}
  </Box>
</Grid>



        </Grid>
      </Box>
    </>
  );
};

export default WhyWeIdeal;
