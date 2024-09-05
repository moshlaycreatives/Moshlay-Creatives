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
  Divider,
} from "@mui/material";
import { FiShoppingBag } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";
import React from "react";
import { Gradient } from "@mui/icons-material";
// import CareersHMQ from "./CareersJobDetails/CareersHMQ";

const UiUxServices = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
    //   careerlogo: "webdev1.svg",
      careertitle: "Android App Development" ,
      carrerdes:
        "Our skilled Android developers create high-performance, visually appealing, and user-friendly apps using the latest technologies and frameworks.",
    },
    {
    //   careerlogo: "webdev2.svg",
      careertitle: "Delivering Top-Notch Solutions",
      carrerdes:
        "We focus on creating intuitive interfaces, engaging interactions, and seamless user experiences to exceed your expectations and drive business growth.",
    },
    {
    //   careerlogo: "webdev3.svg",
      careertitle: "User Interacting Through App Platform:",
      carrerdes:
        "Our UI & UX design ensures effortless user interaction with intuitive navigation, clear call-to-actions, and visually appealing elements.  ",
    },
    {
    //   careerlogo: "webdev4.svg",
      careertitle: "Customer Support and UI Testing",
      carrerdes:
        "We provide comprehensive customer support and conduct rigorous UI testing to ensure your app functions flawlessly and delivers a seamless user experience.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop:  "1rem",
          padding: isSmall ? "2rem 10%" : "3rem 10%",
          marginBottom: "4rem",
          // background:'#323d56
          backgroundImage:'url(/uiuxservicesbg.png)',
          backgroundPosition:'center', 
          backgroundRepeat:'no-repeat', 
          backgroundSize:'cover',
        }}
      >
        {/* ========================================================TEXT PART============================================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent:'center'
          }}
        >
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
            //   marginTop: "2rem", 
              fontFamily: "montserrat",     
            }}
          >
            {" "}
            What Makes Our UI & UX Design and Development
            Services Stunning?
          </Typography>
          <Typography
            sx={{
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              fontFamily: "montserrat",
            }}
          >
           Moshlay Creatives is committed to delivering exceptional user experiences. Our UI & UX design and development services are crafted with meticulous attention to detail, ensuring your app stands out.
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={2}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  backgroundColor:'#646c7ca7',
                  padding:isSmall ? '1rem' : '2rem',
                  borderBottom:'5px solid white',
                  gap: 2,
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    // justifyContent:'center'
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: isSmall ? "1.1rem" : "1.5rem",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                    //   textAlign: "center",
                    }}
                  >
                    {row.careertitle}
                  </Typography>
                  <br />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmall ? "0.9rem" :"1rem",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                    //   textAlign: "center",
                    }}
                  >
                    {row.carrerdes}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default UiUxServices;
