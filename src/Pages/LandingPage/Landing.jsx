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


const Landing = () => {
  const theme = useTheme();
 
  return (
    <>
    <Box>
      <Hero/>
      <HomeMain/>
    </Box>
    </>
  );
};

export default Landing;
