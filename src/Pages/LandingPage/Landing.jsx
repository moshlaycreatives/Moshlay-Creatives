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
import Header2 from "../Components/Header2";

const Landing = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          // position: "absolute",
          position: isSticky ? "fixed" : "absolute",
          width: "100%",
          top: isSticky ? "0%" : "90%",
          transition: " ease-in-out, opacity 0.5s ease-in-out, background-color 0.5s ease-in-out",
          backgroundColor: isSticky ? "#000205f8" : "none",
          willChange: "top, opacity, background-color",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 900,
        }}
      >
        {isSticky ? <Header2 /> : <Header />}
      </Box>
      <Box>
        <Hero />
        <HomeMain />
      </Box>
    </>
  );
};

export default Landing;
