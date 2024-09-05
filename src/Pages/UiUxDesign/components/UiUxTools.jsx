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

const UiUxTools = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [
    {
      title: "Static Editors",
      imgs: [
        { img: "sktool.png" },
        { img: "fgtools.png" },
        { img: "aitools.png" },
        { img: "pstools.png" },
      ],
      desc: [
        { desc: "sketch" },
        { desc: "Figma" },
        { desc: "Adobe Illustrator" },
        { desc: "Adobe Photoshop" },
      ],
    },
    {
      title: "Animation Editors",
      imgs: [{ img: "pntools.png" }, { img: "aetools.png" }],
      desc: [{ desc: "Principles" }, { desc: "Adobe After Effects" }],
    },
    {
      title: "Design Tools",
      imgs: [
        { img: "intools.png" },
        { img: "xdtools.png" },
        { img: "sdtools.png" },
      ],
      desc: [
        { desc: "Invision Studio" },
        { desc: "sAdobe XD" },
        { desc: "Sketch Design" },
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          marginTop: "3rem",
          padding: "0 10%",
          marginBottom: "3rem",
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
              marginTop: "2rem",
              fontFamily: "montserrat",
              marginBottom:'.5rem'
            }}
          >
            {" "}
            Visual and Interaction UI & UX Design Tools
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
            Your business is unique and has distinct goals. That’s why we carry
            a vast arsenal of digital marketing you achieve those goals. Is it
            quality website traffic you seek?
          </Typography>
        </Box>
        <br />
        <br />

        {/* ===========================CARDS================================ */}

        <Grid container spacing={2}>
          {listData.map((row, id) => (
            <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmall ? "column" : "row",
                  padding: "1.5rem",
                  backgroundColor: "#1c2844",
                  height: "100%",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isSmall ? "1.2rem" : "1.6rem",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                    }}
                  >
                    {row.title}
                  </Typography>
                  <br />

                  {row.imgs.map((data, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        marginBottom: "1.3rem",
                      }}
                    >
                      <img
                        src={data.img}
                        alt=""
                        width={ isSmall ? (
                          data.img === "fgtools.png" ?'14%' : data.img === "aetools.png" ? '14%' : data.img === "pntools.png" ?  '13%' : data.img === "intools.png" || data.img === "xdtools.png"  || data.img === "sdtools.png" ? '14%'  : "15%"
                        ) : (
                          data.img === "fgtools.png" ?'22%' : data.img === "aetools.png" ? '21%' : data.img === "pntools.png" ? '20%' : "24%"
                        )}
                        // height={"55rem"}
                      />
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmall ? "0.9rem" :"1rem",
                          fontFamily: "Montserrat",
                          fontWeight: 400,
                        }}
                      >
                        {row.desc[index]?.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default UiUxTools;





{
  /* <Box sx={{display:'flex', alignItems:'center', gap:2}}>
           <img src={row.img1} alt="" width={'50rem'} height={'50rem '}/>
              <Typography
               sx={{
                color: "white",
                fontSize: "1rem",
                fontFamily: "Montserrat",
                fontWeight: 400,
                // marginLeft:'2.3rem'
              }}
              >
                {row.des1}
              </Typography>
           </Box> */
}
