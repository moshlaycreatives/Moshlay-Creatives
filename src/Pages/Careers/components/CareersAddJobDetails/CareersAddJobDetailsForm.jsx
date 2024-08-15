import {
    Box,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
    Grid,
    Button,
    TextField
  } from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router";
import {styled} from "@mui/material"
// import "./CareersAddJobDetailsForm.css"



const CareersAddJobDetailsForm = () => {
    const navigate = useNavigate();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const istwelve = useMediaQuery("(max-width:1200px)");

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
        fontSize:'1rem',
        fontWeight:400,
              color: 'white',
      opacity: .9, // Ensure the placeholder is fully opaque
    },
  });

  return (
    <>
    {/* =============================================HERO SECTION HERD CARD===================================================== */}
    <Box>
    <Box
          sx={{
            padding: '0% 10%',
            backgroundImage: "linear-Gradient(to right  ,#21335b, #111112)",

            position:'relative',
            overflow:'hidden'
          }}
        >
            <Box sx={{
                // backgroundColor:'red',
                display:'flex',
                justifyContent:'end',
                position:'absolute', 
                width: '100%',
                height:'100%',
                // right:0
            }}>
            <img src="careersAddJobDetails.svg" alt=""  style={{width: isSmall ? '80%' : isMedium ? '70%' : '100%', height:'100%'}} />
            </Box>
         <Box
        sx={{  
          padding:'10% 0%'
        }}>
             <Typography
            sx={{
              color: "white",
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
          >
            Frontend Developer (ReactJS, NextJS)
          </Typography>

        </Box>
        </Box>
    </Box>
    

    {/* =============================================HERO SECTION ADD DETAIL FORM ===================================================== */}

    <Box sx={{
        padding:'5% 10%'
    }}>
    <form action=""  className="add-job-details-form">
            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>

                    <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Full Name <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Name"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    
                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Email <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Email"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>

                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Phone <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Phone"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Experience <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Experience"
            size="small"
            varient ='outlined'
            fullWidth
            />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>

                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Current Job Location <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter current job location"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Notice Period <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter notice period"
            size="small"
            varient ='outlined'
            fullWidth
            />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>

                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Current Salary <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Enter current salary"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Expected Salary <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter expected salary"
            size="small"
            varient ='outlined'
            fullWidth
            />
                </Grid>
            </Grid>

            <Typography sx={{
                        color:'white',
                        fontFamily:'montserrat',
                        marginBottom:'.5rem',
                        fontWeight:400,
                        fontSize:'1.1rem'
                    }}>
                        Uploade CV/Resume <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
            <CustomTextField 
            placeholder="Your Message"
            size="small"
            varient ='outlined'
            fullWidth
            type="file"
            // multiline
            // rows={5}
            />
<br /><br /><br />
<Grid container spacing={2} marginBottom={'1rem'} >
<Grid item lg={6} md={6} sm={12} xs={12}>
<Button variant="outlined" fullWidth sx={{ color:'white', textTransform:'none',
               fontFamily: 'Montserrat',
               fontWeight:500
            }}>
                Close
            </Button>
</Grid>
<Grid item lg={6} md={6} sm={12} xs={12}>
<Button variant="contained" fullWidth sx={{ color:'white', textTransform:'none',
               fontFamily: 'Montserrat',
               fontWeight:500
            }}>
                Submit
            </Button>
    </Grid>
    </Grid>


            

          </form>
    </Box>
    
    </>
  )
}

export default CareersAddJobDetailsForm