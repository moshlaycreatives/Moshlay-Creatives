import { Box, Divider, Typography, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import BlogsCard from '../../../LandingPage/Blogs/blogsCard';


const BlogsArticleDetails = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

    const listData = [
        {
            subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
        },
        {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
            subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
        },
        {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
            subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            image : 'blogsArticle1.svg'
        },
        {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
            subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
        },
        {title:'Lorem ipsum dolor sit amet, consect etur adipiscing elit',
            subtitle1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            subtitle2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit, eget euismod mi massa ut lectus. Ut vulputate arcu vitae neque finibus consectetur. Mauris sapien augue, aliquet vitae mi vitae, fringilla posuere tortor. Aenean in quam nunc. Nulla laoreet lacus et dui feugiat, vel rhoncus metus fermentum. Etiam malesuada lorem vitae risus rutrum consectetur.',
            
        },
    ]


  return (
    <>
    <Box sx={{
        padding :'0 10%'
    }}>
        <Box width={'100%'}>
            <img src="blogsArticle2.svg" alt=""  width={'100%'}/>
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
            Lorem ipsum dolor sit amet, consect
            etur adipiscing elit
            </Typography>
            <br />
            <Typography sx={{
                color:'white',
                fontSize:'1rem',
                fontWeight:400,
                textAlign:'center',
                fontFamily: 'Montserrat',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ipsum pretium, aliquam quam a, rhoncus diam. Nulla sagittis, nunc et vulputate pretium, velit libero pharetra elit.
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
                By <spam style={{color:'red' , color:'#98c447',fontFamily: 'Montserrat', }} >moshlay creatives</spam>
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
                    Reading Time:10 mins
                </Typography>
            </Box>

            <Box sx={{display:'flex' , alignItems:'center'}}>
                <SlCalender  style={{color:theme.palette.primary.main, 
                    fontSize: isSmall ? '1rem' : isMedium ? '1.1rem' : "1.3rem", 
                     }}/>
                <Typography sx={{color:'white',
                  fontSize: isSmall ? '.8rem' : isMedium ? '1rem' : "1.1rem",  fontFamily: 'Montserrat',
                  fontWeight:400, paddingLeft:'.5rem'}}>
                    September 22, 2021
                </Typography>
            </Box>
        </Box>
        {/* <br /> */}
        <Divider sx={{ color:'white', width:'100%', height:'2px', backgroundColor:'white', marginTop:'.5rem'}} />


        {listData.map((row, id)=>(
            <Box key={id}>
                <br />
            <Typography sx={{color:theme.palette.primary.main,
                 fontSize: isSmall ? '1.3rem' : isMedium ? '1.5rem' : "1.8rem", fontFamily: 'Montserrat',
                  fontFamily:'600'}}>
            {row.title}
            </Typography>
            <br />
            <Typography sx={{color:'white', fontSize:'1rem', fontWeight:'400',fontFamily: 'Montserrat',}}>
            {row.subtitle1}
            </Typography>
            <br />
            <Typography sx={{color:'white', fontSize:'1rem', fontWeight:'400',fontFamily: 'Montserrat',}}>
            {row.subtitle2}
            </Typography>
            <br />
            <Box width={'100%'}>
                <img src={row.image} alt=""  width={'100%'}/>
            </Box>
        </Box>
        ))}


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
  )
}

export default BlogsArticleDetails;