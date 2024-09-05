import {
    Box,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
  import React from "react";
  // import { GoDotFill } from "react-icons/go";
  import { RxDotFilled } from "react-icons/rx";
  
  const AppDevelopmentSteps = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  
    const listData = [
      { dot: <RxDotFilled />, title: "A shared understanding of project objectives" },
      { dot: <RxDotFilled />, title: "Business requirements transformed into functional" },
      { dot: <RxDotFilled />, title: "The initial vision of the architecture of the project" },
      {
        dot: <RxDotFilled />,
        title: "A project plan that includes risks and budgets",
      },
      {
        dot: <RxDotFilled />,
        title: "A clear product strategy and development roadmap",
      },
      // {
      //   dot: <RxDotFilled />,
      //   title: "Ideation - Market Research - Wireframing - Prototyping",
      // },
      // {
      //   dot: <RxDotFilled />,
      //   title: "Dedicated Content Management System Development",
      // },
      // {
      //   dot: <RxDotFilled />,
      //   title: "No-code Development & Low-code Development",
      // },
      
    ];
  
    return (
      <>
      <Box sx={{
        padding:isSmall ? '2rem 10%' : '3rem 10%' ,
        backgroundColor:'#1c2844'
      }}>
      <Box sx={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              // justifyContent:'center'
              
          }}>
            <Typography
              sx={{
                fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
                fontWeight: 600,
                color: theme.palette.primary.main,
                textAlign: "center",
                // marginTop:'4rem',
                fontFamily: "montserrat",
              }}
            >
              {" "}
              KEY STEPS IN OUR MOBILE APP DEVELOPMENT 
PROCESS
            </Typography>
            <Typography
              sx={{
                fontSize: isSmall ? "0.9rem" :"1rem",
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                fontFamily: "montserrat",
              }}
            >
              Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing
              you achieve those goals. Is it quality website traffic you seek?
            </Typography>
          </Box>
          {/* <br /> */}
          {/* <br /> */}
        <Box
          sx={{
            
          }}
        >
          <Grid container justifyContent={"center"} direction={"row-reverse"}>
            <Grid Item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMedium ? 'center' : 'end',
                  width: "100%",
                  marginBottom:isMedium ? '2rem' : "0rem",

                }}
              >
                <img src="appdevsteps.png" alt="" width={"85%"} />
              </Box>
            </Grid>
            <Grid Item lg={4} md={4} sm={12} xs={12}>
  
              
  
              {listData.map((row, id) => (
                <Box
                  key={IDBDatabase}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ color: theme.palette.primary.main }}>
                    {row.dot}
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: isSmall ? "0.9rem" :"1rem",
                      fontWeight: isSmall ? "400" : "400",
                      color: "white",
                    }}
                  >
                    {row.title}
                  </Typography>
                </Box>
              ))}
             
            </Grid>
          </Grid>
  
          
        </Box>
      </Box>
      </>
    );
  };
  
  export default AppDevelopmentSteps;
  