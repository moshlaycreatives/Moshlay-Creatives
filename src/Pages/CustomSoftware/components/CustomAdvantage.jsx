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
        "At Moshlay Creatives, we pride ourselves on our team of highly skilled engineers who possess a deep understanding of software development best practices. Our engineers are dedicated to delivering high-quality, innovative solutions that meet the highest standards of excellence.",
    },
    {
      careerlogo: "customadvantage2.png",
      careertitle: "Agile Development",
      carrerdes:
        "We embrace an agile methodology to ensure flexibility, responsiveness, and continuous improvement throughout the development process. Our agile approach allows us to adapt to changing requirements, deliver value incrementally, and minimize risks.",
    },
    {
      careerlogo: "customadvantage3.png",
      careertitle: "Future-Ready Products",
      carrerdes:
        "We design and develop products that are not only functional today but also equipped to meet the challenges of tomorrow. Our focus on emerging technologies and industry trends ensures that our solutions remain relevant and competitive in the long run.",
    },
    {
      careerlogo: "customadvantage4.png",
      careertitle: "Operational Efficiency",
      carrerdes:
        "We optimize our development processes to maximize efficiency and minimize costs. Our streamlined workflows, automation tools, and best practices enable us to deliver projects on time and within budget.",
    },
    {
      careerlogo: "customadvantage5.png",
      careertitle: "Customer Experience",
      carrerdes:
        "Customer satisfaction is our top priority. We work closely with our clients to understand their unique needs and deliver solutions that exceed their expectations. Our commitment to excellent customer service ensures a positive and collaborative partnership.",
    },
    {
      careerlogo: "customadvantage6.png",
      careertitle: "DevOps Mindset",
      carrerdes:
        " We adopt a DevOps approach to foster collaboration between development and operations teams. This enables us to deliver products faster, improve quality, and ensure continuous deployment and maintenance. Our DevOps mindset ensures that our solutions are reliable, scalable, and maintainable.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: isSmall ? '-1.5rem' : "-1rem",
          padding: "0 10%",
          marginBottom: isSmall ? '3rem' : "4rem",
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
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              fontFamily: "montserrat",
            }}
          >
           Hire our experts for your business problems. In the process of the fulfillment of your requirements, you experienced the following advantages that make us the perfect selection for your business.
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ? 3:isMedium ? 4: 6}>
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

export default CustomAdvantage;
