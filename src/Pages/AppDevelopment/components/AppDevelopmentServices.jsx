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

const AppDevelopmentServices = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const is1200 = useMediaQuery('(max-width:1200px)');

  const listData = [
    { dot: <RxDotFilled />, title: "Custom iOS and Android apps development" },
    { dot: <RxDotFilled />, title: "Native and cross-platform solutions" },
    { dot: <RxDotFilled />, title: "Second platform app development" },
    {
      dot: <RxDotFilled />,
      title: "UI/UX design",
    },
    {
      dot: <RxDotFilled />,
      title: "Consulting and prototyping",
    },
    {
      dot: <RxDotFilled />,
      title: "Automated QA and testing",
    },
    {
      dot: <RxDotFilled />,
      title: "Power management, notification and geofencing",
    },
    {
      dot: <RxDotFilled />,
      title: "Embedded Android & AOSP customizations",
    },
    {
      dot: <RxDotFilled />,
      title: "Maintenance and post-warranty support",
    },
    // {
    //   dot: <RxDotFilled />,
    //   title: "Cybersecurity - Consulting - Publishing - Maintenance - Support",
    // },
    // {
    //   dot: <RxDotFilled />,
    //   title: "Project Management - UI Design - UX Design - Coding - QA Testing",
    // },
  ];

  return (
    <>
    <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            // justifyContent:'center'
            padding:'0% 10%'
        }}>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
              marginTop:isSmall ?  "-1rem": '0rem',
              fontFamily: "montserrat",
            }}
          >
            {" "}
            OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES
          </Typography>
          <Typography
            sx={{
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing
            you achieve those goals. Is it quality website traffic you seek?
          </Typography>
        </Box>
        {/* <br /> */}
        {/* <br /> */}
      <Box
        sx={{
          padding: "5% 10%",
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid Item lg={6} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                width: "100%",
              }}
            >
              <img src="appdevservices.png" alt="" style={{width:isSmall ? "65%": '75%', 
                marginTop: is1200 ? '0rem':'-2rem'
              }}/>
            </Box>
          </Grid>
          <Grid Item lg={6} md={12} sm={12} xs={12}>

            

            {listData.map((row, id) => (
              <Box
                key={IDBDatabase}
                sx={{
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  {row.dot}
                </IconButton>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "0.9rem" :"1rem",
                    fontWeight: isSmall ? "400" : "500",
                    color: "white",
                  }}
                >
                  {row.title}
                </Typography>
              </Box>
            ))}
            <Box sx={{
              gap:5
            }}>
              {/* <Box> */}
                <img src="webdevlogo1.png" alt="" />
                <img src="webdevlogo2.png" alt="" />
                <img src="webdevlogo3.png" alt="" />
                <img src="webdevlogo4.png" alt="" />
                <img src="webdevlogo5.png" alt="" />
                <img src="webdevlogo6.png" alt="" />
                <img src="webdevlogo7.png" alt="" />
                <img src="webdevlogo8.png" alt="" />
              {/* </Box> */}
            </Box>
          </Grid>
        </Grid>

        
      </Box>

    
    </>
  );
};

export default AppDevelopmentServices;
