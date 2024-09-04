import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
// import { HiArrowLongRight } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%", height: "100%" }}
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
            backgroundColor: "#354745",
            // color:'white',
            width: "100%",
            height: "100%",
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

const CustomTabs = () => {
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
          padding: "3rem 10%",
          backgroundColor: "#1c2844",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
              fontFamily: "Montserrat",
              color: theme.palette.primary.main,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Moshlay Creatives Custom Software Development
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: isSmall ? ".9rem" : isMedium ? "1rem" : "1rem",
                fontFamily: "Montserrat",
                color: "white",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "2rem ",
                width: isSmall ? "100%" : "80%",
              }}
            >
              Your business is unique and has distinct goals. That’s why we
              carry a vast arsenal of digital marketing you achieve those goals.
              Is it quality website traffic you seek?
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={5}>
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
                variant={isMedium ? "scrollable" : "fullWidth"}
                orientation={isMedium ? "horizontal" : "vertical"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  // gap:'100px'
                  // backgroundColor: "blue",
                }}
              >
                <Tab
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Custom Application Development "
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Web Application Development "
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Applied AI Solutions"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Enterprise Application Development"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Mobile Development"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Cloud Development"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="SaaS Development"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
                  icon={<HiArrowLongRight className="icon" />}
                  iconPosition="end"
                  label="Legacy Modernization"
                  {...a11yProps(1)}
                  sx={{
                    color: "white",
                    backgroundColor: "#354745",
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "3rem",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    ".icon": {
                      color: "#354745",
                      fontSize: "2.5rem",
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
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                At Moshlay Creatives, we specialize in creating bespoke software
                solutions that perfectly align with your unique business needs.
                Our team of skilled developers leverages the latest technologies
                to build innovative and efficient applications tailored to your
                specific requirements. From concept to deployment, we work
                closely with you to ensure your satisfaction.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                We ensure your business requirements and develop software that
                meets your requirements and exceeds your business scale. We deal
                in the following types of development. Take an overview of the
                list.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={5}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={6}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={7}>
              <Box>
                <img
                  src="/customtabs1.png"
                  alt=""
                  width={isSmall ? "50rem" : isMedium ? "60rem" : "70rem"}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: isSmall ? "1.3rem" : isMedium ? "1.5rem" : "1.8rem",
                  color: theme.palette.primary.main,
                  fontFamily: "Montserrat",
                  // textAlign:'center',
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Custom Application Development 8
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A well-designed website is more than just an online brochure;
                it's a digital source that allows businesses to showcase their
                products or services to a global audience. In today's digital
                age, having an online presence is crucial for attracting new
                customers and building brand awareness.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                A website serves as a central hub where potential customers can
                learn about a company's offerings, explore its values, and make
                informed decisions. By creating a visually appealing and
                informative website, businesses can establish credibility and
                connect with customers from all corners of the world.
              </Typography>
            </CustomTabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomTabs;
