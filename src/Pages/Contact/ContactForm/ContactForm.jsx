import { Box, Button, FormControl, Grid, TextField, Typography, useTheme,useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import {styled} from "@mui/material"

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      backgroundColor: 'transparent',
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: 'white',
      opacity: 1, // Ensure the placeholder is fully opaque
    },
  });
const ContactForm = () => {

    const theme = useTheme();
    
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box sx={{
        padding:'5% 10%'
      }}>
        <Grid container spacing={10}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <Typography sx={{
                fontSize: isSmall ? '1.6rem' : '1.8rem',
                fontWeight:700,
                color:theme.palette.primary.main
              }}>Write Us a Message</Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontWeight:400,
                color:'white',
                textAlign:'justify',
                marginBottom:'1rem'

              }}> 
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps Bawds jog,
                whelps Bawds jog.
              </Typography>
              <Box sx={{
                display:'flex',
                // justifyContent:'space-between',
                 gap:2
              }}>
                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.2rem',
                    fontSize:'1rem'
                }}>
                <FaFacebookF />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.2rem',
                    fontSize:'1rem'
                }}>
                <FaInstagram />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.2rem',
                    fontSize:'1rem'
                }}>
                <FaXTwitter />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.2rem',
                    fontSize:'1rem'
                }}>
                <FaThreads />
                </Typography>
                    </a>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} >
          <form action="" >
            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
            placeholder="Full Name"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
            placeholder="Phone Number"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
            placeholder="Email Address"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
            placeholder="Company Name"
            size="small"
            varient ='outlined'
            fullWidth
            />
                </Grid>
            </Grid>
            <CustomTextField 
            placeholder="Your Message"
            size="small"
            varient ='outlined'
            fullWidth
            multiline
            rows={5}
            />
            <Button variant="contained" sx={{marginTop:'3rem', color:'white', textTransform:'none'}}>
                Send Message
            </Button>

          </form>
          </Grid>
          
        </Grid>

        <Box width={'100%'} marginTop={'3rem'}>
            <img src="contactmap1.svg" alt=""  width={'100%'}/>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;


   {/* <Box >
            <CustomTextField 
            placeholder="Full Name"
            size="small"
            varient ='outlined'
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
            <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            />
             <CustomTextField 
            placeholder="Full Name"
            size="small"
            rows={10}
            fullWidth
            />
            </Box> */}