import { Box, Button, Card, colors, Divider, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogsCard = () => {

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
    
    <Box>
            <Grid container spacing={5}>
              {cardData.map(( val,ind)=>(

            <Grid  item key={ind} lg={4} md={4} sm={12} xs={12}>
                <Card sx={{
                    backgroundColor:'#1c2844'
                }}>
                <Box width={'100%'}>
                    <img src={val.cardImage} alt="" width={'100%'} />
                </Box>
                <Box sx={{
                    padding:'1rem',
                    backgroundColor:'#1c2844',
                    // marginTop:'-3rem',
                     
                }}> 
                    {/* <Box > */}
                    <Button variant="contained" sx={{
                        fontSize:'.9rem',
                        textAlign:'center',
                        padding:'.6rem',
                        borderRadius:'5px',
                        marginTop:'-3rem',
                        color:'white',
                        textTransform:'none',
                        fontFamily:'Montserrat',
                        fontWeight:400
                    }}>
                        {val.cardDate}
                    </Button>
                    {/* </Box> */}
                    <Typography sx={{
                        fontSize: isSmall ? '1.1rem' : isMedium ? '1.2rem' : '1.2rem', 
                        color:'white',
                        fontFamily:'Montserrat',
                        fontWeight:400
                        
                        
                    }}>
                    {val.cardText}
                    </Typography>
                    
                    <Button sx={{
                      fontSize:'1rem',
                      marginLeft:'-.3rem',
                      textTransform:'none',
                      fontFamily:'Montserrat',
                      fontWeight:400
                    }}>
                      See More<MdKeyboardArrowRight  fontSize={"1.3rem"}/>
                    </Button>
                </Box>
                </Card>
            </Grid>
              ))}
            </Grid>
        </Box>

    
    </>
  )
}

export default BlogsCard