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

const UiUxDesignHero = () => {
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
              border: "1px solid #4e6645",
              textTransform: "none",
              marginBottom:'0.5rem',
              transition: ".2s",
              "&:hover": {
                color: "white",
                border: "1px solid white",
                // transition:'1s'
              },
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
            UI & UX Design
          </Typography>
          {/* <br /> */}
          <Typography
            sx={{
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: 400,
              color: "white",
              fontFamily: "Montserrat",
              //   textAlign: "center",
            }}
          >
            Need a digital platform that stands out? Our UI/UX experts will
            craft a captivating design tailored to your audience. Let's build a
            user-friendly experience that sets you apart. Contact us today to
            discuss your project.
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
              transition: "0.2s",
              "&:hover": {
                color: "white",
                background: theme.palette.primary.main,
                border: "none",
              },
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          // marginTop: "1rem",
          padding: "1rem 10%",
          // marginBottom: "4rem",
        }}
      >
        {/* =============================================LEVERAGE============================================================= */}
        <Box padding={isSmall ? "1.5rem 0rem" : "2rem 0rem"}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: "600",
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            Leverage Our Expertise in UI & UX Design Services
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              padding: isSmall ?  "0.5rem 1rem" : "0.5rem 1.5rem",
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: "400",
              color: "white",
              textAlign: "center",
              marginTop:'0.5rem'
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing so you achieve those goals. Is
            it quality website traffic you seek? With our content marketing and
            the right kind of visitors you want frequenting your website.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UiUxDesignHero;
