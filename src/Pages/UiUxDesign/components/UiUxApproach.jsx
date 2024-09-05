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
  CircularProgress,
} from "@mui/material";
import { FiShoppingBag } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dialpad } from "@mui/icons-material";

const UiUxApproach = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  


  

  const listData = [
    {
      dot: "uiuxapproachdot.png",
      careertitle: "Research and Strategy",
      carrerdes: "We conduct in-depth user research to understand your target audience and develop user personas and journey maps. We define clear project goals and create a comprehensive strategy.",
      
    },
    {
        dot: "uiuxapproachdot.png",
        careertitle: "Wireframing",
        carrerdes: "We create low-fidelity wireframes to visualize the basic structure and layout of your interface. We iterate on these wireframes based on feedback and usability testing to refine the design.",
        
      },{
        dot: "uiuxapproachdot.png",
        careertitle: "UI Development",
        carrerdes: "We bring wireframes to life with visually appealing and consistent design elements. We develop a style guide to ensure brand consistency and create functional interfaces.",
        
      },{
        dot: "uiuxapproachdot.png",
        careertitle: "Information Architecture",
        carrerdes: "We organize and structure your content for easy navigation and understanding. We create a clear hierarchy of information and optimize it for search engines.",
        
      },{
        dot: "uiuxapproachdot.png",
        careertitle: "Prototyping",
        carrerdes: "We develop interactive prototypes to test designs with real users. We gather feedback and iterate on the prototype until it meets the desired quality.",
        
      },{
        dot: "uiuxapproachdot.png",
        careertitle: "Usability Testing",
        carrerdes: "We conduct usability testing to evaluate how well your design meets user needs. We identify and address usability issues to improve the user experience and continuously refine our design.",
        
      },
   
  ];
  return (
    <>
      <Box
        sx={{
          // marginTop: "3rem",
          padding: "0 10%",
          marginBottom:isSmall ? '-2rem' : '3rem'
        }}
      >
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
              // marginTop: "2rem",
              fontFamily: "montserrat",   
              marginBottom :'0.5rem'  
            }}
          >
            {" "}
            Our Approach to UI & UX Services
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
          At Moshlay Creatives, we believe exceptional user experiences are crucial for digital success. Our approach combines research, design, and testing to deliver outstanding results.
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={isSmall ?3 : isMedium ? 4:6}>
        {listData.map((row, id)=>(
        <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{
              display:'flex',
              flexDirection: isSmall ? 'column' : 'row',
              // padding:'1.5rem',
              gap:2
          }}>
            <Box>
           <Box sx={{display:'flex', alignItems:'center', gap:2}}>
           <img src={row.dot} alt="" width={'20rem'} height={'20rem'}/>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: isSmall ? '1.2rem' : "1.5rem",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                }}
              >
                {row.careertitle}
              </Typography>
           </Box>
              <br />
              <Typography
                sx={{
                  color: "white",
                  fontSize: isSmall ? "0.9rem" :"1rem",
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  marginLeft:'2.3rem'
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

export default UiUxApproach;
