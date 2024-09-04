import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const CustomNeeds = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: "3% 10%",
      }}
    >
      <Grid container spacing={isMedium ? 1 : 5}>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1rem",
            }}
          >
            WHY PARTNER
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1rem",
            }}
          >
            WITH Moshlay
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1.2rem",
            }}
          >
            FOR YOUR
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background: isSmall
                ? "linear-gradient(to bottom, transparent 50%, #98c447 50%)"
                : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
              height: isMedium ? "15%" : "15%",
              padding: isSmall ? "0rem" : "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom: isSmall ? "orem" : "-.8rem",
            }}
          >
            Custom
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background: isSmall
                ? "linear-gradient(to bottom, transparent 60%, #98c447 50%)"
                : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
              height: isMedium ? "15%" : "15%",
              padding: "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom: isSmall ? "orem" : "-.8rem",
            }}
          >
            Software
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background: isSmall
                ? "linear-gradient(to bottom, transparent 60%, #98c447 50%)"
                : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
              height: isMedium ? "15%" : "15%",
              padding: "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom: isSmall ? "orem" : "-.3rem",
            }}
          >
            Development
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
            }}
          >
            NEEDS?
          </Typography>
        </Grid>
        <Grid item lg={7} md={6} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: isSmall ? "0.9rem" : "1rem",
                fontWeight: 400,
                fontFamily: "Montserrat",
                marginBottom: isSmall ? "1rem" : "2rem",
              }}
            >
              At Moshlay Creatives, software should be more than just
              functional; it should be a strategic asset that drives your
              business forward. Our team of skilled developers and industry
              experts is dedicated to crafting tailored solutions that meet your
              specific requirements and exceed your expectations. With a focus
              on innovation, quality, and exceptional customer service, we
              strive to create software that empowers your business to achieve
              its full potential. Our commitment to quality is reflected in our
              rigorous testing and quality control processes.
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: isSmall ? "0.9rem" : "1rem",
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Let us be your trusted partner in transforming your ideas into
              reality. We work closely with our clients to understand their
              vision and provide personalized support throughout development.
              Our portfolio showcases a history of successful software
              development projects across various industries. If you are looking
              for quality custom software development moshly creatives become
              your best partner in your business journey.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomNeeds;
