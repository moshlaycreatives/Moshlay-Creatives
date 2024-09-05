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
          padding: isSmall ? "2rem 10%" : "3rem 10%",
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
                At Moshlay Creatives, we specialize in crafting bespoke software
                solutions that perfectly align with your unique business needs.
                Our team of skilled developers leverages the latest technologies
                to build innovative and efficient applications tailored to your
                specific requirements. From concept to deployment, we work
                closely with you to ensure your satisfaction. We understand that
                every business is different, and we strive to create solutions
                that not only meet your functional needs but also enhance your
                overall business objectives.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
              Our custom application development process begins with a thorough understanding of your business goals, target audience, and desired outcomes. We conduct in-depth consultations to gather valuable insights and identify potential challenges. Once we have a clear vision, our team of experienced developers gets to work, leveraging their expertise in various programming languages, frameworks, and tools to create a tailored solution.
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
                Web Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                Our expertise extends to developing cutting-edge web applications that provide engaging user experiences and drive business growth. We design and develop responsive websites, e-commerce platforms, and web-based tools that are both visually appealing and functionally robust. Our team is skilled in using modern web development frameworks and technologies to build scalable and maintainable web applications. We prioritize user-centered design to ensure that your applications are easy to navigate and intuitive to use.

              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               We understand that your website is often the first impression your customers have of your business. That's why we focus on creating visually appealing and engaging designs that reflect your brand identity. Our team is skilled in using the latest design trends and best practices to create websites that are both aesthetically pleasing and effective.

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
                Applied AI Solutions
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                Harness the power of artificial intelligence with Moshlay Creatives. We offer a range of applied AI solutions, including machine learning, natural language processing, and computer vision. Our team can help you integrate AI into your business processes to improve efficiency, enhance customer experiences, and gain valuable insights from data. We leverage the latest AI techniques to develop intelligent applications that can automate tasks, make data-driven decisions, and provide personalized recommendations.

              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               We work closely with you to understand your data, goals, and challenges, and we develop AI models that are tailored to your specific requirements. Our AI solutions can be used for a variety of purposes, including customer service, marketing, sales, and operations. We can help you automate repetitive tasks, improve decision-making, and gain a competitive edge in your industry.

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
             Enterprise Application Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               We specialize in developing enterprise-grade software solutions that streamline operations and drive productivity. Our team has extensive experience in building complex applications that can handle large-scale data processing, integration with existing systems, and scalability to meet the demands of your growing business. We understand the unique challenges and requirements of enterprise applications, and we deliver solutions that are reliable, secure, and adaptable to your evolving business needs.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               Our enterprise application development process is tailored to meet the specific needs of large organizations. We work closely with your IT team to ensure that our solutions integrate seamlessly with your existing systems. We also focus on security and compliance to protect your sensitive data. supply chain management, financial management, and human resources. We can help you streamline your operations, improve efficiency, and reduce costs.
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
              Mobile Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                Our mobile development services cater to both iOS and Android platforms. We create native mobile apps that offer a seamless user experience and deliver value to your target audience. Whether you need a consumer-facing app or an internal tool, our team can develop solutions that meet your specific requirements. We focus on creating apps that are not only visually appealing but also perform well and provide a delightful user experience. We understand that mobile apps have become an essential part of modern business.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
              That's why we focus on creating apps that are user-friendly, intuitive, and engaging. We use the latest mobile development frameworks and technologies to build high-quality apps that are optimized for performance and security. Our mobile development services include app design, development, testing, and deployment. We can also provide ongoing maintenance and support to ensure that your app remains up-to-date and functional.
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
               Cloud Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               Leverage the power of cloud computing with Moshlay Creatives. We offer cloud-based solutions that provide scalability, flexibility, and cost-effectiveness. Our team can help you migrate existing applications to the cloud, develop new cloud-native applications, and optimize your cloud infrastructure. We have expertise in working with leading cloud platforms and can help you select the best cloud solution for your business. Cloud computing offers several benefits, including increased scalability, improved performance, 
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
             and reduced costs. By leveraging the cloud, you can access the resources you need when you need them, without the need for significant upfront investments. Our cloud development services include cloud migration, cloud optimization, and cloud-native application development. We can also provide ongoing maintenance and support to ensure that your cloud infrastructure is secure and reliable.
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
               SaaS Development
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
              We specialize in developing Software-as-a-Service (SaaS) applications that can be accessed and used over the Internet. Our SaaS solutions are designed to be scalable, secure, and easy to maintain, providing a convenient and cost-effective way to deliver your software to your customers. We focus on building SaaS applications that are user-friendly, reliable, and easy to deploy
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               SaaS applications offer many benefits, including reduced costs, improved scalability, and easier maintenance. By delivering your software as a service, you can reach a wider audience and reduce your operational overhead. Our SaaS development services include application design, development, deployment, and ongoing maintenance. We can also help you with marketing and sales to promote your SaaS application.
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
               Legacy Modernization
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
                Don't let outdated legacy systems hinder your business growth. Our team can help you modernize your legacy applications to improve performance, enhance security, and integrate with newer technologies. We offer services such as application migration, refactoring, and modernization strategies to ensure a smooth transition. We understand the challenges of modernizing legacy systems and can provide tailored solutions to meet your specific needs.
              </Typography>
              <br />
              <Typography
                sx={{ color: "white", fontSize: isSmall ? "0.9rem" : "1rem" }}
              >
               Modernizing your legacy systems can help you improve efficiency, reduce costs, and stay competitive. Our team can help you assess the state of your legacy systems and develop a modernization plan that meets your specific needs. We can also guide application migration, refactoring, and integration with newer technologies.
              </Typography>
            </CustomTabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomTabs;
