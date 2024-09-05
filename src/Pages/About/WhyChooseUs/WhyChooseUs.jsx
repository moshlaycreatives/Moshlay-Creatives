import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const WhyChooseUs = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isTwelve = useMediaQuery("(max-width:1200px)");
  const is1250 = useMediaQuery("(max-width:1250px)");
  const is1400 = useMediaQuery("(max-width:1400px)");

  return (
    <>
      <Box
        sx={{
          padding: "2% 10%",
          marginTop: "2rem",
          marginBottom: isSmall ? "-3rem" : isMedium ? "-2rem" : "-1rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              color: theme.palette.primary.main,
              marginBottom: "2rem",
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
          >
            What Sets Us Apart?
          </Typography>
        </Box>

        {/* grid one  */}
        <Grid container alignItems={"center"}>
          {/* item one */}
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <Box
              sx={{
                width: "100%",
                // display:"flex",
                // justifyContent:'end'
              }}
            >
              <img
                src="whychooseus1.svg"
                alt="aboutHero1"
                width={isTwelve ? "100%" : is1400 ? "120%" : "100%"}
              />
            </Box>
          </Grid>
          <Grid
            item
            lg={7}
            md={12}
            sm={12}
            xs={12}
            sx={{
              padding: "2rem 0",
            }}
          >
            <Box
              sx={{
                marginLeft: isTwelve ? "0rem" : "-2rem",
                backgroundColor: "#172139ca",
                padding: "2rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: isSmall ? "1.2rem" : "1.7rem",
                  fontWeight: 600,
                  // color: theme.palette.primary.main
                  color: "white",
                  marginBottom: ".5rem",
                  fontFamily: "Montserrat",
                }}
              >
                Proven Delivery Record
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "1rem" : "1.1rem",
                  color: "white",
                  textAlign: "start",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                More than technology-a partner invested in your success
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "0.9rem" : "1.1rem",
                  fontWeight: 400,
                  color: "white",
                  textAlign: "start",
                  fontFamily: "Montserrat",
                }}
              >
                Moshlay Creatives has a proven track record of successfully
                delivering projects on time, within budget, and to the highest
                standards of quality. We prefer the customer service at first.
                Our team of experienced professionals possesses a deep
                understanding of industry best practices and has consistently
                exceeded client expectations. We pride ourselves on our ability
                to translate complex technical concepts into tangible results,
                driving measurable value for your business. Whether you're
                looking to streamline operations, enhance customer experiences,
                or launch a new product, Moshlay Creatives is your trusted
                partner for delivering result-oriented outcomes.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Grid two */}
        <Grid
          container
          alignItems={"center"}
          marginTop={isMedium ? "0rem" : "2rem"}
        >
          <Grid
            item
            lg={7}
            md={12}
            sm={12}
            xs={12}
            order={isTwelve ? 2 : 1}
            sx={{
              padding: "2rem 0",
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                marginRight: isTwelve ? "0rem" : "-2rem",
                backgroundColor: "#172139ca",
                padding: "2rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: isSmall ? "1.2rem" : "1.7rem",
                  fontWeight: 600,
                  // color: theme.palette.primary.main
                  color: "white",
                  marginBottom: ".5rem",
                  fontFamily: "Montserrat",
                }}
              >
                We Own The Outcome
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "1rem" : "1.1rem",
                  fontWeight: 400,
                  color: "white",
                  textAlign: "start",
                  marginBottom: "1rem",
                  fontFamily: "Montserrat",
                }}
              >
                Your foundation for transformation and progress
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "0.9rem": "1rem",
                  fontWeight: 400,
                  color: "white",
                  textAlign: "start",
                  fontFamily: "Montserrat",
                }}
              >
                At Moshlay Creatives, we are more than just a service provider;
                we are your strategic partner. We believe in taking full
                ownership of project outcomes, ensuring that every project is
                delivered not only on time and within budget but also with
                exceptional quality. Our team of dedicated professionals works
                closely with you to understand your unique business objectives
                and challenges, and we are committed to providing tailored
                solutions that drive tangible results. We don't just deliver
                software; we create value. From initial concept to final
                deployment, we are invested in your success, and we are
                dedicated to exceeding your expectations.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={5}
            md={12}
            sm={12}
            xs={12}
            order={isTwelve ? 1 : 2}
            zIndex={"98"}
          >
            <Box
              sx={{
                width: "100%",
                // display:"flex",
                // justifyContent:'end',
              }}
            >
              <img
                src="whychooseus2.svg"
                alt="aboutHero1"
                width={isTwelve ? "100%" : is1400 ? "120%" : "100%"}
              />
            </Box>
          </Grid>
        </Grid>

        {/* grid Three  */}
        <Grid
          container
          alignItems={"center"}
          marginTop={isMedium ? "0rem" : "2rem"}
        >
          {/* item one */}
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <Box
              sx={{
                width: "100%",
                // display:"flex",
                // justifyContent:'end'
              }}
            >
              <img
                src="whychooseus3.svg"
                alt="aboutHero1"
                width={isTwelve ? "100%" : is1400 ? "120%" : "100%"}
              />
            </Box>
          </Grid>
          <Grid
            item
            lg={7}
            md={12}
            sm={12}
            xs={12}
            sx={{
              padding: "2rem 0",
            }}
          >
            <Box
              sx={{
                marginLeft: isTwelve ? "0rem" : "-2rem",
                backgroundColor: "#172139ca",
                padding: "2rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: isSmall ? "1.2rem" : "1.7rem",
                  fontWeight: 600,
                  // color: theme.palette.primary.main
                  color: "white",
                  marginBottom: ".5rem",
                  fontFamily: "Montserrat",
                }}
              >
                We Know How To Scale
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "1rem" : "1.1rem",
                  fontWeight: 400,
                  color: "white",
                  textAlign: "start",
                  marginBottom: "1rem",
                  fontFamily: "Montserrat",
                }}
              >
                More than technology-a partner invested in your success
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmall ? "0.9rem": "1rem",
                  fontWeight: 400,
                  color: "white",
                  textAlign: "start",
                  fontFamily: "Montserrat",
                }}
              >
                Whether you're a nimble startup aiming to expand or a seasoned
                enterprise seeking to optimize operations, Moshlay Creatives is
                your trusted partner for scalable solutions. Our experienced
                team has a proven track record of adapting to evolving business
                landscapes and implementing innovative solutions that drive
                growth. We understand the unique challenges of scaling a
                business. From optimizing resources to implementing effective
                growth strategies, we provide the guidance and support needed to
                achieve your goals. Let us help you navigate growth and unlock
                your business's full potential.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyChooseUs;
