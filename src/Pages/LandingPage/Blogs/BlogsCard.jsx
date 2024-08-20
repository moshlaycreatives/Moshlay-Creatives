import { Box, Button, Card, colors, Divider, Grid, Typography, useTheme, useMediaQuery, CardMedia, CardContent, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAllBlogs, SendBlogsId } from "../../../store/actions/dataActions";
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
    const [blogId, setBlogId]= useState('')
    const [loading , setLoading] = useState(false);
    // const [date,setDate]=useState('')

    useEffect(()=>{

      const fetchData = async ()=>{
        setLoading(true);
        try {
          const res = await dispatch(getAllBlogs())
        const result = (res && res.data.data && res.data.data[0].images) || [];
        // console.log(res.data.data)
          setBlogsData(res.data.data)
          setImage(result);

        } catch (error) {
          console.error('failed to fetch all blogs data ', error)
        } finally {
          setLoading(false)
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

  

    const handleClick = (blogId)=>{
     

      navigate(`/blogs-article/${blogId}`)
      // if
    }
    // console.log('Blog id id id ', blogId)
  return (
    <>
    
    {loading ? ( 
      <Box sx={{
        display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'
      }}>
        <CircularProgress/>
      </Box>
    ) : (
      <Box>
            <Grid container spacing={5}>
              {blogsData.map(( row,index)=>(
            <Grid  item key={index} lg={4} md={4} sm={12} xs={12} padding={'0rem'} >
               <Box sx={{
                width:'100%'
               }}>
               <Card variant="fullWidth" sx={{
                    backgroundColor:'#1c2844',
                    // width:'20rem'
                    width:'100%',
                    // width:'10rem'
                    // height:'100%'

                }}>
               <Box sx={{
                height:'10rem'
               }}>
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
               {/* <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/> */}
                <CardContent sx={{
                    padding:'1rem',
                    // flexGrow:1
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
                    }}
                    onClick={()=>handleClick(row._id)}
                    >
                      See More<MdKeyboardArrowRight  fontSize={"1.3rem"}/>
                    </Button>
                </CardContent>
                
                </Card>
               </Box>
            </Grid>
              ))} 
            </Grid>
        </Box>
    )}

    
    </>
  )
}

export default BlogsCard