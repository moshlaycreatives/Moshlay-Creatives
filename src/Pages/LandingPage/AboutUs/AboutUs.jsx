import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IoIosArrowRoundForward, IoIosMedal } from "react-icons/io";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleSeeMore = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box
        sx={{
          padding: isMedium ? "7% 10% 2.5% 10%" : "5% 10% 2.5% 10%",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            // spacing={isSmall ? 1 : null}
            sx={{
              display: "flex",
              alignItems: isSmall ? "center" : "start",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img src="homeAbout.svg" alt="" width={"100%"} />
            </Box>
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isSmall ? "start" : isMedium ? "center" : "end",
              justifyContent: "end",
              paddingTop: isSmall ? "1rem" : isMedium ? "2rem" : "3rem",
              marginBottom: isMedium ? " 0rem" : "-2rem",
              marginLeft: isMedium ? "0rem" : "-2rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1c2844",
                padding: "1.5rem",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                }}
              >
                About Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  color: "white",
                  fontWeight: 400,
                  marginTop: "1rem",
                }}
              >
                Moshlay Creatives is a dynamic IT services company committed to
                turning innovative ideas into reality. With a keen eye for
                emerging trends and a deep understanding of client needs, we
                deliver cutting-edge solutions that drive business growth. Our
                global clients rely on our expertise to develop tailored
                software products and IT services that meet their requirements.
                By leveraging our offshore development model, We believe in open
                communication, collaboration, and exceeding expectations.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: "Montserrat",
                  color: "white",
                  fontWeight: 400,
                  fontSize: "1rem",
                  marginTop: "1rem",
                  textTransform: "none",
                }}
                onClick={() => handleSeeMore("/comming-soon")}
              >
                See More...
              </Button>
            </Box>

            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                // position: 'relative',
                width: isMedium ? "100%" : "96%",
              }}
            >
              <Box
                sx={{
                  padding: "1.5rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    paddingBottom: "1rem",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Whether you're a startup seeking a minimum viable product or
                  an established enterprise in need of a complex enterprise
                  solution, Moshlay Creatives is your trusted partner.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                }}
              >
                <Button
                  sx={{
                    fontFamily: "Montserrat",
                    color: "white",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    textTransform: "none",
                  }}
                  onClick={() => handleSeeMore("/comming-soon")}
                >
                  {" "}
                  Request for Quote
                </Button>

                <Button
                  variant=""
                  sx={{
                    padding: ".3rem 1rem",
                    backgroundColor: "black",
                    color: theme.palette.primary.main,
                    borderRadius: "0",
                    border: "none",
                    outline: "none",
                    "&:hover": {
                      backgroundColor: "black",
                      color: theme.palette.primary.main,
                    },
                  }}
                  onClick={() => handleSeeMore("/comming-soon")}
                >
                  {/* <ArrowRightAltIcon  style={{fontSize:'2.2rem'}}/> */}
                  <IoIosArrowRoundForward style={{ fontSize: "2.5rem" }} />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
