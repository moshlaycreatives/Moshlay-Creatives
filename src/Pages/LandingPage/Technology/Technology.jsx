import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Technologytwo from "../Technologytwo/Technologytwo";
import Technologytwosmall from "../Technologytwo/Technologytwosmall";

const Technology = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          //   backgroundColor: "#263238",
          padding: "0 10%",
          marginTop: "1rem",
          overflow: "hidden",
          // padding:'0% 10%',
        }}
      >
        <Grid container spacing={isSmall ? 0 : 10} alignItems={"center"}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.2rem " : isMedium ?  "1.5rem": "1.8rem",
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  marginBottom: ".5rem",
                  fontFamily: "Montserrat",
                  // textAlign:isSmall ? 'center' : '',
                }}
              >
                {" "}
                We do work with all kinds of Backends and Frontends Services
              </Typography>

              <Typography
                sx={{
                  fontSize: isSmall ? " 0.9rem" : "1rem",
                  color: "white",
                  fontWeight: 400,
                  marginBottom: ".5rem",
                  // textAlign:isSmall ? 'center' : '',
                  fontFamily: "Montserrat",
                }}
              >
                {" "}
                As a leading IT service company, we specialize in delivering
                detailed solutions tailored to your unique needs. Our skilled
                team is proficient in working with a wide range of backend and
                frontend technologies, ensuring seamless integration and optimal
                performance. Whether you require robust backend development,
                captivating frontend design, or a combination of both, we have
                the expertise to deliver exceptional results
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? " 0.9rem" : "1rem",
                  color: "white",
                  fontWeight: 400,
                  marginBottom: "2rem",
                  // textAlign:isSmall ? 'center' : '',
                  fontFamily: "Montserrat",
                }}
              >
                {" "}
                Whether you require a complex e-commerce platform, a dynamic web
                application, or a user-friendly mobile app, Moshlay Creatives
                can handle it all. We are committed to staying up-to-date with
                the latest industry trends and technologies to provide you with
                cutting-edge solutions that drive your business forward.
              </Typography>
              {/* <Box>
                <Button variant="outlined" 
                sx={{
                    color:'white',
                    fontSize:'1rem'
                }}>Meet the Team</Button>
              </Box> */}
            </Box>
          </Grid>

          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMedium ? "center" : "end",
              width: "100%",
              // minHeight:'50vh'
              // overflow:'hidden'
            }}
          >
            {isSmall ? (
              <Box
                sx={{ postition: "relative", width: "100%", oveflow: "hidden" }}
              >
                {/* <img src="technology.svg" alt="" width={"100%"} /> */}

                <Technologytwosmall />
              </Box>
            ) : (
              <Box
                sx={{
                  postition: "relative",
                  width: "100%",
                  oveflow: "hidden",
                  padding: "1rem",
                }}
              >
                {/* <img src="technology.svg" alt="" width={"100%"} /> */}

                <Technologytwo />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Technology;
