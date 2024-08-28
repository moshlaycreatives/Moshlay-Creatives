import { Box ,Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'

const WhyChooseUs = () => {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isTwelve = useMediaQuery ('(max-width:1200px)');

  return (
    <>
    <Box sx={{
        padding:'2% 10%',
        marginTop:'2rem',
        marginBottom:isSmall ? '-3rem' : isMedium ? '-2rem' : '-1rem',

    }}>
        <Box>
            <Typography sx={{
                fontSize: isSmall ?  '1.8rem' : isMedium ? '2rem' :  '2.5rem',
                color:theme.palette.primary.main,
                marginBottom:'2rem',
                fontFamily:'Montserrat',
                fontWeight:600,
            }}>
            What Sets Us Apart?
            </Typography>
        </Box>

        {/* grid one  */}
    <Grid container alignItems={"center"} >
        {/* item one */}
    <Grid item lg={5} md={12} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus1.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#172139f4',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              Proven Delivery Record
            </Typography>
            <Typography sx={{
                fontSize:isSmall ? '1rem' : '1.1rem',
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontWeight: 400,
                fontFamily:'Montserrat'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',fontFamily:'Montserrat'
              }}
            >
              With a strong track record of successful project completion, Moshlay Creatives has consistently delivered measurable results for our clients. Our team of experienced professionals has a proven ability to meet deadlines, stay within budget, and exceed expectations. We leverage our industry knowledge and best practices to ensure that every project is executed efficiently and effectively.
            </Typography>
          </Box>
            </Grid>
          
        </Grid>

        {/* Grid two */}
        <Grid container alignItems={"center"}  marginTop={isMedium ? "0rem" : "2rem"}>
  
            <Grid item lg={7} md={12} sm={12} xs={12} order={isTwelve ? 2 : 1} sx={{
                padding:'2rem 0',
                zIndex:'99'
            }}>
            <Box sx={{
                marginRight: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#172139f4',padding:'2rem',
                

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              We Own The Outcome
            </Typography>
            <Typography sx={{
                fontSize: isSmall ? '1rem' : "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontFamily:'Montserrat'
              }}>
            Your foundation for transformation and progress
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                fontFamily:'Montserrat'
              }}
            >
             At Moshlay Creatives, we are committed to the success of our clients. We believe in taking full ownership of project outcomes, ensuring that every project is delivered to the highest standards. Our team works closely with our clients to understand their unique needs and goals, and we are dedicated to providing solutions that drive tangible results.
            </Typography>
          </Box>
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12} order={isTwelve ? 1 : 2} zIndex={'98'}>
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end',
                
                
          }}>
            <img src="whychooseus2.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
          
        </Grid>

        {/* grid Three  */}
    <Grid container alignItems={"center"}  marginTop={ isMedium ? '0rem' : '2rem'}>
        {/* item one */}
    <Grid item lg={5} md={12} sm={12} xs={12} >
            <Box sx={{
                width:'100%',
                // display:"flex",
                // justifyContent:'end'
                
          }}>
            <img src="whychooseus3.svg" alt="aboutHero1" width="100%"  />
          </Box>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12} sx={{
                padding:'2rem 0',
            }}>
            <Box sx={{
                marginLeft: isTwelve ?  '0rem' : "-2rem",
                backgroundColor:'#172139f4',padding:'2rem'

             }}>
            <Typography
              sx={{
                fontSize:isSmall ? '1.4rem' : "1.7rem",
                fontWeight: 600,
                // color: theme.palette.primary.main
                color:'white',
                marginBottom:'.5rem',
                fontFamily:'Montserrat'
              }}
            >
              We Know How To Scale
            </Typography>
            <Typography sx={{
                fontSize: isSmall ? '1rem' : "1.1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                marginBottom:'1rem',
                fontFamily:'Montserrat'
              }}>
            More than technology-a partner invested in your success 
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "white",
                textAlign: 'justify',
                fontFamily:'Montserrat'
              }}
            >
          Whether you're a startup looking to scale rapidly or a large enterprise seeking to optimize your operations, Moshlay Creatives has the expertise to help you achieve your goals. Our team has a proven ability to adapt to changing business needs and implement scalable solutions that support your growth. We understand the challenges of scaling a business and can provide the guidance and support you need to succeed.
            </Typography>
          </Box>
            </Grid>
          
        </Grid>
    </Box>
    </>
  )
}

export default WhyChooseUs