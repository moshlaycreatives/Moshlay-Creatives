import { Box, Button, FormControl, Grid, TextField, Typography, useTheme,useMediaQuery, Snackbar, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import {styled} from "@mui/material"
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { SendFormData } from "../../../store/actions/dataActions";

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
       fontFamily:'Montserrat'
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
  const {enqueueSnackbar} = useSnackbar();
  const formData = new FormData();
  const dispatch = useDispatch();
    const theme = useTheme();
    
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const initialvalue = {
    fullName  :'',
    phone: '',
    email:'',
    company:'',
    message :''
  }
  const[formValue , setFormValue] = useState(initialvalue); 
  const [loading , setLoading] = useState(false);

  const handleFormValue = (e)=>{
    e.preventDefault();

    const {name, value}  = e.target;
    setFormValue({...formValue, [name]:value})
  }

  // formData.append('fullName',formValue.fullName);
  // formData.append('phone',formValue.phone);
  // formData.append('email',formValue.email);
  // formData.append('company',formValue.company);
  // formData.append('message',formValue.company);
  // console.log(formValue)
  
  const handleFormSubmit =(e)=>{
    e.preventDefault();
    setLoading(true)
    dispatch(SendFormData(formValue))
    .then((res)=>{
      enqueueSnackbar(res.data.message, {variant:'success'})
      setLoading(false)
      setFormValue(initialvalue)
    })
    .catch((error)=>{
      enqueueSnackbar(error.response.data.message , { variant: 'error' })
      setLoading(false)
      // console.log( 'api error ', err)
    })
  }
  return (
    <>
    {loading ? ( 
      <Box sx={{
        display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'
      }}>
        <CircularProgress/>
      </Box>
    ) : (
      <>
      <Box sx={{
        padding:'5% 10%'
      }}>
        <Grid container spacing={10}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <Typography sx={{
                fontSize: isSmall ? '1.6rem' : '1.8rem',
                fontWeight:600,
                color:theme.palette.primary.main,
                fontFamily: 'Montserrat',
              }}>Write Us a Message</Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontWeight:400,
                color:'white',
                textAlign:'justify',
                marginBottom:'1rem',
                fontFamily: 'Montserrat',

              }}> 
              Have a question? Need help? Send us a message. We welcome your query and are ready to assist you.
              </Typography>
              <br />
              <Box sx={{
                display:'flex',
                // justifyContent:'space-between',
                 gap:2
              }}>
                    <a href="https://www.facebook.com/MoshlayCreatives">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize:'1rem', fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaFacebookF />
                </Typography>
                    </a>

                    <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize:'1rem', fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaInstagram />
                </Typography>
                    </a>

                    <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize:'1rem', fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaXTwitter />
                </Typography>
                    </a>

                    <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
                <Typography variant="i" sx={{
                    color:theme.palette.primary.main,
                    border:'2px solid #98c447',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize:'1rem', fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
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
                onChange={handleFormValue}
                value={formValue.fullName}
                name="fullName"
            placeholder="Full Name"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
                onChange={handleFormValue}
                value={formValue.phone}
                name="phone"
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
                onChange={handleFormValue}
                value={formValue.email}
                name="email"
            placeholder="Email Address"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomTextField 
                onChange={handleFormValue}
                value={formValue.company}
                name="company"
            placeholder="Company Name"
            size="small"
            varient ='outlined'
            fullWidth
            />
                </Grid>
            </Grid>
            <CustomTextField 
            onChange={handleFormValue}
            value={formValue.message}
            name="message"
            placeholder="Your Message"
            size="small"
            varient ='outlined'
            fullWidth
            multiline
            rows={5}
            />
            <Button 
            // variant="contained"
             sx={{marginTop:'3rem', color:'white', textTransform:'none',
              backgroundColor:theme.palette.primary.main,
              padding:'0.8rem 2rem',
               fontFamily: 'Montserrat',
               fontWeight:500,
               border:'1px solid #98c447',
               transition:'0.3s',
               '&:hover':{
                color:'white',
                backgroundColor:"transparent",
                border:'1px solid white'
               }
            }}
            onClick={handleFormSubmit}
            >
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
    )}
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