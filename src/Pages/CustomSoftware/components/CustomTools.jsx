import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, useTheme, useMediaQuery, Typography, Grid } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    //  style={{display:'flex',

    // }}
    // width={'100%'}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py:3}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTools() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listImage1=[
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
  ]
  const listImage2=[
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
  ]
  const listImage3=[
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
    {img:'/webdevtech1.png'},
  ]

  return (
    <Box sx={{ width: '100%', padding:'0% 10%' ,marginBottom:isSmall ?  "-2rem": '-1rem',}}>
      {/* ========================================================TEXT PART============================================= */}
      <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            marginTop:isSmall ?  "-2rem": '-1rem',
            
        }}>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
              marginBottom:'0.5 rem',
              fontFamily: "montserrat",
            }}
          >
            {" "}
            Tools & Technologies
          </Typography>

          {/* <Typography
            sx={{
              fontSize: isSmall ? "0.9rem" :"1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '90%',
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing
            you achieve those goals. Is it quality website traffic you seek?
          </Typography> */}
        </Box>
        <br /><br />
      <Box sx={{ 
        display:'flex',
        justifyContent:'center',
        width:'100%'
       }}>
      <Tabs
      value={value}
      onChange={handleChange}
      variant={isMedium ? 'scrollable' : 'fullWidth'}
    //   justifyContent={'start'}   
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        "& .MuiTabs-indicator": {
          backgroundColor: 'white',
          height:'4px'
        },
      }}
    >
      <Tab
        label="Tools & Technologies"
        {...a11yProps(0)}
        sx={{
            fontSize: isSmall ? "1rem": isMedium? "1.2rem": '1.3rem',
            textTransform:'none',
          fontWeight: 400,
          color: 'white',
          fontFamily: 'Montserrat',
          justifyContent: 'flex-start', // Aligns the label to the start
      textAlign: 'left', // Ensures the text is aligned left within the Tab
      alignItems: 'flex-start', // Aligns the content to the top of the Tab
          "&.Mui-selected": {
            border: "1px solid #98c447",
            color: 'white',
          },
        }}
      />
    <Tab
        label="Programming Languages"
        {...a11yProps(0)}
        sx={{
            fontSize: isSmall ? "1rem": isMedium? "1.2rem": '1.3rem',
            textTransform:'none',
          fontWeight: 400,
          color: 'white',
          fontFamily: 'Montserrat',
          justifyContent: 'flex-start', // Aligns the label to the start
      textAlign: 'left', // Ensures the text is aligned left within the Tab
      alignItems: 'flex-start', // Aligns the content to the top of the Tab
          "&.Mui-selected": {
            border: "1px solid #98c447",
            color: 'white',
          },
        }}
      />
       <Tab
        label="Database & Reporting"
        {...a11yProps(0)}
        sx={{
            fontSize: isSmall ? "1rem": isMedium? "1.2rem": '1.3rem',
            textTransform:'none',
          fontWeight: 400,
          color: 'white',
          fontFamily: 'Montserrat',
          justifyContent: 'flex-start', // Aligns the label to the start
      textAlign: 'left', // Ensures the text is aligned left within the Tab
      alignItems: 'flex-start', // Aligns the content to the top of the Tab
          "&.Mui-selected": {
            border: "1px solid #98c447",
            color: 'white',
          },
        }}
      />
    </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0} width={'100%'}>
        <Box sx={{
          width:'100%'
        }}>
          <Box sx={{width:'100%',
            display:'flex',
             flexWrap:'wrap',
            justifyContent:'center'
          }}>
            <Grid container justifyContent={'center'}>
                {listImage1.map((row,index)=>(
                    <Grid key={index}  item lg={2.4} md={3} sm={4} xs={6} sx={{ width: '100%' }}>
                    <Box sx={{width:'100%'}}>
                <img src={row.img} alt="" style={{width:'100%'}}/>
                </Box>
                    </Grid>
                ))}
            </Grid>
             {/* <img src="webdevtech1.png" alt="" style={{width:'240px'}}/>
             <img src="webdevtech2.png" alt="" style={{width:'240px'}}/>
            <img src="webdevtech3.png" alt="" style={{width:'240px'}}/>
            <img src="webdevtech4.png" alt="" style={{width:'240px'}}/>
            <img src="webdevtech5.png" alt="" style={{width:'240px'}}/>  */}
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box sx={{
          width:'100%'
        }}>
          <Box sx={{width:'100%',
            display:'flex', flexWrap:'wrap',justifyContent:'center'
          }}>
             <Grid container justifyContent={'center'}>
                {listImage2.map((row,index)=>(
                    <Grid key={index}  item lg={2.4} md={3} sm={4} xs={6} sx={{ width: '100%' }}>
                    <Box sx={{width:'100%'}}>
                <img src={row.img} alt="" style={{width:'100%'}}/>
                </Box>
                    </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box sx={{
          width:'100%'
        }}>
          <Box sx={{width:'100%',
            display:'flex', flexWrap:'wrap',justifyContent:'center'
          }}>
            <Grid container justifyContent={'center'}>
                {listImage3.map((row,index)=>(
                    <Grid key={index}  item lg={2.4} md={3} sm={4} xs={6} sx={{ width: '100%' }}>
                    <Box sx={{width:'100%'}}>
                <img src={row.img} alt="" style={{width:'100%'}}/>
                </Box>
                    </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}