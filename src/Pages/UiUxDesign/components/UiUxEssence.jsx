import React from "react";
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

const UiUxEssence = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    { title: "Information Architecture" },
    { title: "User Experience (UX)Development" },
    { title: "User Interface (UI)Development" },
    { title: "Unique Design App Solutions" },
  ];

  return (
    <>
      <Box
        sx={{
          padding: "3% 10%",
          backgroundColor: "#1c2844",
        }}
      >
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: "600",
              color: theme.palette.primary.main,
              textAlign: "center",
              
            }}
          >
            Essence of Our UI & UX Design
          </Typography>
          <br />
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              textAlign: "center",
              width: isSmall ? '100%': isMedium ?'90%' : '80%'
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing you achieve those goals. Is it
            quality website traffic you seek?
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" , marginTop:'2rem'}}>
          <img
            src="/uiuxessence.png"
            alt=""
            width={isSmall ? "70%" : isMedium ? "60%" : "50%"}
          />
        </Box>

        <Box marginTop={'3rem'}>
          <Grid container spacing={2}>
            {listData.map((row, index) => (
              <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                <Box sx={{
                  border:'2px dashed #98c447',
                    backgroundColor:'white',
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    padding: isSmall ? ".5rem" : isMedium ? "1rem" :'1.5rem', height: isSmall ? "3rem": isMedium ? " 4rem":'5rem'
                }}>
                  <Typography sx={{
                     fontFamily: "Montserrat",
                     fontSize: "1rem",
                     fontWeight: "600",
                     color: index === 1 || index === 2 ? "#98c447" : "black",
                     textAlign: "center",
                  }}>{row.title}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UiUxEssence;
