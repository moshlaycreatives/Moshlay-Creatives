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

const QualityProcess = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      careerlogo: "Qaprocess1.png",
      careertitle: "Expedite Delivery",
      carrerdes:
        "Our agile QA process is designed to accelerate the development and testing cycle, ensuring faster time-to-market for your software products. By integrating quality assurance activities throughout the development process, we identify and address issues early on, preventing costly delays and rework.",
    },
    {
      careerlogo: "Qaprocess2.png",
      careertitle: "Reduce Costs",
      carrerdes:
        "Our agile approach helps you save money by minimizing the risk of costly defects discovered late in the development cycle. By conducting continuous testing and feedback loops, we identify and resolve issues proactively, reducing the need for expensive rework and mitigating potential financial losses.",
    },
    {
      careerlogo: "Qaprocess3.png",
      careertitle: "Improve Security",
      carrerdes:
        "Security is a top priority in our agile QA process. We incorporate security testing throughout the development lifecycle to identify and address vulnerabilities early on. By following best practices and using advanced security tools, we help ensure the protection of your sensitive data and systems.",
    },
    // {
    //   careerlogo: "customadvantage4.png",
    //   careertitle: "Operational Efficiency",
    //   carrerdes:
    //     "Rigorous testing to ensure optimal performance and compatibility. Implementation of analytics tools to track website performance.",
    // },
    // {
    //   careerlogo: "customadvantage5.png",
    //   careertitle: "Customer Experience",
    //   carrerdes:
    //     "Deployment of the website on a secure and reliable server. Search engine optimization (SEO) to improve visibility.",
    // },
    // {
    //   careerlogo: "customadvantage6.png",
    //   careertitle: "DevOps Mindset",
    //   carrerdes:
    //     "Ongoing updates and maintenance to keep your website secure and up-to-date. Technical support and troubleshooting services.",
    // },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "0 10%",
          marginBottom: "3rem",
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
              marginTop:isSmall ? "1rem": "2rem",
              fontFamily: "montserrat",
            }}
          >
            {" "}
            Our Agile QA Process
          </Typography>
          {/* <Typography
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
          </Typography> */}
        </Box>
        <br />
        <br />

        {/* ==============================IMAGE======================================== */}

        <Box sx={{width:'100%',marginBottom:'3rem' , marginTop: isSmall ? '0rem':'2rem' }}>
          <img src="/Qaprocess1.svg" alt="" style={{
            width:'100%', height:'100%'
          }}/>
        </Box>

        
        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ? 4:6}>
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
                      fontSize: isSmall ? "0.9rem" :"1rem",
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

export default QualityProcess;
