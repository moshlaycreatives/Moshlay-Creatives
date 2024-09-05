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

const CustomDiscuss = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          marginTop: "1rem",
          padding: isSmall ? "4% 10%" :"3% 10%",
          marginBottom: "4rem",
          backgroundColor: theme.palette.primary.main,
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
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              fontFamily: "montserrat",
            }}
          >
            Moshlay Creatives is a global digital development company with over 20 years
            of experience in software development and outsourcing. We enhance
            business with disruptive technologies that create better customer
            experiences and drive revenue through innovation – developing
            innovative solutions to accelerate company growth through product
            innovation, platform modernization, and technology acceleration. Our
            global teams are located in North America, Latin America, the United
            Kingdom, and Asia.
          </Typography>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: "white",
              textAlign: "center",
              fontFamily: "montserrat",
              width: isSmall ? "100%" : isMedium ? "90%" : "90%",
              marginTop:'1rem'

            }}
          >
            {" "}
            Looking to discuss the right approach for your business?
          </Typography>
          <Button sx={{
            backgroundColor:'white', textTransform:'none', 
            fontSize: isSmall ? ".9rem" : "1rem",
            padding:isSmall ? '0.5rem 1rem' : '.5rem 2rem',
            marginTop:'2rem',
            color:theme.palette.primary.main, 
            border :'1px solid #98c447',
            '&:hover' : {
                color:'white', 
                border :'1px solid white',
                 backgroundColor:'transparent'
            }
          }}>
            Let's Contact
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomDiscuss;
