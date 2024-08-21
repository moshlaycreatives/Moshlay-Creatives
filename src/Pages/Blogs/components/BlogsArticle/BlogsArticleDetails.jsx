import { Box, Divider, Typography, useTheme, useMediaQuery, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
// import BlogsCard from '../../../LandingPage/Blogs/blogsCard';
import { useParams } from 'react-router';
import { SendBlogsId } from '../../../../store/actions/dataActions';
import { useDispatch } from 'react-redux';
import dateFormat from 'dateformat';
import BlogsCard from '../../../LandingPage/Blogs/blogsCard';



const BlogsArticleDetails = () => {
    const base = "https://zh0k2dcj-3700.euw.devtunnels.ms";
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
    const [loading , setLoading] = useState(false);
    const [singleBlog, setSingleBlog] = useState({});

  const {id} = useParams()

// console.log(id, 'iddddddddddd')


useEffect(()=>{
    //    const res =  dispatch(SendBlogsId(id))
    const fetchData = async ()=>{
        // console.log('getsingle blcog',res.data)
        setLoading(true)
        try {
            const res = await dispatch(SendBlogsId(id));
            setSingleBlog(res.data.data);

        } catch (error) {
            throw(error);
        } finally {
            setLoading(false)
        }
        
    }
    fetchData();
},[dispatch])

const date = dateFormat(singleBlog.createdAt, 'dS mmmm, yyyy')

// console.log("single blog data ", singleBlog.createdBy.name)  


    // const listData = [
    //     {
    //         subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //     },
    //     {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
    //         subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
    //     },
    //     {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
    //         subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         image : 'blogsArticle1.svg'
    //     },
    //     {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
    //         subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
    //     },
    //     {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
    //         subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
    //         subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
    //     },
    // ]


  return (
    <>
     {loading ? ( 
      <Box sx={{
        display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'
      }}>
        <CircularProgress/>
      </Box>
    ) : (
        <>
         <Box sx={{
        padding :'0 10%'
    }}>
        {/* <Box width={'100%'}>
        <img src={`${base}${singleBlog?.images[0]?.replace(/ /g, "%20")}`}
    
                 alt="" 
                  width={'100%'}
                  height={'400rem'}/>
        </Box> */}

<Box width={'100%'}>
    {singleBlog?.images?.[0] ? (
        <img 
            src={`${base}${singleBlog.images[0].replace(/ /g, "%20")}`} 
            alt="" 
            width={'100%'} 
            height={'400rem'} 
        />
    ) : (
        <div>No Image Available</div>
    )}
</Box>
        <Box>
            <Typography sx={{
                color:theme.palette.primary.main,
                fontSize: isSmall ? '1.4rem' : isMedium ? '2.2rem' : "3rem",
                fontWeight:600,
                textAlign:'center',
                marginTop:'2rem',
                fontFamily:'Montserrat'
            }}>
            {singleBlog.title}
            </Typography>
            <br />
            <Typography sx={{
                color:'white',
                fontSize:'1rem',
                fontWeight:400,
                textAlign:'center',
                fontFamily: 'Montserrat',
            }}>
            {singleBlog.description}
            </Typography>
            <br />
            <Typography sx={{
                color:'white',
                fontSize:'1rem',
                fontWeight:400,
                textAlign:'center',
                fontStyle:'italic',
                fontFamily: 'Montserrat',
            }}>
                By <span style={{color:'red' , color:'#98c447',fontFamily: 'Montserrat', }} >
                    {singleBlog?.createdBy?.name}
                    </span>
            </Typography>
        </Box>
        <br /><br />

        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Box sx={{display:'flex' , alignItems:'center'}}>
                <CiClock2  style={{color:theme.palette.primary.main, 
                    fontSize: isSmall ? '1rem' : isMedium ? '1.1rem' : "1.3rem", 
                     }}/>
                <Typography sx={{color:'white',
                     fontSize: isSmall ? '.8rem' : isMedium ? '1rem' : "1.1rem",  fontFamily: 'Montserrat',
                     fontWeight:400, paddingLeft:'.2rem'}}>
                    Reading Time:{singleBlog.readingTime} mins
                </Typography>
            </Box>

            <Box sx={{display:'flex' , alignItems:'center'}}>
                <SlCalender  style={{color:theme.palette.primary.main, 
                    fontSize: isSmall ? '1rem' : isMedium ? '1.1rem' : "1.3rem", 
                     }}/>
                <Typography sx={{color:'white',
                  fontSize: isSmall ? '.8rem' : isMedium ? '1rem' : "1.1rem",  fontFamily: 'Montserrat',
                  fontWeight:400, paddingLeft:'.5rem'}}>
                    {date}
                </Typography>
            </Box>
        </Box>
        {/* <br /> */}
        <Divider sx={{ color:'white', width:'100%', height:'2px', backgroundColor:'white', marginTop:'.5rem'}} />


        {/* {singleBlog.map((row)=>( */}
            <Box>
                <br />
            <Typography sx={{color:theme.palette.primary.main,
                 fontSize: isSmall ? '1.3rem' : isMedium ? '1.5rem' : "1.8rem", fontFamily: 'Montserrat',
                  fontFamily:'600'}}>
            {singleBlog.title}
            </Typography>
            <br />
            <Typography sx={{color:'white', fontSize:'1rem', fontWeight:'400',fontFamily: 'Montserrat',}}>
            {singleBlog.description}
            </Typography>
            <br />
            <Typography sx={{color:'white', fontSize:'1rem', fontWeight:'400',fontFamily: 'Montserrat',}}>
            {singleBlog.description}
            </Typography>
            <br />
            {/* <Box width={'100%'}>
                <img src={`${base}${singleBlog?.images[0]?.replace(/ /g, "%20")}`}
                 alt="" 
                  width={'100%'}
                  height={'400rem'}/>
            </Box> */}

            
<Box width={'100%'}>
    {singleBlog?.images?.[0] ? (
        <img 
            src={`${base}${singleBlog.images[0].replace(/ /g, "%20")}`} 
            alt="" 
            width={'100%'} 
            height={'400rem'} 
        />
    ) : (
        <div>No Image Available</div>
    )}
</Box>
        </Box>
        {/* ))} */}


    </Box>

    <br />
    <Box sx={{padding:'0 10%'}}>
        <Typography sx={{color:theme.palette.primary.main,
                 fontSize: isSmall ? '1.4rem' : isMedium ? '2.2rem' : "2.5rem", fontFamily: 'Montserrat',
               fontWeight:600, textAlign:'center'}}>
            Related Post
        </Typography>
        <br />
        <BlogsCard/>
    </Box>
    <br /><br /><br />
    
        </>
    )}
   
    </>
  )
}

export default BlogsArticleDetails;