import { Box, Button, Card, colors, Divider, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import BlogsCard from "./blogsCard";
import { useNavigate } from "react-router";

const Blogs = () => {
  const navigate = useNavigate();
  const theme = useTheme();
const isMedium = useMediaQuery(theme.breakpoints.down("md"));
const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

const  cardData =[
  { cardImage :'blog1.svg', cardDate : ' 28 JANUARY, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
  { cardImage :'blog1.svg', cardDate : ' 28 DECEMBER, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
  {cardImage :'blog1.svg', cardDate : ' 28 SEPTEMBER, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
]

  return (
    <>
      <Box sx={{
        margin:'2rem 0rem',
        padding:'0 10%'
      }}>
        <Box marginBottom={'2rem'}>
          <Typography variant="h3" sx={{
            color:theme.palette.primary.main,
            fontSize:'2.5rem',
            textAlign:'center',
            marginBottom:'1rem',
            fontFamily:'Montserrat',
            fontWeight:600
          }}>
            Blogs
          </Typography>
          <Typography  sx={{
            color:'white',
            fontSize: isMedium ? '1rem' : '1.1rem',
            textAlign:'center',
            marginBottom:'1rem',
            fontFamily:'Montserrat',
            fontWeight:400
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat auctor ipsum, a suscipit 
            lacus efficitur ut. Fusce sit amet nunc vitae urna commodo mattis in in turpis.
          </Typography>
        </Box>
        
        
        
        <BlogsCard/>
        <Box sx={{
              textAlign:'center'
            }}>
            <Button variant="contained" sx={{
              color:'white', fontSize:'1rem', fontFamily:'Montserrat',
              textTransform:'none',fontWeight:500,
              marginTop:'1rem', 
            }}
            onClick={(e)=>navigate('/blogs')}
            >
              View More</Button>
            </Box>

      </Box>
    </>
  );
};

export default Blogs;



 
// ========================BLOGS CARD ====================================

// <Box>
//             <Grid container spacing={5}>
//               {cardData.map(( val,ind)=>(

//             <Grid  item key={ind} lg={4} md={4} sm={12} xs={12}>
//                 <Card sx={{
//                     backgroundColor:'#18232d'
//                 }}>
//                 <Box width={'100%'}>
//                     <img src={val.cardImage} alt="" width={'100%'} />
//                 </Box>
//                 <Box sx={{
//                     padding:'1rem',
//                     backgroundColor:'#18232d',
                     
//                 }}> 
//                     <Button variant="contained" sx={{
//                         fontSize:'.9rem',
//                         textAlign:'center',
//                         padding:'.6rem',
//                         borderRadius:'5px',
//                         marginTop:'-3rem',
//                         color:'white',
//                         textTransform:'none',
//                         fontFamily:'Montserrat',
//                         fontWeight:400
//                     }}>
//                         {val.cardDate}
//                     </Button>
//                     <Typography sx={{
//                         fontSize: isSmall ? '1.1rem' : isMedium ? '1.2rem' : '1.2rem', 
//                         color:'white',
//                         fontFamily:'Montserrat',
//                         fontWeight:400
                        
                        
//                     }}>
//                     {val.cardText}
//                     </Typography>
                    
//                     <Button sx={{
//                       fontSize:'1rem',
//                       marginLeft:'-.3rem',
//                       textTransform:'none',
//                       fontFamily:'Montserrat',
//                       fontWeight:400
//                     }}>
//                       See More<MdKeyboardArrowRight  fontSize={"1.3rem"}/>
//                     </Button>
//                 </Box>
//                 </Card>
//             </Grid>
//               ))}
//             </Grid>
//         </Box>