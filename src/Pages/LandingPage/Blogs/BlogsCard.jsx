import { Box, Button, Card, colors, Divider, Grid, Typography, useTheme, useMediaQuery, CardMedia, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAllBlogs } from "../../../store/actions/dataActions";
import dateFormat from "dateformat";



const BlogsCard = () => {

  const base = "https://zh0k2dcj-3700.euw.devtunnels.ms";
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const [blogsData, setBlogsData] = useState([]);
    const [image, setImage]=useState('')
    // const [date,setDate]=useState('')

    useEffect(()=>{

      const fetchData = async ()=>{
        const res = await dispatch(getAllBlogs())
        const result = (res && res.data.data && res.data.data[0].images) || [];
        console.log(res.data.data)
        try {
          setBlogsData(res.data.data)
          setImage(result);

        } catch (error) {
          
        }
      }
      fetchData();
    },[dispatch])

    console.log('blog data ', blogsData)

    const date = dateFormat(blogsData.createdAt, "dS mmmm, yyyy")
    console.log('data new format ',date)

    
    
    console.log('images ', image)

    // console.log('new', blogsData)
    
    
    // const  cardData =[
    //   { cardImage :'blog1.svg', cardDate : ' 28 JANUARY, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
    //   { cardImage :'blog1.svg', cardDate : ' 28 DECEMBER, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
    //   {cardImage :'blog1.svg', cardDate : ' 28 SEPTEMBER, 2023' , cardText : 'Lorem ipsum dolor sit am consectetur ipiscing eli...' },
    // ]

  return (
    <>
    
    <Box>
            <Grid container spacing={5}>
              {blogsData.map(( row,index)=>(
            <Grid  item key={index} lg={4} md={4} sm={12} xs={12} padding={'0rem'} >
                <Card sx={{
                    backgroundColor:'#1c2844',
                    // width:'20rem'
                    width:'100%',
                    // width:'10rem'
                }}>
               <Box>
               <CardMedia
          component="img"
          image={`${base}${row.images[0].replace(/ /g, "%20")}`}
          alt=""
          sx={{
            width: '100%',
            height: 'auto',
            // maxHeight: '20rem', // Controls the max height of the image
            objectFit: 'cover',
          }}
        />
               </Box>
                <CardContent sx={{
                    padding:'1rem',
                    backgroundColor:'#1c2844',
                    // marginTop:'-3rem',
                    // width:'100%'
                     
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
                    }}
                    onClick={()=> navigate('/blogs-article')}
                    >
                        {date}
                    </Button>
                    {/* </Box> */}
                    <Typography sx={{
                        fontSize: isSmall ? '1.1rem' : isMedium ? '1.2rem' : '1.2rem', 
                        color:'white',
                        fontFamily:'Montserrat',
                        fontWeight:400
                        
                        
                    }}>
                    {row.title}
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
                </CardContent>
                </Card>
            </Grid>
              ))} 
            </Grid>
        </Box>

    
    </>
  )
}

export default BlogsCard