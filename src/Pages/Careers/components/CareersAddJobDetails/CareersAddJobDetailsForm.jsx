import {
    Box,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
    Grid,
    Button,
    TextField,
    CircularProgress
  } from "@mui/material";
import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router";
import {styled} from "@mui/material"
import { useDispatch } from "react-redux";
import { ApplyCareersJob } from "../../../../store/actions/dataActions";
import { useSnackbar } from "notistack";
import { AirlineSeatLegroomReducedSharp } from "@mui/icons-material";


// import "./CareersAddJobDetailsForm.css"

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
    //   opacity: .9, // Ensure the placeholder is fully opaque
    },
  });


const CareersAddJobDetailsForm = () => {
    const {enqueueSnackbar} = useSnackbar();
    const formData = new FormData();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // console.log("state",location.state)
    const careersstate = location.state.careerJobDetail;
    // const [careersJobDetail , setCareersJobDetail] = useState(careersstate);
    // console.log('job carrrrrrr' , careersJobDetail)

    const job_id = careersstate.map((row)=>row._id)
    // console.log("idiididididididid", a);


    const initialValue = {
        jobId: '',
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        currentJobLocation:'',
        noticePeriod: '',
        currentSalary: '',
        expectedSalary:'',
        // image:null,
      }

      

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const istwelve = useMediaQuery("(max-width:1200px)");
  const [formvalue, setFormvalue] = useState(initialValue);
  const [file, setFile] = useState(null)
  const [loading,setLoading] = useState(false);
  



  const handleFormValue = (e)=> {
    e.preventDefault();

    const {name, value}  = e.target;
    // setFormvalue({...formvalue, [name]:value})
    setFormvalue((prevState) => ({
        ...prevState,
        [name]: value,}))

  }
  const handleImageUpload = (e)=>{
      setFile(e.target.files[0]);
  }
  console.log('filefileiufle', file)


  formData.append('jobId', job_id)
  formData.append('fullName', formvalue.fullName)
  formData.append('email', formvalue.email)
  formData.append('phone', formvalue.phone)
  formData.append('experience', formvalue.experience)
  formData.append('currentJobLocation', formvalue.currentJobLocation)
  formData.append('noticePeriod', formvalue.noticePeriod)
  formData.append('currentSalary', formvalue.currentSalary)
  formData.append('expectedSalary', formvalue.expectedSalary)
  formData.append('cv', file)

  console.log('fomfomfomf', FormData)

 const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true)
    dispatch(ApplyCareersJob(formData))
    .then((res)=>{
        enqueueSnackbar(res.data.message, {variant:'success'})
    setFormvalue(initialValue);
    setLoading(false)
    
    })
    .catch((err)=>{
        enqueueSnackbar(err.response.data.message, {variant:'error'})
        setLoading(false)
    })
 }

// const handleSubmit = (e)=>{
//     e.preventDefault();
//     setLoading(true)
//     dispatch(ApplyCareersJob(formData))
//     try{
//         enqueueSnackbar(res.data.message, {variant:'success'})
//     }
//     catch{
//         // enqueueSnackbar(err.response.data.message, {variant:'error'})
//     }
//     setLoading(false)
//     // setFormvalue(initialValue);
//  }
 


//   console.log('formvalyesdsdsafaf', formvalue)

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
            <img src="/careersAddJobDetails.svg" alt=""  style={{width: isSmall ? '80%' : isMedium ? '70%' : '100%', height:'100%'}} />
            </Box>

     {careersstate.map((row, index)=>(
        
            <Box
            key={index}
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
                {/* Frontend Developer (ReactJS, NextJS) */}
                {row.jobTitle}
              </Typography>
    
            </Box>
     ))}
        </Box>
    </Box>
    

    {/* =============================================HERO SECTION ADD DETAIL FORM ===================================================== */}

    {loading ? (<>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'}}>
        <CircularProgress/>
      </Box>
    </>) : (<>
    
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
                        fontSize:'1.1rem',
                        
                    }}>
                        Full Name <span style={{color:theme.palette.primary.main}}>*</span>
                    </Typography>
                <CustomTextField 
            placeholder="Enter Name"
            size="small"
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
            value={formvalue.fullName}
            name="fullName"
            autoComplete="off"
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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
          value={formvalue.email}
          name="email"

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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
            value={formvalue.phone}
            name="phone"

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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
          value={formvalue.experience}
          name="experience"
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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
          value={formvalue.currentJobLocation}
          name="currentJobLocation"

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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
          value={formvalue.noticePeriod}
          name="noticePeriod"
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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
            value={formvalue.currentSalary}
            name="currentSalary"

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
            variant ='outlined'
            fullWidth
            onChange={handleFormValue}
            value={formvalue.expectedSalary}
            name="expectedSalary"
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
            variant ='outlined'
            fullWidth
            type="file"
            onChange={(e)=>handleImageUpload(e)}
            />
<br /><br /><br />
<Grid container spacing={2} marginBottom={'1rem'} >
<Grid item lg={6} md={6} sm={12} xs={12}>
<Button variant="outlined" fullWidth sx={{ color:'white', textTransform:'none',
               fontFamily: 'Montserrat',
               fontWeight:500
            }}
            onClick={()=>navigate(-1)}
            >
                Close
            </Button>
</Grid>
<Grid item lg={6} md={6} sm={12} xs={12}>
<Button variant="contained" fullWidth sx={{ color:'white', textTransform:'none',
               fontFamily: 'Montserrat',
               fontWeight:500
            }}
            onClick={handleSubmit}
            >
                Submit
            </Button>
    </Grid>
    </Grid>


            

          </form>
    </Box>
    </>)}
    
    </>
  )
}

export default CareersAddJobDetailsForm