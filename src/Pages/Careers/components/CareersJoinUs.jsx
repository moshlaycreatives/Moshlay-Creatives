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
import CareersHMQ from "./CareersJobDetails/CareersHMQ";
import { useDispatch } from "react-redux";
// import { GetCareersJob } from "../../../store/actions/dataActions";
import { Dialpad } from "@mui/icons-material";

const CareersJoinUs = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  


  

  const listData = [
    {
      careerlogo: "careerjoinlogo1.svg",
      careertitle: "Continuous Learning",
      carrerdes: "We believe in investing in our employees' professional development. Enjoy opportunities for training, workshops, and certifications to stay up-to-date with the latest industry trends.",
      
    },
    {
        careerlogo: "careerjoinlogo2.svg",
        careertitle: "Flexible Timing",
        carrerdes: "We understand the importance of work-life balance. Enjoy the flexibility to manage your workload and schedule to suit your personal needs.",
        
      },{
        careerlogo: "careerjoinlogo3.svg",
        careertitle: "Team Support",
        carrerdes: "Be part of a professional and supportive team that values teamwork and collaboration. Benefit from the guidance and mentorship of experienced professionals.",
        
      },{
        careerlogo: "careerjoinlogo4.svg",
        careertitle: "Yearly Appraisals",
        carrerdes: "We recognize and reward your hard work and dedication through regular performance reviews and appraisals.",
        
      },{
        careerlogo: "careerjoinlogo5.svg",
        careertitle: "Friendly Environment",
        carrerdes: "Our office culture is friendly, inclusive, and supportive. Enjoy a positive and enjoyable work environment where you can connect with colleagues and build lasting relationships",
        
      },{
        careerlogo: "careerjoinlogo6.svg",
        careertitle: "Diversified Sources",
        carrerdes: "We value diversity and inclusion. We encourage individuals from all backgrounds to join our team and contribute to our success.",
        
      },
   
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: "3rem",
          padding: "0 10%",
          marginBottom:'3rem'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            {" "}
            Why Join Us
          </Typography>
          <Typography
            sx={{
              fontSize: isSmall ? "1.4rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: "white",
              textAlign: "center",
            }}
          >
            Great Working Environment
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={6}>
        {listData.map((row, id)=>(
        <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{
              display:'flex',
              flexDirection: isSmall ? 'column' : 'row',
              // padding:'1.5rem',
              gap:2
          }}>
            <Box>
              <img src={row.careerlogo} alt="" />
            </Box>
            <Box>
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
              <br />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                }}
              >
             {row.carrerdes}
              </Typography>
            </Box>
          </Box>
        </Grid>
        ))} 

      </Grid>
      


{/* ===================================CONVERT ITNO COMPONENT ======================================================== */}
        <CareersHMQ/>
        {/* <Box sx={{
          backgroundColor:theme.palette.primary.main,
          padding:'1.5rem',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          borderRadius:'10px',
          marginTop:'4rem'
        }}>
          <Box>
          <Typography sx={{
            color:'white',
            fontFamily:'Montserrat',
            fontSize:isSmall ? '1.6rem' : isMedium ? '2rem' : '2.5rem',
            fontWeight:600 
          }}>
          Have More Questions?
          </Typography>
          <Typography sx={{
            color:'white',
            fontFamily:'Inter',
            fontSize:'1rem',
            fontWeight:400 
          }}>
          Drop us a note and we’ll get back to you soon
          </Typography>
          </Box>
          <Button sx={{
            backgroundColor:'white',
            color:theme.palette.primary.main,
            padding:'1rem 2rem',
            fontSize:'1rem',
            fontFamily:500
          }}>
            Get in touch
          </Button>
        </Box> */}
{/* ========================================================================================================================== */}
      </Box>
    </>
  );
};

export default CareersJoinUs;
