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


const Landing = () => {
  const theme = useTheme();
  const [isSticky, setIsSticky] =useState(false);
   
  useEffect(()=>{
    const handleScroll= ()=>{
      if (window.scrollY > 420) {
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
        position:isSticky ? 'fixed' : 'absolute',
        width:'100%',
        top: isSticky ? '0%' : '90%' ,
        backgroundColor:isSticky ? '#0d1834f0' : 'none',
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
      <HomeMain/>
    </Box>
    </>
  );
};

export default Landing;
