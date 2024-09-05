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

const WebDevelopmentHero = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      careerlogo: "webdev1.svg",
      careertitle: "Research",
      carrerdes:
        "In-depth analysis of your business goals, target audience, and competitors.  For the Creation of a comprehensive project plan",
    },
    {
      careerlogo: "webdev2.svg",
      careertitle: "Web Designing",
      carrerdes:
        "Designing visually appealing and user-friendly interfaces. Development of wireframes and mockups.",
    },
    {
      careerlogo: "webdev3.svg",
      careertitle: "Web Development",
      carrerdes:
        "Building the website's structure and functionality using cutting-edge technologies. integration of essential features.",
    },
    {
      careerlogo: "webdev4.svg",
      careertitle: "Web Analysis and Testing",
      carrerdes:
        "Rigorous testing to ensure optimal performance and compatibility. Implementation of analytics tools to track website performance.",
    },
    {
      careerlogo: "webdev5.svg",
      careertitle: "Launching",
      carrerdes:
        "Deployment of the website on a secure and reliable server. Search engine optimization (SEO) to improve visibility.",
    },
    {
      careerlogo: "webdev6.svg",
      careertitle: "Website Maintenance",
      carrerdes:
        "Ongoing updates and maintenance to keep your website secure and up-to-date. Technical support and troubleshooting services.",
    },
  ];
  return (
    <>
      {/* ==========================================HERO CARD PART ====================================================== */}

      <Box
        sx={{
          padding: "3rem 10%",
          backgroundColor: "#1c2844",
          backgroundImage: "url(webdevheadmask.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100%",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", md: "100%" },
          }}
        >
          <Button
            // variant="contained"
            sx={{
              padding: isSmall ?  "0.5rem 1rem" : "0.5rem 1.5rem",
              fontSize: isSmall ? "0.9rem" :"1rem",
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontFamily: "montserrat",
              backgroundColor: "#4e6645",
              border:'1px solid #4e6645',
              textTransform: "none",
              marginBottom:'0.5rem',
              transition:'.2s',
              '&:hover':{
                color:'white', 
                border:'1px solid white',
                // transition:'1s'
              }
            }}
          >
            Digital Solutions
          </Button>
          <br />
          <Typography
            sx={{
              fontSize: isSmall ? "1.8rem" : isMedium ? "2.5rem" : "3rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              marginBottom:'0.5rem',
            }}
          >
            {" "}
            Web Development
          </Typography>
          {/* <br /> */}
          <Typography
            sx={{
              fontSize:isSmall ? "0.9rem": "1rem",
              fontWeight: 400,
              color: "white",
              fontFamily: "Montserrat",
              //   textAlign: "center",
            }}
          >
            Your digital vision, our expertise. Moshlay Creatives bridges the
            gap between front-end, back-end, and architecture to deliver
            tailored web solutions that drive your business forward. With a
            proven track record, we'll craft innovative software that exceeds
            your expectations. Contact us to discuss your project
          </Typography>
          <br />
          <br />
          <Button
            variant="outlined"
            sx={{
              padding: isSmall ?  "0.5rem 1rem" : "0.5rem 1.5rem",
              fontSize: isSmall ? "0.9rem" :"1rem",
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontFamily: "montserrat",
              // backgroundColor:'#4e6645',
              textTransform: "none",
              transition:'0.2s',
              "&:hover":{
                color:'white',
                background:theme.palette.primary.main, border:'none'
              }
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Box>
      </Box>
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
            }}
          >
            {" "}
            Our Process of Web Development Services
          </Typography>
          <Typography
            sx={{
              fontSize:isSmall ? "0.9rem" :  "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing solutions to help you achieve
            those goals. Is it quality website traffic you seek?
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ? 2 : isMedium ? 4: 6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
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
                  <img src={row.careerlogo} alt="" width={"45rem"} height={'auto'} />
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
                      fontSize: isSmall ? "1.1rem" : "1.5rem",
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
                      fontSize: isSmall ? "0.9rem" : "1rem",
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

export default WebDevelopmentHero;
