import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BlogsCard from "./BlogsCard";

const BlogsHero = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "5% 10%",
          marginBottom: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: isSmall ? "100%" : "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: isSmall ? "2rem" : isMedium ? "3.5rem" : "5rem",
                fontWeight: 600,
                color: theme.palette.primary.main,
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              Blogs
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                marginBottom: "5rem",
                fontFamily: "Montserrat",
              }}
            >
              Join us on a journey of knowledge and discovery. Explore our blog
              section to read more about our services, industry trends, and
              valuable insights.
            </Typography>

            {/* <Box sx={{
            display:'flex',
            flexDirection:'column',
          }}>
            <img src="Frame1.svg" alt=""  style={{marginBottom:'-1.2rem'}}/>
            <img src="Frame2.svg" alt="" style={{marginBottom:'-1.2rem'}}/>
            <img src="Frame3.svg" alt="" />
          </Box> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <img
                src="Frame2.svg"
                alt="Frame 1"
                style={{
                  // position: 'absolute',
                  marginBottom: "-1.2rem",
                  animation: "fade 2s infinite",
                  animationDelay: "0s", // Starts immediately
                }}
              />
              <img
                src="Frame2.svg"
                alt="Frame 2"
                style={{
                  // position: 'absolute',
                  marginBottom: "-1.2rem",
                  animation: "fade 2s infinite",
                  animationDelay: "3s", // Starts after 3s
                }}
              />
              <img
                src="Frame3.svg"
                alt="Frame 3"
                style={{
                  // position: 'absolute',
                  animation: "fade 2s infinite",
                  animationDelay: "6s", // Starts after 6s
                }}
              />
              <style>
                {`
          @keyframes fade {
            0% {
              opacity: 1; /* All images fully visible */
            }
            25% {
              opacity: 0.7; /* First image fades */
            }
            50% {
              opacity: 0.4; /* First and second images faded */
            }
            75% {
              opacity: 0.2; /* First, second, and third images faded */
            }
            100% {
              opacity: 1; /* All images back to full opacity */
            }
          }
        `}
              </style>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "10rem",
              width: "100%",
            }}
          >
            <BlogsCard />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogsHero;
