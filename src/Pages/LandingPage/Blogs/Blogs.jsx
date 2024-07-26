import { Box, Button, Card, colors, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Blogs = () => {
const theme = useTheme();

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
            marginBottom:'1rem'
          }}>
            Blogs
          </Typography>
          <Typography variant="p" sx={{
            color:'white',
            fontSize:'1.1rem',
            textAlign:'center',
            marginBottom:'1rem'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat auctor ipsum, a suscipit 
            lacus efficitur ut. Fusce sit amet nunc vitae urna commodo mattis in in turpis.
          </Typography>
        </Box>
        
        <Box>
            <Grid container spacing={5}>
              {cardData.map(( val,ind)=>(

            <Grid  item key={ind} lg={4} md={4} sm={12} xs={12}>
                <Card sx={{
                    backgroundColor:'#18232d'
                }}>
                <Box width={'100%'}>
                    <img src={val.cardImage} alt="" width={'100%'} />
                </Box>
                <Box sx={{
                    padding:'1rem',
                    backgroundColor:'#18232d',
                    // marginTop:'-3rem',
                     
                }}> 
                    {/* <Box > */}
                    <Button variant="contained" sx={{
                        // fontSize:'1rem',
                        
                        // width:'50%',
                        textAlign:'center',
                        padding:'.6rem',
                        borderRadius:'5px',
                        marginTop:'-3rem',
                        color:'white',
                        textTransform:'none'
                    }}>
                        {val.cardDate}
                    </Button>
                    {/* </Box> */}
                    <Typography sx={{
                        fontSize:'1.3rem',
                        color:'white',
                        
                        
                    }}>
                    {val.cardText}
                    </Typography>
                    
                    <Button sx={{
                      marginLeft:'-.3rem',
                      textTransform:'none'
                    }}>
                      See More<MdKeyboardArrowRight  fontSize={"1.3rem"}/>
                    </Button>
                </Box>
                </Card>
            </Grid>
              ))}
            </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Blogs;
