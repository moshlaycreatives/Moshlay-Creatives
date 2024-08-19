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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdev2.svg",
      careertitle: "Web Designing",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdev3.svg",
      careertitle: "Web Development",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdev4.svg",
      careertitle: "Web Analysis and Testing",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdev5.svg",
      careertitle: "Launching",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
    },
    {
      careerlogo: "webdev6.svg",
      careertitle: "Website Maintenance",
      carrerdes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
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
            width:{lg: '50%', md : '100%'}
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontFamily: "montserrat",
              backgroundColor: "#4e6645",
              textTransform: "none",
            }}
          >
            Digital Solutions
          </Button>
          <br />
          <Typography
            sx={{
              fontSize: isSmall ? "1.9rem" : isMedium ? "2.5rem" : "3rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            {" "}
            Web Development
          </Typography>
          {/* <br /> */}
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              fontFamily:'Montserrat'
              //   textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare
            felis non quam egestas sagittis. Sed gravida nulla tellus, eu
            aliquam m i vulputate at. Proin nunc magna, varius vel faucibus id,
            ornare dignissi m sem. Nullam at molestie justo, ut fringilla dui.
            Nam convallis ipsu m sodales augue consectetur, sed aliquam tortor
            aliquam. Suspen disse eu consequat sem. Donec ac gravida metus, non
            tincidunt null a. Pellentesque ullamcorper at felis ut ornare.
          </Typography>
          <br />
          <br />
          <Button
            variant="outlined"
            sx={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              color: theme.palette.primary.main,
              fontWeight: 500,
              fontFamily: "montserrat",
              // backgroundColor:'#4e6645',
              textTransform: "none",
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
              marginTop:'4rem',
              fontFamily: "montserrat",
            }}
          >
            {" "}
            Our Process of Web Development Services
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '90%',
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

        <Grid container spacing={6}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  height:'100%',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                    justifyContent: "center",
                  }}
                >
                  <img src={row.careerlogo} alt="" width={"15%"} />
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
                  <br />
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

export default WebDevelopmentHero;
