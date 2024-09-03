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

const UiUxCompany = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
    //   careerlogo: "webdev1.svg",
      careertitle: "UI & UX Consulting" ,
      carrerdes:
        "We conduct in-depth user research to understand your target audience and provide strategic recommendations for improving user experience.",
    },
    {
    //   careerlogo: "webdev2.svg",
      careertitle: "Website Design",
      carrerdes:
        "We create visually appealing, responsive websites optimized for various devices. Our focus is on seamless navigation, intuitive user flows, and user-centered design.",
    },
    {
    //   careerlogo: "webdev3.svg",
      careertitle: "Mobile App Design",
      carrerdes:
        "We design intuitive and engaging mobile app interfaces tailored to specific platforms. We prioritize user experience, accessibility, and performance optimization.",
    },
    {
    //   careerlogo: "webdev4.svg",
      careertitle: "Visual Design",
      carrerdes:
        "Our designers develop visually appealing and consistent design elements, ensuring brand consistency across all digital touchpoints.",
    },
    {
    //   careerlogo: "webdev5.svg",
      careertitle: "Interaction Design",
      carrerdes:"We conduct thorough testing to identify and address usability issues, ensure compatibility, and validate design effectiveness.",
    },
    {
    //   careerlogo: "webdev6.svg",
      careertitle: "UI Testing",
      carrerdes:
        "In this phase, design takes center stage. Our Web designers use their creativity to create  layouts, colorpalettes, and typography.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "0 10%",
          marginBottom: "4rem",
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
              marginTop: "2rem",
              fontFamily: "montserrat",     
              marginBottom:'0.5rem'
            }}
          >
            {" "}
            UI & UX Design Company
          </Typography>
          
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              fontFamily: "montserrat",
              marginBottom:isSmall ?'2rem' :'4rem'
            }}
          >
           We specialize in delivering exceptional user experiences through our comprehensive UI & UX design services.
          </Typography>
        </Box>
        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ? 3 : 6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                //   justifyContent: "end", 
                  // flexDirection: isSmall ? 'column' : 'row',
                  // padding:'1.5rem',
                  gap: 2,
                }}
              >

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
                      color: theme.palette.primary.main,
                      fontSize: isSmall ? "1.2rem" : "1.5rem",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      textAlign: "center",
                      marginBottom:'.6rem'
                    }}
                  >
                    {row.careertitle}
                  </Typography>
                  <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
            <Divider sx={{backgroundColor:theme.palette.primary.main, height:'2.3px' ,color:'red', width:'30%', marginBottom:'.6rem'}}/>
          </Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      textAlign: "center",
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

export default UiUxCompany;
