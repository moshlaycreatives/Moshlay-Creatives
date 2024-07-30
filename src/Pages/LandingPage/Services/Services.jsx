import { Translate } from "@mui/icons-material";
import { Box, colors, Divider, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const Services = () => {
const theme = useTheme();
const isMedium = useMediaQuery(theme.breakpoints.down("md"));
const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
const listData =[
    {title : 'Web Developer' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services1.svg"},
    {title : 'Search Engine Optimization' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services2.svg"},
    {title : 'App Developer' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services3.svg"},
    {title : 'Email Marketing' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services4.svg"},
    {title : 'Block Chain' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services5.svg"},
    {title : 'Socail Medai Marketing' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services6.svg"},
    {title : 'Quality Assurance' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services7.svg"},
    {title : 'Pay-Par-Click(PPC)' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services8.svg"},
    {title : 'UI/UX Designing' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services9.svg"},
    {title : 'Content Marketing' , subTitle:'A wide client base across various industries is proof of our ability to deliver remarkable software solutions.', image : "services10.svg"},
]
  return (
    <>
      <Box sx={{
        marginBottom:'1rem',
        padding:'2.5% 10%'
        }}>
        <Box marginBottom={'2rem'}>
          <Typography variant="h3" sx={{
            color:theme.palette.primary.main,
            fontSize: isSmall ?  '1.6rem' : isMedium ? '2rem' :  '2.5rem',
            textAlign:'center',
            marginBottom:'1rem',
            marginTop:'1rem'
          }}>
            Affordable Digital Solution & Marketing Services
          </Typography>
          <Typography variant="body2" sx={{
            color:'white',
            fontSize: isMedium ? '1rem' : '1.1rem',
            textAlign:'center',
            marginBottom:'-2rem'
            
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

          <Grid container spacing={5} sx={{
            marginTop:'.5rem'
          }}>

            {listData.map((val,ind)=>(

              <Grid item key={ind} lg={6} md={6} sm={12} xs={12}>
              <Box  sx={{
                position:'relative',
                backgroundImage:`url(${val.image})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'cover',
                display:'flex',
                alignItems:'center',
                padding:'3rem',
                width:'100%',
                height:isMedium ? '25vh' : isSmall ? '20vh' : "30vh",
                overflow:'hidden',
                '&:hover .overplay ': {
                  transform:'translateX(0%)'
                },
               '&:hover .diviver-text-overplay': {
                transform:'translateX(-150%)'
               },
              // '&:hover .divider': {
              //   transform:'translateX(-1000%)'
              //  }
            }}>
              {/* =======================HOVER BOX=========================== */}
              <Box className='overplay'
              sx={{
                width:'100%',
                position:'absolute',
                right:0 ,
                bottom:0,
                top:0 ,
                backgroundColor:'#050913e3',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:'2rem',
                transform:'TranslateX(100%)',
                transition:'transform 0.5s ease-in-out'
                        }}>
              <Typography sx={{
                    color:'white',fontSize:'1rem',
                    fontWeight:'200',
                    // marginLeft: '1rem'
                }}>{val.subTitle}</Typography>
              </Box>
              {/* ================================================================= */}
                <Box  className="diviver-text-overplay" sx={{
                  display:'flex',
                  alignItems:'center',
                  transform: 'translateX(0)', 
                  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out', 
                }}>
                <Divider className="divider"
                 sx={{
                    height:'30px',
                    width:'8px',
                    backgroundColor:theme.palette.primary.main,
                    // transform:'TranslateX(100%)',
                    // transition:'transform 0.3s ease-in-out'
                    // orientation:'horiental'
                }}/>
                <Typography className="overplay-title"
                sx={{
                    color:'white',
                    fontSize: isSmall ? '1.3rem' : isMedium ? '1.5rem' : '1.7rem',
                    fontWeight:'500',
                    marginLeft: '1rem',
                    // transform: 'translateX(0)', 
                    // transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}>{val.title}</Typography>
                </Box>
            </Box>
          </Grid>
            ))}
          </Grid>
      </Box>
    </>
  );
};

export default Services;
