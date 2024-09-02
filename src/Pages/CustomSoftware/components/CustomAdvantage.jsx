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

const CustomAdvantage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      careerlogo: "customadvantage1.png",
      careertitle: "Engineering Excellence",
      carrerdes:
        "In-depth analysis of your business goals, target audience, and competitors.  For the Creation of a comprehensive project plan",
    },
    {
      careerlogo: "customadvantage2.png",
      careertitle: "Agile Development",
      carrerdes:
        "Designing visually appealing and user-friendly interfaces. Development of wireframes and mockups.",
    },
    {
      careerlogo: "customadvantage3.png",
      careertitle: "Future-Ready Products",
      carrerdes:
        "Building the website's structure and functionality using cutting-edge technologies. integration of essential features.",
    },
    {
      careerlogo: "customadvantage4.png",
      careertitle: "Operational Efficiency",
      carrerdes:
        "Rigorous testing to ensure optimal performance and compatibility. Implementation of analytics tools to track website performance.",
    },
    {
      careerlogo: "customadvantage5.png",
      careertitle: "Customer Experience",
      carrerdes:
        "Deployment of the website on a secure and reliable server. Search engine optimization (SEO) to improve visibility.",
    },
    {
      careerlogo: "customadvantage6.png",
      careertitle: "DevOps Mindset",
      carrerdes:
        "Ongoing updates and maintenance to keep your website secure and up-to-date. Technical support and troubleshooting services.",
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
              marginTop: "4rem",
              fontFamily: "montserrat",
            }}
          >
            {" "}
            Our Advantage
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
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

        <Grid container spacing={6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isSmall ? 'center' :"start",
                  justifyContent: "end",
                  // flexDirection: isSmall ? 'column' : 'row',
                  // padding:'1.5rem',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: isSmall ? 'center' : "start",
                  }}
                >
                  <img src={row.careerlogo} alt="" width={"15%"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:isSmall ? 'center' : "start",
                    // justifyContent:'center'
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isSmall ? "1.2rem" : "1.5rem",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      textAlign: isSmall ? 'center' : "start",
                    }}
                  >
                    {row.careertitle}
                  </Typography>
                  <br />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      textAlign: isSmall ? 'center' : "start",
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

export default CustomAdvantage;
