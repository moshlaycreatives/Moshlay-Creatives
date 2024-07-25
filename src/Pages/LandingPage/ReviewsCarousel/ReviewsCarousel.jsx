import { Avatar, Box, Rating, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsCarousel = () => {

    const cardData=[
        {cardimage : 'services1.svg' , cardTitle: 'ahmad' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services2.svg' , cardTitle: 'ahmad' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services3.svg' , cardTitle: 'ahmad' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services4.svg' , cardTitle: 'ahmad' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
    ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #98c447 50%, red 50%)",
          width: "100%",
          height: "50vh",
          marginTop: "4rem",
        }}
      >
        <Box>
          <div className="slider-container">
            <Slider {...settings}>
                {cardData.map((val,ind)=>(
                    <Box key={ind} sx={{
                        backgroundColor:'black', color:'white' , padding:'1rem', display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }} gap={5}>
                <Box >
                  <Avatar src={val.cardimage} />
                </Box>
                <Typography>{val.cardTitle}</Typography>
                <Rating readOnly value={5} />
                <Typography>
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
