import { Box, colors, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Services = () => {
const theme = useTheme();
const listData =[
    {title : 'Web Developer' , image : "services1.svg"},
    {title : 'Search Engine Optimization' , image : "services2.svg"},
    {title : 'App Developer' , image : "services3.svg"},
    {title : 'Email Marketing' , image : "services4.svg"},
    {title : 'Block Chain' , image : "services5.svg"},
    {title : 'Socail Medai Marketing' , image : "services6.svg"},
    {title : 'Quality Assurance' , image : "services7.svg"},
    {title : 'Pay-Par-Click(PPC)' , image : "services8.svg"},
    {title : 'UI/UX Designing' , image : "services9.svg"},
    {title : 'Content Marketing' , image : "services10.svg"},
]
  return (
    <>
      <Box sx={{
        margin:'2rem 0rem'
      }}>
        <Box marginBottom={'2rem'}>
          <Typography variant="h3" sx={{
            color:theme.palette.primary.main,
            fontSize:'2.5rem',
            textAlign:'center',
            marginBottom:'1rem'
          }}>
            Affordable Digital Solution & Marketing Services
          </Typography>
          <Typography variant="p" sx={{
            color:'white',
            fontSize:'1.1rem',
            textAlign:'center',
            marginBottom:'1rem'
            
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
                backgroundImage:`url(${val.image})`,
                display:'flex',
                alignItems:'center',
                padding:'4rem'
            }}>
                <Divider  sx={{
                    height:'30px',
                    width:'8px',
                    backgroundColor:theme.palette.primary.main,
                    // orientation:'horiental'
                }}/>
                <Typography sx={{
                    color:'white',fontSize:'1.9rem',
                    fontWeight:'500',
                    marginLeft: '1rem'
                }}>{val.title}</Typography>
            </Box>
          </Grid>
            ))}
          </Grid>
      </Box>
    </>
  );
};

export default Services;
