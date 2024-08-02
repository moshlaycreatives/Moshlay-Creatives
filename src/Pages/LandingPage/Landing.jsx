import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Hero from "./Hero/Hero";
import HomeMain from "./HomeMain/HomeMain";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Technologytwo from "./Technologytwo/Technologytwo";


const Landing = () => {
  const theme = useTheme();
  
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  
  const [isSticky, setIsSticky] =useState(false);
   
  useEffect(()=>{
    const handleScroll= ()=>{
      if (window.scrollY > 600) {
        console.log(window.scroll)
        setIsSticky(true)
      }
      else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }

  },[])
  

  return (
    <>
      <Box sx={{
        position:isSticky ? 'sticky' : 'absolute',
        width:'100%',
        top: isSticky ? '0%' : '90%' ,
        backgroundColor:  isSticky ? '#0d1834f0' : 'none' ,
        // backgroundColor:isSmall ?  'none' :  (isSticky ? '#0d1834f0' : 'none') ,
        // transition: 'bottom 1s, backround-color 0.5s' , 
        transition: 'transform 1s,  opacity 0.5s, background-color 0.5s',
        // zIndex: 10000000, 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:1000000000,
      }}>
      <Header/>
      </Box>
    <Box >
      <Hero/>
      {/* <Box sx={{
        position:'relative'
      }}>
      <Technologytwo/>
      </Box> */}
      <HomeMain/>
    </Box>
    </>
  );
};

export default Landing;
