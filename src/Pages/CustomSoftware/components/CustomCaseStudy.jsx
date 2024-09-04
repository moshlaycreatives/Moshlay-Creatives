import { Avatar, Box, Divider, Rating, Typography, useMediaQuery ,useTheme} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCaseStudy.css"

const CustomCaseStudy = () => {

    const cardData=[
        {cardimage : 'services1.svg' , cardTitle: 'ahmad sultan' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services2.svg' , cardTitle: 'imran ashiq' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services3.svg' , cardTitle: 'usama jawad' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
        {cardimage : 'services4.svg' , cardTitle: 'hassan ali' , cardDes :"Lorem Ipsum es simplemente el texto  relleno de las imprentas y archivos de teLorem Ipsum ha sido el texto de relleno tándar de las industrias desde el año 15"},
    ]

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    const slidersToShow = isSmall ? 1 : isMedium ?  2 :3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidersToShow,
    // slidesToScroll: 3,
    arrows:false,
    autoplay:true,
    autoplaySpeed:100,
  };

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #1b3782 50%, #1b3782 40%)",   
          width: "100%",
          // height: "50vh",
          marginTop: "4rem",
          // marginBottom:'4rem',
          // display:'flex',
          alignItems:'center',
          padding:' 2rem 9%'
        }}
      >
        <Box>
          <div className="slider-container">
            <Box>
              <Typography sx={{
                fontSize:  isSmall? '1.5rem' : '1.9rem',
                fontWeight:600,
                color:'white ',
                fontFamily:'Montserrat',
                textAlign:'center'
                // textAlign :isSmall ? 'center' : 'start'
              }}>
              Featured Case Studies
              </Typography>
            </Box>
            <Slider {...settings}>
                {cardData.map((val,ind)=>(
                    <Box key={ind} sx={{
                        // backgroundColor:'#1c2844',
                        display:'flex',
                         alignItems:'flex-end',
                        backgroundImage:'url(/customcase1.png)',
                        backgroundPosition:'center',
                             backgroundSize:'cover',
                             objectFit:'cover',
                             height:'20rem', 
                         color:'white' ,
                        textAlign:'center',
                        borderRadius:'10px',
                        cursor:'pointer'
                    }}>
               <Box sx={{
                display:'flex',
                alignItems:'end', height:'100%'
               }}>
               <Box sx={{
                    background:'#000000bc',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'start',
                  width:'100%',
                  height:'auto',
                          padding:'1rem',
                //   marginBottom:'1rem',
                }} >
                 <Typography sx={{
                    fontSize:isSmall ? "0.9rem" : '1rem',
                     color:'white',
                     fontFamily:'Montserrat', fontWeight:'400', marginBottom:'0.3rem'
                 }}>
                 Technology
                 </Typography>
                 <Divider sx={{
                    backgroundColor:'white', height:'1px', width:'35%', color:'white'
                 }}/>
                 <Typography sx={{
                    fontSize:isSmall ? "0.9rem" : '1rem',
                     color:'#ec8823',
                     fontFamily:'Montserrat', 
                     fontWeight:600, marginTop:'.5rem'
                 }}>
                 Recruitment Technology
                 </Typography>

                </Box>  
               </Box>
                
                {/* <Typography sx={{marginBottom:'1rem' , fontSize:'1.3rem', fontWeight:500 , 
                  fontFamily:'Montserrat'
                }}>{val.cardTitle}</Typography>
                <Rating readOnly value={5} />
                <Typography sx={{marginTop:'1rem' , fontSize:'1rem', fontWeight:400, fontFamily:'Montserrat'
                  // textAlign:'start' 
                  }} >
                  {val.cardDes}
                </Typography> */}
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

export default CustomCaseStudy;
