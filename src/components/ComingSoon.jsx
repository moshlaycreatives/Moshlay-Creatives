import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Box , Button ,useMediaQuery, useTheme} from '@mui/material';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ComingSoon = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date();
    deadline.setMonth(deadline.getMonth() + 1); // Set deadline to one month from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = deadline - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '16px 0',
  };

  const countdownItemStyle = {
    margin: '0 8px',
    minWidth: '60px',
    minHeight: '60px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    padding:'0.5rem 2rem',
    fontWeight: 'bold',
  };

  return (
    <Box sx={{
      backgroundColor: 'black',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      position: 'relative', // Ensures the button container can be positioned absolutely
    }}>
      <Box sx={{
        width: '100%',
        height: '100%',
      }}>
        <img src="comingSoon.png" alt="Coming Soon" style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }} />

<Box sx={{
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: isMedium ? 'translate(-40%, -100%)' : 'translate(-40%, -40%)',
      transform: isSmall ? 'translate(-50%, -250%)' : 'translate(-40%, -40%)',
      display: 'flex',
      gap: '1rem',
      zIndex: 99,
    }}>
      <a href="https://www.facebook.com/MoshlayCreatives" target="_blank" rel="noopener noreferrer" style={{
        color: 'white',
        fontSize: '1.2rem',
        border: '1px solid white',
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
      }}>
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{
        color: 'white',
        fontSize: '1.2rem',
        border: '1px solid white',
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
      }}>
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{
        color: 'white',
        fontSize: '1.2rem',
        border: '1px solid white',
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
      }}>
        <FaLinkedinIn />
      </a>
    </Box>
      </Box>
    </Box>
    
    
  );
};

export default ComingSoon;
