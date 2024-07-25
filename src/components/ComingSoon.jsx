import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Page from '../components/Page/Page'

const ComingSoon = () => {
  const theme = useTheme();
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
    padding: '0.5rem 2rem',
    fontWeight: 'bold',
  };

  
  return (
    <Page title="Moshaly Creative">
    <Box>
      {isMedium ? (
        <Box sx={{ textAlign: 'center', padding: '2rem' }}>
          <Box sx={{ marginBottom: '2rem', marginTop: '-1rem' }}>
            <img src="logo2.png" alt="Logo" width="50%" />
          </Box>
          <Box sx={{ marginBottom: '-1rem', marginTop: '-2.5rem' }}>
            <img src="comingSoon2.gif" alt="Coming Soon" width="100%" zIndex='10000' />
          </Box>
          <Box >
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#535761' }}>
              WEBSITE
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#81ba04' }}>
              UNDER CONSTRUCTION
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', zIndex: 99 }}>
            <a href="https://www.facebook.com/MoshlayCreatives" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
              <FaLinkedinIn />
            </a>
          </Box>
        </Box>
      ) : (
        <Grid container sx={{ alignItems: "center", paddingTop: "2rem" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', width: '100%' }}>
              <Box sx={{ width: '50%', marginBottom: '4rem' }}>
                <img src="logo2.png" alt="Logo" width="100%" zIndex='10000' />
              </Box>
              <Box>
                <Typography sx={{ fontSize: '3rem', fontWeight: 600, color: '#535761', textAlign: "start" }}>
                  WEBSITE
                </Typography>
                <Typography sx={{ fontSize: '3rem', fontWeight: 600, textAlign: 'center', marginBottom: '1rem', color: '#81ba04' }}>
                  UNDER CONSTRUCTION
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '1rem', zIndex: 99 }}>
                <a href="https://www.facebook.com/MoshlayCreatives" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, border: `2px solid ${theme.palette.primary.main}`, fontSize: '1.2rem', borderRadius: '50%', width: '2.5rem', height: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                  <FaLinkedinIn />
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ width: '100%', marginTop: '-5rem' }}>
              <img src="comingSoon2.gif" alt="Coming Soon" width="100%" />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
    </Page>
  );
};

export default ComingSoon;
