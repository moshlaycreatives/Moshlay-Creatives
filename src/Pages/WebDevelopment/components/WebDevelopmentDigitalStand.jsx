import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
// import { GoDotFill } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";

const WebDevelopmentDigitalStand = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    { dot: <RxDotFilled />, title: "Website Development" },
    { dot: <RxDotFilled />, title: "Web Application Development" },
    { dot: <RxDotFilled />, title: "eCommerce Solutions Development" },
    {
      dot: <RxDotFilled />,
      title: "Dedicated Content Management System Development",
    },
    {
      dot: <RxDotFilled />,
      title: "No-code Development & Low-code Development",
    },
    {
      dot: <RxDotFilled />,
      title: "Ideation - Market Research - Wireframing - Prototyping",
    },
    {
      dot: <RxDotFilled />,
      title: "Cybersecurity - Consulting - Publishing - Maintenance - Support",
    },
    {
      dot: <RxDotFilled />,
      title: "Project Management - UI Design - UX Design - Coding - QA Testing",
    },
  ];

  return (
    <>
      <Box
        sx={{
          padding: isSmall ?"2% 10%" : "5% 10%",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid Item lg={6} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img src="webdevdigitalstand.svg" alt="" width={"100%"} />
            </Box>
          </Grid>
          <Grid Item lg={6} md={12} sm={12} xs={12}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: isSmall ? "1.2rem" : isMedium ? "1.5rem" : "1.8rem",
                fontWeight: "600",
                color: theme.palette.primary.main,
              }}
            >
              Become a digital stand-out with a best-in-class web development
              company
            </Typography>
            <br />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize:isSmall ? "0.9rem" : "1rem",
                fontWeight: "500",
                color: "white",
              }}
            >
              At Netguru, we offer every web development service you need to
              build a full-blown web-based product, such as:
            </Typography>
            <br />

            {listData.map((row, id) => (
              <Box
                key={IDBDatabase}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  {row.dot}
                </IconButton>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize:isSmall ? "0.9rem" : "1rem",
                    fontWeight: isSmall ? "400" : "500",
                    color: "white",
                  }}
                >
                  {row.title}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Box>
          <br />
          <br />
          <br />
          <Typography
            sx={{
              fontSize:isSmall ? "0.9rem" : "1rem",
              fontFamily: "Montserrat",
              fontWeight: "400",
              color: "white",
              marginTop :'-2rem', 
              marginBottom: isSmall ? '2rem' :'0rem'
            }}
          >
            The role of a web development company is to seek and build solutions
            that can best fulfill the client’s unique business goals.  With the
            right web development services, you’ll be able to build a successful
            product from scratch or increase the performance of an existing one.
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        backgroundImage: "linear-Gradient(to right  , #1c2844, #1c2844 )",
        padding:'5% 10%',
        marginBottom: isSmall ? '-1rem' :'0rem'
    }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: "600",
              color: theme.palette.primary.main,
              textAlign: "center",

            }}
          >
            Results-Driven Website Solutions
          </Typography>
          <br />
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize:isSmall ? "0.9rem" : "1rem",
              fontWeight: "400",
              color: 'white',
              textAlign: "center",
            }}
          >
            A solid online presence is essential for successful branding and
            business growth in the modern age of the environment. Utilizing
            specialized development services can highlight your brand and make
            it simpler for potential customers to discover and interact with
            your goods or services.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WebDevelopmentDigitalStand;
