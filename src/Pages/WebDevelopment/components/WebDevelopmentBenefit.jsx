// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
// import { FaCircle } from "react-icons/fa";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       style={{ width: "100%" }}
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box
//           sx={{
//             p: "2rem",
//             backgroundColor: "#1c2844",
//             width: "100%",
//             color: "white",
//             borderRadius: "10px",
//             fontSize: "1rem",
//             fontFamily: "Montserrat",
//             fontWeight: 400,
//           }}
//         >
//           {children}
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const WebDevelopmentBenefit = () => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMedium = useMediaQuery(theme.breakpoints.down("md"));

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           padding: "4rem 10%",
//           // backgroundColor: "PINK",
//         }}
//       >
//         <Grid container spacing={5}>
//           <Grid
//             item
//             lg={5}
//             md={5}
//             sm={12}
//             xs={12}
//             // backgroundColor={"red"}
//             width={"100%"}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: isSmall ? "row" : "column",
//                 width: "100%",

//               }}
//             >
//               <Tabs
//                 fullWidth
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="basic tabs example"
//                 orientation={isMedium ? "horizontal" : "vertical"}
//                 variant={isMedium ? "scrollable" : "fullWidth"}
//                 sx={{
//                   width: "100%", // Make the Tabs take 100% of the Grid width
//                   // backgroundColor: "blue",
//                   ".MuiTabs-flexContainer": {
//                     flexDirection: isSmall ? "row" : "column",
//                   },
//                   ".MuiTab-root": {
//                     width: "100%", // Ensure each Tab takes full width
//                     flexGrow: 1,
//                   },
//                 }}
//               >
//                 {[...Array(5).keys()].map((index) => (
//                   <Tab
//                     fullWidth
//                     key={index}
//                     icon={<FaCircle className="icon" />}
//                     iconPosition="start"
//                     label={`Item ${index + 1}`}
//                     {...a11yProps(index)}
//                     sx={{
//                       color: "white",
//                       backgroundColor: "#1c2844",
//                       fontFamily: "Montserrat",
//                       fontSize: "1.3rem",
//                       fontWeight: 500,
//                       // width:'300px',
//                       height: "3rem",
//                       borderRadius: "5px",
//                       textTransform: "none",
//                       textAlign: "center",
//                       display: "flex",
//                       justifyContent: "flex-start",
//                       // flexGrow: 1,
//                       marginBottom: isSmall ? "0rem" : ".5rem",
//                       ".icon": {
//                         color: theme.palette.primary.main,
//                       },
//                       "&.Mui-selected .icon": {
//                         color: "white",
//                       },
//                       "&.Mui-selected": {
//                         backgroundColor: theme.palette.primary.main,
//                         color: "white",
//                       },
//                       "&:hover": {
//                         backgroundColor: theme.palette.primary.main,
//                         color: "white",
//                       },
//                       "&:hover .icon": {
//                         color: "white",
//                       },
//                     }}
//                   />
//                 ))}
//               </Tabs>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             lg={7}
//             md={7}
//             sm={12}
//             xs={12}
//             // backgroundColor={"aqua"}
//             width={"100%"}
//           >
           
//            <Box sx={{
//             height:'100%'
//            }}>
//            {Array(6)
//               .fill("")
//               .map((_, index) => (
//                 <CustomTabPanel value={value} index={index} key={index}>
//                   <Typography>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book. It has sur vived not only five
//                     centuries, but also the leap into electronic ty pesetting,
//                     remaining essentially unchanged. It was popularised in the
//                     1960s with the release of Letraset sheets containing Lorem
//                     Ipsum passages, and more recently with. Lorem Ipsum is

//                     simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever
//                     since the 1500s, when an unknown printer took a galley of
//                     type and scrambled it to make a type specimen book. It has
//                     sur vived not only five centuries.
//                   </Typography>
//                 </CustomTabPanel>
//               ))}
//            </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default WebDevelopmentBenefit;






