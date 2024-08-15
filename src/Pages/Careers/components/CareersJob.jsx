import { ThemeContext } from '@emotion/react'
import { Box, Button, Card, Grid, IconButton, Typography, useTheme , useMediaQuery} from '@mui/material'
import { FiShoppingBag } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";
import React from 'react'
import { useNavigate } from 'react-router';




const CareersJob = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

 

    const listData = [
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Software Developer',
        jobprimayname:'Frontend Developer(React js, Next js)',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
      {jobtitle:'Frontend Developer - Full Time',
        jobpost:'Designer',
        jobprimayname:'UI | UX Designer',
        jobloc:'Lahore pakistan',
        jobyear:'1-3 years'
      },
    ]
  return (
    <>

    <Box sx={{
        padding:'0 10%'
    }}>

        <Box>
            <Typography sx={{
                fontSize:'1.1rem', 
                fontWeight:600,
                color:theme.palette.primary.main,
                textAlign:'center',fontFamily: 'Montserrat',
            }}> Our Jobs</Typography>
              <Typography sx={{
                fontSize: isSmall ? '1.4rem' : isMedium ? '2rem' : '2.5rem', 
                fontWeight:600, 
                color:'white',
                textAlign:'center',fontFamily: 'Montserrat',
            }}> 
            Current Available Positions at Moshlay Creatives
            </Typography>
        </Box>
        <br /><br />

        {/* ===========================CARDS================================ */}

        <Grid container  spacing={3}>

          {listData.map((row, id)=>(
            <Grid key={id} item lg={6} md={6} sm={12} xs={12}>
            <Card sx={{ 
               padding:'1.5rem',
               backgroundColor:'#1c2844', borderRadius:'15px'
            }}>
              <Box sx={{
                display:'flex',
                justifyContent:'space-between'
              }}>
  
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <IconButton>
                  <FiShoppingBag color={'white'} fontSize={isSmall ? '1.2rem' : '1.5rem'}/>
                  </IconButton>
                  <Typography sx={{fontSize: isSmall ? '.8rem' : '1rem',
                     color:'white',
                      fontWeight:'400',fontFamily: 'Montserrat',
                      }}>
                    {row.jobtitle}
                  </Typography>
                </Box>
                <Button variant='contained' sx={{
                  backgroundColor:'#3e4860',
                  fontSize:isSmall ? '0.7rem' : '0.9rem',
                  fontWeight:400,
                   color:'white', borderRadius:'20px',
                    padding: isSmall ? '0.5rem 0.8rem' : '.8rem 1.5rem',
                    textTransform:'none',fontFamily: 'Montserrat',
                }}>
                  {row.jobpost}
                </Button>
              </Box>
              <br />
              <Typography sx={{fontSize: isSmall ? '.8rem' : '1rem', 
                color:'white',
                 fontWeight:'600',
                  marginLeft:'.7rem',fontFamily: 'Montserrat',
                  }}>
                 {row.jobprimayname}
                </Typography>
                <br />
  
              <Box sx={{display:'flex'}}>
              <Box sx={{display:'flex', alignItems:'center'}}>
              <IconButton>
              <TbCurrentLocation color={'white'} fontSize={isSmall ? '1.2rem' : '1.5rem'}/>
                  </IconButton>
                  <Typography sx={{fontSize: isSmall ? '.8rem' : '1rem',
                     color:'white', fontWeight:'400', marginRight:'1rem',fontFamily: 'Montserrat',}}>
                   {row.jobloc}
                  </Typography>
              </Box>
  
              <Box sx={{display:'flex', alignItems:'center'}}> 
              <IconButton>
              <FiShoppingBag color={'white'} fontSize={isSmall ? '1.2rem' : '1.5rem'}/>
                  </IconButton>
                  <Typography sx={{fontSize: isSmall ? '.8rem' : '1rem',
                  fontFamily: 'Montserrat',
                     color:'white', fontWeight:'400'}}>
                    {row.jobyear}
                  </Typography>
              </Box>
              </Box>
              <br /><br />
  
  
              <Button variant='outlined' sx={{color:'white', border:'1px solid white',
                fontSize: isSmall ?  '0.8rem' : '1rem', 
                fontFamily:500,
                padding:'.8rem 2rem',
                textTransform:'none',fontFamily: 'Montserrat',
              }}
              onClick={()=>navigate('/careers-job-details')}
              >
                Apply Now
              </Button>
  
              
  
            </Card>
  
          </Grid>
          ))}

        

        </Grid>


    </Box>
    
    </>
  )
}

export default CareersJob;



// #13161c