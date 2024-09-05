import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const QualityNeeds = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: "3% 10%",
        marginBottom : isSmall ? '0rem': "-2rem"
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
            fontFamily: "Montserrat",
            color: theme.palette.primary.main,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Your reliable Quality Assurance Partner
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: isSmall ? ".9rem" : isMedium ? "1rem" : "1rem",
              fontFamily: "Montserrat",
              color: "white",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "2rem ",
              width: isSmall ? "100%" : "80%",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing you achieve those goals. Is it
            quality website traffic you seek?
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={isMedium ? 1 : 5}>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1rem",
            }}
          >
            DELIVER
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1rem",
            }}
          >
            EXCEPTIONAL
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1.2rem",
            }}
          >
            EXPERIENCES AT
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1.2rem",
            }}
          >
            SCALE WITH
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              marginBottom: isSmall ? "-.5rem" : "-1.2rem",
            }}
          >
            END-TO-END
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
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
            QUALITY
          </Typography>
          <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.4rem" : isMedium ? "2.5rem" : "3.2rem",
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
            ASSURANCE
          </Typography>

          {/* <br />
          <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2.5rem" : "3.2rem",
              fontWeight: 700,
              fontFamily: "Montserrat",
              display: "inline-block",
              background:
              isSmall  ?  "linear-gradient(to bottom, transparent 60%, #98c447 50%)" : "linear-gradient(to bottom, transparent 60%, #98c447 50%)",
              height: isMedium ?'15%' :'15%',
              padding: "0.2rem", // Adjust padding to fit the text nicely
              borderRadius: "0.2rem", // Optional: to add rounded corners
              marginBottom:isSmall ?  'orem': '-.3rem'
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
          </Typography> */}
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
              Our comprehensive quality assurance services ensure that your software products meet the highest standards of excellence. We understand the importance of delivering reliable and high-quality software, and our team of experienced QA professionals is dedicated to providing efficient and effective testing solutions. We utilize cutting-edge methodologies and tools to ensure thorough testing of your software products. Our services include manual testing, automated test frameworks, and performance testing.
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: isSmall ? "0.9rem" : "1rem",
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
             We work closely with your development team to understand your specific requirements and tailor our testing approach accordingly. With Moshlay Creatives as your QA partner, you can trust that your software will be thoroughly tested and ready for deployment. Our team is committed to delivering the highest quality testing services and ensuring that your software products meet the expectations of your customers.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QualityNeeds;
