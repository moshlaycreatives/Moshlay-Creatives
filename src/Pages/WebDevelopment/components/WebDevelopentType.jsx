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
import { FiShoppingBag } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";
import React from "react";
import { Gradient } from "@mui/icons-material";
// import CareersHMQ from "./CareersJobDetails/CareersHMQ";

const WebDevelopmentType = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      careerlogo: "webdevtype1.png",
      careertitle: "Static/Dynamic Websites",
      carrerdes:
        "Static websites have fixed content, making them easy to create and maintain. However, they may lack the dynamic features and personalized experiences offered by dynamic websites, which use server-side scripting to generate content on the fly.",
    },
    {
      careerlogo: "webdevtype2.png",
      careertitle: "Social Networking Sites",
      carrerdes:
        "Social networking sites are online platforms that allow users to connect, communicate, and share information. They have become an integral part of modern life and business providing opportunities for socialization, networking, and entertainment.",
    },
    {
      careerlogo: "webdevtype3.png",
      careertitle: "E-Commerce Websites ",
      carrerdes:
        "These websites are designed to sell products or services online. They typically include features such as shopping carts, payment gateways, and product catalogs.",
    },
    {
      careerlogo: "webdevtype4.png",
      careertitle: "Single-Page Applications(SPAs)",
      carrerdes:
        "SPAs load all necessary files at once, providing a faster and more responsive user experience. They are often used for web applications and complex interactive websites.",
    },
    {
      careerlogo: "webdevtype5.png",
      careertitle: "Web Applications",
      carrerdes:
        "Web applications, also known as web apps, are software programs that run on a web server and are accessed through a web browser. They are typically built using programming languages like HTML, CSS, JavaScript, and server-side languages like PHP, Python, or Ruby.",
    },
    {
      careerlogo: "webdevtype6.png",
      careertitle: "App Applications",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
  ];
  return (
    <>
      {/* ==========================================HERO CARD PART ====================================================== */}

    
      <Box
        sx={{
          marginTop:isSmall ? '0rem': "1rem",
          padding: "4rem 10%",
          marginBottom:isSmall ? '3rem' : "4rem",
        backgroundImage: "linear-Gradient(to right  , #1c2844, #1c2844 )",

        }}
      >
        {/* ========================================================TEXT PART============================================= */}
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
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
            Types of Website Development
          </Typography>
          <Typography
            sx={{
              fontSize:isSmall ? "0.9rem" : "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '90%',
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing
            you achieve those goals. Is it quality website traffic you seek?
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ? 2:isMedium ? 4: 6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // justifyContent: "end",
                  // flexDirection: isSmall ? 'column' : 'row',
                  // padding:'1.5rem',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={row.careerlogo} alt=""  />
                </Box>

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
                    }}
                  >
                    {row.careertitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmall ?  '0.9rem': "1rem",
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

export default WebDevelopmentType;