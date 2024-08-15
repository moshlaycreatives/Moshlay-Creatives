import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, useTheme } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home'; 
import { FaCircle } from "react-icons/fa";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: 'red' }}>{children}</Box>
      )}
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

const WebDevelopmentBenefit = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex' }}>

        <Grid container >
            <Grid item lg={5} mg={5} sm={12} xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="vertical"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Tab
              icon={<FaCircle  className='icon' color={theme.palette.primary.main}/>} // Add icon before text
              iconPosition="start" // Position the icon at the start
              label="Online Presence"
              {...a11yProps(0)}
              sx={{
                color: 'white', // Text color
                backgroundColor: '#1c2844', // Background color
                fontFamily: 'Arial', // Font family
                fontSize: '16px', // Font size
                fontWeight: 'bold', // Font weight
                width: '100%', // Custom width
                height: '3rem', // Custom height
                borderRadius: '5px', // Border radius
                '&.Mui-selected .icon': {
                  color: 'white', // Text color when selected
                },
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main, // Background color when selected
                  color: 'white', // Text color when selected
                  
                },
                '&:hover': {
                  backgroundColor:theme.palette.primary.main, // Background color on hover
                  
                },
              }}
            />
            <Tab
             icon={<FaCircle />} // Add icon before text
              iconPosition="start"
              label="Item Two"
              {...a11yProps(1)}
              sx={{
                color: 'white', // Text color
                backgroundColor: 'blue', // Background color
                fontFamily: 'Arial', // Font family
                fontSize: '16px', // Font size
                fontWeight: 'bold', // Font weight
                width: '100%', // Custom width
                height: '3rem', // Custom height
                borderRadius: '5px', // Border radius
                '&.Mui-selected': {
                  backgroundColor: 'green', // Background color when selected
                  color: 'white', // Text color when selected
                },
                '&:hover': {
                  backgroundColor: 'darkblue', // Background color on hover
                },
              }}
            />
            <Tab
              label="Item Three"
              {...a11yProps(2)}
              sx={{
                color: 'white', // Text color
                backgroundColor: '#1c2844', // Background color
                fontFamily: 'Arial', // Font family
                fontSize: '16px', // Font size
                fontWeight: 'bold', // Font weight
                width: '100%', // Custom width
                height: '3rem', // Custom height
                borderRadius: '5px', // Border radius
                '&.Mui-selected': {
                  backgroundColor: 'green', // Background color when selected
                  color: 'white', // Text color when selected
                },
                '&:hover': {
                  backgroundColor: 'darkblue', // Background color on hover
                },
              }}
            />
          </Tabs>
        </Box>

        
            </Grid>
            <Grid item lg={5} mg={5} sm={12} xs={12}>
            <CustomTabPanel value={value} index={0}>
          Item kk
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
           </Grid>


        </Grid>
      </Box>
    </>
  );
};

export default WebDevelopmentBenefit;