// old customized code
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
import { FaCircle } from "react-icons/fa";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: "2rem",
            backgroundColor: "#1c2844",
            width: "100%",
            color: "white",
            borderRadius: "10px",
            fontSize: "1rem",
            fontFamily: "Montserrat",
            fontWeight: 400,
          }}
        >
          {children}
        </Box>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const WebDevelopmentBenefit = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          // display: "flex" ,
          padding: "4rem 10%",
          // backgroundColor: "PINK",
        }}
      >
        <Box>
          <Typography sx={{
            fontSize:isSmall ? '1.5rem' : isMedium ? '2rem' : '2.5rem',
            fontFamily:'Montserrat',
            color:theme.palette.primary.main,
            fontWeight:600, textAlign:'center',
            marginBottom:'2rem '
          }}>
          Benefits of Website Development
          </Typography>
        </Box>
        <Grid container  spacing={5}>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            // backgroundColor={"red"}
            width={"100%"}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant={isMedium ? 'scrollable' : 'fullWidth'}
                orientation={isMedium ? 'horizontal' : 'vertical'}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  // gap:'100px'
                  // backgroundColor: "blue",
                }}
              >
                <Tab
                  icon={<FaCircle className="icon" />}
                  iconPosition="start"
                  label="Online presence"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#1c2844",
                    fontFamily: "Montserrat",
                    fontSize:isSmall ? '1rem' : isMedium ? "1.2rem" :  "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight:isMedium ? '0.5rem' : '0rem',
                    ".icon": {
                      color: theme.palette.primary.main,
                    },
                    "&.Mui-selected .icon": {
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                    "&:hover .icon": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                />

                <Tab
                  icon={<FaCircle className="icon" />} // Add icon before text
                  iconPosition="start"
                  label="Market Expansion"
                  {...a11yProps(1)}
                  sx={{
                    color: "white", // Text color
                    backgroundColor: "#1c2844", // Background color
                    fontFamily: "Montserrat", // Font family
                    fontSize:isSmall ? '1rem' : isMedium ? "1.2rem" :  "1.3rem",
                    fontWeight: 500, // Font weight
                    // width: "100%", // Custom width
                    height: "3rem", // Custom height
                    borderRadius: "5px", // Border radius
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: ".5rem",
                    marginRight:isMedium ? '0.5rem' : '0rem',

                    ".icon": {
                      color: theme.palette.primary.main,
                    },
                    "&.Mui-selected .icon": {
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.primary.main, // Background color when selected
                      color: "white", // Text color when selected
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                    "&:hover .icon": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                  }}
                />

                <Tab
                  icon={<FaCircle className="icon" />} // Add icon before text
                  iconPosition="start"
                  label="Faster Process"
                  {...a11yProps(1)}
                  sx={{
                    color: "white", // Text color
                    backgroundColor: "#1c2844", // Background color
                    fontFamily: "Montserrat", // Font family
                    fontSize:isSmall ? '1rem' : isMedium ? "1.2rem" :  "1.3rem",
                    fontWeight: 500, // Font weight
                    // width: "100%", // Custom width
                    height: "3rem", // Custom height
                    borderRadius: "5px", // Border radius
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: ".5rem",
                    marginRight:isMedium ? '0.5rem' : '0rem',

                    ".icon": {
                      color: theme.palette.primary.main,
                    },
                    "&.Mui-selected .icon": {
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.primary.main, // Background color when selected
                      color: "white", // Text color when selected
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                    "&:hover .icon": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                  }}
                />
                 <Tab
                  icon={<FaCircle className="icon" />}
                  iconPosition="start"
                  label="Credibility"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#1c2844",
                    fontFamily: "Montserrat",
                    fontSize:isSmall ? '1rem' : isMedium ? "1.2rem" :  "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight:isMedium ? '0.5rem' : '0rem',
                    ".icon": {
                      color: theme.palette.primary.main,
                    },
                    "&.Mui-selected .icon": {
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                    "&:hover .icon": {
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                    },
                  }}
                />

                <Tab
                  icon={<FaCircle className="icon" />} // Add icon before text
                  iconPosition="start"
                  label="Cost reduction"
                  {...a11yProps(1)}
                  sx={{
                    color: "white", // Text color
                    backgroundColor: "#1c2844", // Background color
                    fontFamily: "Montserrat", // Font family
                    fontSize:isSmall ? '1rem' : isMedium ? "1.2rem" :  "1.3rem",
                    fontWeight: 500, // Font weight
                    // width: "100%", // Custom width
                    height: "3rem", // Custom height
                    borderRadius: "5px", // Border radius
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: ".5rem",
                    marginRight:isMedium ? '0.5rem' : '0rem',

                    ".icon": {
                      color: theme.palette.primary.main,
                    },
                    "&.Mui-selected .icon": {
                      color: "white",
                    },
                    "&.Mui-selected": {
                      backgroundColor: theme.palette.primary.main, // Background color when selected
                      color: "white", // Text color when selected
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                    "&:hover .icon": {
                      backgroundColor: theme.palette.primary.main, // Background color on hover
                      color: "white",
                    },
                  }}
                />

              </Tabs>
            </Box>
          </Grid>

          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            // backgroundColor={"aqua"}
            width={"100%"}
          >
            <CustomTabPanel value={value} index={0}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries, but also the leap into
                electronic ty pesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with.
              </Typography>
              <br />
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries, but also the leap into
                electronic ty pesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with.
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries, but also the leap into
                electronic ty pesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with.
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries, but also the leap into
                electronic ty pesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with.
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries, but also the leap into
                electronic ty pesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with.
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                sur vived not only five centuries.
              </Typography>
            </CustomTabPanel>

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WebDevelopmentBenefit;
