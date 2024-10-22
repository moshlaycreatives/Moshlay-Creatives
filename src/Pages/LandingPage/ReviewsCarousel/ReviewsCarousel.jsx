import {
  Avatar,
  Box,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewsCarousel.css";

const ReviewsCarousel = () => {
  const cardData = [
    {
      cardimage: "services1.webp",
      cardTitle: "ahmad sultan",
      cardDes:
        "Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15",
    },
    {
      cardimage: "services2.webp",
      cardTitle: "imran ashiq",
      cardDes:
        "Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15",
    },
    {
      cardimage: "services3.webp",
      cardTitle: "usama jawad",
      cardDes:
        "Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15",
    },
    {
      cardimage: "services4.webp",
      cardTitle: "hassan ali",
      cardDes:
        "Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15",
    },
  ];

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const slidersToShow = isSmall ? 1 : isMedium ? 2 : 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidersToShow,
    // slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, #98c447 50%, transparent 40%)",
          width: "100%",
          // height: "50vh",
          marginTop: "4rem",
          alignItems: "center",
          padding: " 2rem 9%",
          marginBottom :isSmall  ? '-3rem' : "0rem",
        }}
      >
        <Box>
          <div className="slider-container">
            <Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.2rem" : isMedium ? "1.5rem" : "1.8rem",
                  fontWeight: 600,
                  color: "white ",
                  fontFamily: "Montserrat",
                  // textAlign :isSmall ? 'center' : 'start'
                }}
              >
                Tried & Trusted With Revered Reviews
              </Typography>
            </Box>
            <Slider {...settings}>
              {cardData.map((val, ind) => (
                <Box
                  key={ind}
                  sx={{
                    backgroundColor: "#1c2844",
                    color: "white",
                    padding: "1.5rem",
                    textAlign: "center",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      marginBottom: "1rem",
                    }}
                  >
                    <Avatar
                      src={val.cardimage}
                      sx={{ width: 80, height: 80 }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      marginBottom: "1rem",
                      fontSize: isSmall ? "1.1rem" : "1.3rem",
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                    }}
                  >
                    {val.cardTitle}
                  </Typography>
                  <Rating
                    readOnly
                    value={5}
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize:isSmall ?  "1.2rem": "1.4rem",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      marginTop: "1rem",
                      fontSize: isSmall ? "0.9rem" : "1rem",
                      fontWeight: 400,
                      fontFamily: "Montserrat",
                      // textAlign:'start'
                    }}
                  >
                    {val.cardDes}
                  </Typography>
                </Box>
              ))}

              {/* <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div> */}
            </Slider>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ReviewsCarousel;
