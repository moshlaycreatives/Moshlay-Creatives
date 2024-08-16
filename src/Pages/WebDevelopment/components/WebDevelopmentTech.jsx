import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, useTheme, useMediaQuery, Typography } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    //  style={{display:'flex',

    // }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function WebDevelopmentTech() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding:'0% 10%' }}>
      {/* ========================================================TEXT PART============================================= */}
      <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
            // justifyContent:'center'
        }}>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontWeight: 600,
              color: theme.palette.primary.main,
              textAlign: "center",
              // marginTop:'4rem',
              fontFamily: "montserrat",
            }}
          >
            {" "}
            Technologies We Work With
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              width:isSmall ? '100%' : isMedium  ? '90%' : '90%',
              fontFamily: "montserrat",
            }}
          >
            Your business is unique and has distinct goals. That’s why we carry a vast arsenal of digital marketing
            you achieve those goals. Is it quality website traffic you seek?
          </Typography>
        </Box>
        <br /><br />
      <Box sx={{ 
        display:'flex',
        justifyContent:'center'
       }}>
        <Tabs value={value} onChange={handleChange} 
        variant={isMedium ? 'scrollable' : ''}
        sx={{
          display:'flex',
          gap:3,
          "& .MuiTabs-indicator": {
      display: "none", // Hides the underline indicator
    },
        }}>
          <Tab label="Item One" {...a11yProps(0)} sx={{
            border:'1px solid white',
            fontSize:'1rem',
            fontWeight:400,
            borderRadius:'50px',
            padding:isSmall ? '.5rem 1rem ': isMedium ? "1rem 2rem " : '1rem 3rem ',
           color:'white', 
           fontFamily:'Montserrat',
           marginRight:isSmall ? '1rem' : isMedium ? '2rem' :  '4rem',
           "&.Mui-selected ": {
                      border: "1px solid #98c447",
                    },
          }}/>

<Tab label="Item One" {...a11yProps(0)} sx={{
            border:'1px solid white',
            fontSize:'1rem',
            fontWeight:400,
            borderRadius:'50px',
            padding:isSmall ? '.5rem 1rem ': isMedium ? "1rem 2rem " : '1rem 3rem ',
           color:'white', 
           fontFamily:'Montserrat',
           marginRight:isSmall ? '1rem' : isMedium ? '2rem' :  '4rem',
           "&.Mui-selected ": {
                      border: "1px solid #98c447",
                    },
          }}/>

<Tab label="Item One" {...a11yProps(0)} sx={{
            border:'1px solid white',
            fontSize:'1rem',
            fontWeight:400,
            borderRadius:'50px',
            padding:isSmall ? '.5rem 1rem ': isMedium ? "1rem 2rem " : '1rem 3rem ',
           color:'white', 
           fontFamily:'Montserrat',
           marginRight:isSmall ? '1rem' : isMedium ? '2rem' :  '4rem',
           "&.Mui-selected ": {
                      border: "1px solid #98c447",
                    },
          }}/>

<Tab label="Item One" {...a11yProps(0)} sx={{
            border:'1px solid white',
            fontSize:'1rem',
            fontWeight:400,
            borderRadius:'50px',
            padding:isSmall ? '.5rem 1rem ': isMedium ? "1rem 2rem " : '1rem 3rem ',
           color:'white', 
           fontFamily:'Montserrat',
           marginRight:isSmall ? '1rem' : isMedium ? '2rem' :  '4rem',
           "&.Mui-selected ": {
                      border: "1px solid #98c447",
                    },
          }}/>

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{
          width:'100%'
        }}>
          <Box sx={{width:'100%',
            display:'flex', flexWrap:'wrap',
            justifyContent:'center'
          }}>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
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
             <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            {/* <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/> */}
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
             <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Box sx={{
          width:'100%'
        }}>
          <Box sx={{width:'100%',
            display:'flex', flexWrap:'wrap',
            justifyContent:'center'
          }}>
             <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
            <img src="appdevtechimg.png" alt="" style={{width:'240px'}}/>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}