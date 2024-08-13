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

const CareersJoinUs = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      careerlogo: "careerjoinlogo1.svg",
      careertitle: "Continuous Learning",
      carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
      
    },
    {
        careerlogo: "careerjoinlogo2.svg",
        careertitle: "Flexible Timing",
        carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
        
      },{
        careerlogo: "careerjoinlogo3.svg",
        careertitle: "Team Support",
        carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
        
      },{
        careerlogo: "careerjoinlogo4.svg",
        careertitle: "Yearly Appraisals",
        carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
        
      },{
        careerlogo: "careerjoinlogo5.svg",
        careertitle: "Friendly Environment",
        carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
        
      },{
        careerlogo: "careerjoinlogo6.svg",
        careertitle: "Diversified Sources",
        carrerdes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae.",
        
      },
   
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: "3rem",
          padding: "0 10%",
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
          <Grid item lg={6} md={6} sm={12} xs={12}>
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
      </Box>
    </>
  );
};

export default CareersJoinUs;
