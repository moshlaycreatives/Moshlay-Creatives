import { Box ,Button,Grid, Typography, useTheme,useMediaQuery} from '@mui/material'
import React from 'react'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IoIosArrowRoundForward, IoIosMedal } from "react-icons/io";
import { useNavigate } from 'react-router';


const AboutUs = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    
  const  handleSeeMore = (path)=>{
        navigate(path)
    }
  return (
    <>
    <Box sx={{
        padding: isMedium ? '7% 10% 2.5% 10%' :'5% 10% 2.5% 10%',
    }} > 
        <Grid container >
            <Grid item lg={5} md={5} sm={12} xs={12} 
            // spacing={isSmall ? 1 : null}
            sx={{
                display:'flex',
                alignItems:isSmall ? "center" : "start", 
                
            }}>
                <Box sx={{
                    width:'100%'
                }}>
                    <img src="homeAbout.svg" alt="" width={"100%"} />
                </Box>
            </Grid>
            <Grid  item lg={7} md={7} sm={12} xs={12}
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:isSmall ? 'start' :  isMedium ? 'center' : 'end',
                justifyContent:'end',
                paddingTop: isSmall ? '1rem' : isMedium ? '2rem' : '3rem',
                marginBottom:isMedium ? " 0rem" : "-2rem",
                marginLeft:isMedium ? "0rem" : "-2rem",
                
            }}
            
            >
                <Box sx={{
                    backgroundColor: "#212e3a",
                    padding:'1.5rem',
                    width:'100%'
                }}>
                    <Typography  sx={{
                        fontSize:'2rem',
                        fontWeight:600,
                        color:theme.palette.primary.main, 
                        fontFamily:'Montserrat'
                    }}>About Company</Typography>
                    <Typography sx={{
                        fontSize:'1rem',
                        fontFamily:'Montserrat',
                        color:'white',
                        fontWeight:400,
                        marginTop:'1rem'
                    }}>Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo perferendis  amet consectetur adipisicing elit. Distinctio voluptatem facere quaerat ut odit, commodi eveniet ratione cupiditate nisi exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing el</Typography>
                    <Button variant='outlined' sx={{
                        fontFamily:'Montserrat',
                        color:'white',
                        fontWeight:400,
                        fontSize:'1rem',
                        marginTop:'1rem',
                        textTransform:'none'
                    }} 
                    onClick={()=>handleSeeMore('/comming-soon')}
                    >
                        See More...
                    </Button>
                </Box>

               <Box sx={{ 
                    backgroundColor:theme.palette.primary.main,
                    // position: 'relative',
                    width :isMedium ? "100%" : '96%'
                }} >

               <Box sx={{ 
                    padding:'1.5rem',  
                }}>
                    <Typography sx={{
                        fontSize:'1rem',
                        paddingBottom:'1rem',
                        fontFamily:'Montserrat',
                        fontWeight:400,
                        color:"white"
                    }}> quia asperiores iusto, voluptatum consectetur labore voluptatibus aperiam obcaecati, pariatur dolorum iure sed quas aspernatur aut tempore enim quidem.</Typography>

                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:"end",
                    justifyContent:'end'
                }}>
                <Button sx={{
                        fontFamily:'Montserrat',
                        color:'white',
                        fontWeight:400,
                        fontSize:'1.1rem',
                        fontStyle:'italic',
                        textTransform:'none'
                    }} onClick={()=>handleSeeMore('/comming-soon')}> Request for Quote 
                    </Button>

                    <Button variant='contained'
                    sx={{
                        padding:'.3rem 1rem',    
                        backgroundColor:'black',
                        color:theme.palette.primary.main,
                        borderRadius:'0',
                    }} onClick={()=>handleSeeMore('/comming-soon')}>
                    {/* <ArrowRightAltIcon  style={{fontSize:'2.2rem'}}/> */}
                    <IoIosArrowRoundForward  style={{fontSize:'2.5rem'}} />
                    </Button>
                </Box>
               </Box>

            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default AboutUs