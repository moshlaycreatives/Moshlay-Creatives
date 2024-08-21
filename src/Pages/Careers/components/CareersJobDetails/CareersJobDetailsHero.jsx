import { AirlineSeatLegroomReducedSharp, Gradient } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { TbCurrentLocation } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import CareersHMQ from "./CareersHMQ";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { SendJobId } from "../../../../store/actions/dataActions";
import BreadCrumbs from "../../../../components/BreadCrumbs/BreadCrumbs";
import { Link } from "react-router-dom";


const CareersJobDetailsHero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const istwelve = useMediaQuery("(max-width:1200px)");
  const {id} = useParams();
  const [careerJobDetail, setCareerJobDetail] = useState([]);
  const [loading , setLoading] = useState(false);

//  console.log('carererererererrrerer',id);

const fetchData = async ()=>{
  setLoading(true);
  try {
  const res = await dispatch(SendJobId(id))
  setCareerJobDetail(res.data.data)
  // console.log('resresresres', res.data.data) 
  console.log('ahmad ahmad ')
  } catch (error) {
    console.error('failed to get single carrer job detail ', error)
  } finally {
    setLoading(false)
  }
};
console.log('jobjob job',careerJobDetail)

useEffect(()=>{
 
  fetchData();
},[])

const handleClick = ()=>{
  navigate('/careers-add-job-details' , {state : {careerJobDetail : careerJobDetail}})
}

  return (
    <>
    {loading ? (
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'}}>
        <CircularProgress/>
      </Box>
    ) : (

      <>
      {careerJobDetail.map((row, index)=>(
       <Box key={index}>
       <Box     
        sx={{
          // #121316
          // #203157
          width: "100%",
          // height:'50vh',
          backgroundImage: "linear-Gradient(to right  ,#21335b, #111112)",
          position: "relative",
        }}
      >
        {/* ================================VECTOR IMAGE============================ */}
        <Box
          sx={{
            position: "absolute",
            // right:'30%',
            left: isSmall ? "68%" : istwelve ? "65%" : "60%",
            bottom: isSmall ? "25%" : "20%",
            // width:'100%'
          }}
        >
          <img
            src="/careersjobdetailleft.svg"
            alt=""
            width={isSmall ? "60%" : istwelve ? "80%" : "100%"}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: isSmall ? "35%" : istwelve ? "45%" : "50%",
            bottom: -4,
          }}
        >
          <img
            src="/careersjobdetailmid.svg"
            alt=""
            width={isSmall ? "60%" : istwelve ? "80%" : "100%"}
          />
        </Box>

        <Box
          sx={{
            padding: "5% 10% 10% 10%",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1rem",
              fontFamily: "Montserrat",
              fontWeight: 500,
              display:'flex'
            }}
          >
            {/* <BreadCrumbs/>  */}
            <Link style={{marginRight:'.5rem', color:'#98c447' , textDecoration:'none'}} to={'/'}>Home</Link> 
            <span>/</span>
            <Link style={{margin:'0rem .5rem', color:'#98c447' , textDecoration:'none'}} to={'/careers'}>Career</Link>
            {/* / frontend developer reactjs nextjs and other js
            frameworks */}
            {row.jobTitle}
          </Typography>
          <br />
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
          <br />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <TbCurrentLocation color={"white"} fontSize={"1.5rem"} />
            </IconButton>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "white",
                fontWeight: "400",
                marginRight: "1rem",
                fontFamily: "Montserrat",
              }}
            >
              {/* Lahore - Pakistan */}
              {row.location}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ===============================JOB DETAILS TEXT =============================== */}

      <Box
        sx={{
          padding: "5% 10%",
          
        }}
      >
        <Typography
            sx={{
              fontSize: isSmall ? '1.5rem' :  isMedium ? '2rem' : "2.5rem",
              fontWeight: 600,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Job Details
          </Typography>
        
        <Grid container spacing={isMedium ? 1 :  15}>
          <Grid item lg={7} md={7} sm={12} xs={12} order={isMedium ? 2 : 1}>

            
          <Box>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              color: "white",
              marginBottom: ".5rem",
            }}
          >
            <strong>About Us:</strong>  Moshlay Creatives is a cutting-edge tech
            company focused on deli innovative solutions to our clients. Our
            team is dedicated to creating top-tier experiences using the latest
            technologies. We are seeking a talented Front Developer to join our
            dynamic team and contribute to exciting projects.
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            <strong>Job Descriptions:</strong> {row.jobDescription}
          </Typography>
        </Box>
        <br />
        <Box>
          <Typography
            sx={{
              fontSize: isSmall ? '1.3rem' : isMedium ? '1.5rem' :  "1.8rem",
              fontWeight: 500,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Key Responsibilities:
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            {row.responsiblities}
          {/* <li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li>
            <li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks. 
            </li> */}
          </Typography>
        </Box>
        <br />
        <Box>
          <Typography
            sx={{
              fontSize: isSmall ? '1.3rem' : isMedium ? '1.5rem' :  "1.8rem",
              fontWeight: 500,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Key Qualification:
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            {row.qualification}
          {/* <li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li>
            <li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li><li>Develop new user-facing features using ReactJS, NextJS, and other JS
            frameworks.
            </li> */}
          </Typography>
        </Box>
          </Grid>

          <Grid  item lg={5} md={5} sm={12} xs={12} order={isMedium ? 1 : 2}>
           
           {/* <Box sx={{
            backgroundColor:'red'
            }}> */}

            
            <Box  sx={{
              backgroundColor:'#1c2844',
                padding:'2rem',
                borderRadius:'10px',
                width: isSmall ? '100%' : isMedium ? '70%' : '100%',
                marginTop:isMedium ? '2rem' : '-2.8rem',

            }}>
              <Typography sx={{
                fontSize:'1.8rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:500,
                
              }}>
                Job Overviews
              </Typography>
              <br />

              <Typography sx={{
                fontSize:'1.2rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:500
              }}>
                Location:
              </Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:400
              }}>
                {row.location}
              </Typography>
              <br />

              <Typography sx={{
                fontSize:'1.2rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:500
              }}>
                Job Title:
              </Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:400
              }}>
                {/* Frontend Developer (ReactJS, NextJS) */}
                {row.jobTitle}
              </Typography>
              <br />

              <Typography sx={{
                fontSize:'1.2rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:500
              }}>
                Experience Required:
              </Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:400
              }}>
                {/* 1-3 Years */}
                {row.experienceRequired}
              </Typography>
              <br />

              <Typography sx={{
                fontSize:'1.2rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:500
              }}>
                Job Time:
              </Typography>
              <Typography sx={{
                fontSize:'1rem',
                fontFamily:'montserrat',
                color:'white',
                fontWeight:400
              }}>
                {/* Full Time */}
                {row.jobTime}
              </Typography>
              <br /><br />

              <Button fullWidth variant="contained" sx={{
                fontSize:'1rem',
                fontFamily:'montserrat',
                fontWeight:500,
                textTransform:'none', 
                color:'white',
                backgroundColor:theme.palette.primary.main,
              }}
              onClick={handleClick}
              >
                Apply Now
              </Button>
            </Box>


           {/* </Box> */}

          </Grid>
        </Grid>

        {/* ================================================CAREERSHMQ COMPONENT =========================================== */}
        <Box>
          <CareersHMQ/>
        </Box>

      </Box>
       </Box>
     ))} 

    </>

    )}
    </>
  );
};

export default CareersJobDetailsHero;

