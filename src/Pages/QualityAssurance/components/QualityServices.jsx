import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home';
import { FaCircle } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

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
            // backgroundColor: "#1c2844",
            // backgroundColor: "#354745",
            // p: "2rem",
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

const QualityServices = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = React.useState(0);
  const [isChangeContent, setIsChangeContent] = React.useState("");
  const [isChangeContent1, setIsChangeContent1] = React.useState("");
  const [isChangeContent2, setIsChangeContent2] = React.useState("");
  const [isChangeContent3, setIsChangeContent3] = React.useState("");
  const [activeButton, setActiveButton] = React.useState("");
  const [activeButton1, setActiveButton1] = React.useState("");
  const [activeButton2, setActiveButton2] = React.useState("");
  const [activeButton3, setActiveButton3] = React.useState("");

  //   console.log('tabtabtabtabtab' , isChangeContent)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const QAConsultancy = [
    {
      Id: 1, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "QA Strategy Audit",
      desc1:
        "Our QA strategy audit is a comprehensive evaluation of your existing QA processes, methodologies, and tools. We delve deep into your current practices to identify strengths, weaknesses, and areas for improvement. By analyzing factors such as test coverage, test automation, defect management, and overall QA maturity, we can provide valuable insights into the effectiveness of your QA strategy. Our experts will conduct a thorough assessment of your QA team's skills, experience, and resources. We will also examine your testing environment, tools, and processes to identify any bottlenecks or inefficiencies.",
      desc2:
        "Based on our findings, we will provide tailored recommendations to enhance your QA efficiency and effectiveness. Our goal is to help you optimize your QA strategy and ensure that your software products meet the highest quality standards. By identifying areas for improvement and implementing recommended strategies, you can streamline your QA processes, reduce testing time, and improve overall product quality.",
    },
    {
      Id: 2, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "Process Optimization and Best Practices",
      desc1:
        "We help you optimize your QA processes to streamline workflows, reduce testing time, and improve overall efficiency. Our experts can recommend best practices for test case design, test data management, and defect tracking. We also guide implementation automation frameworks and tools to accelerate testing and reduce manual effort. Additionally, we can help you establish metrics and KPIs to measure QA performance and identify areas for improvement.",
      desc2:
        "By partnering with Moshlay Creatives for QA consultancy, you can gain valuable insights, optimize your QA processes, and ensure the delivery of high-quality software products. Our team is committed to providing expert guidance and support to help you achieve your QA goals.",
    },
  ];
  const FunctionalTesting = [
    {
      Id: 1, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "QA Strategy Audit1",
      desc1:
        "Our QA strategy audit is a comprehensive evaluation of your existing QA processes, methodologies, and tools. We delve deep into your current practices to identify strengths, weaknesses, and areas for improvement. By analyzing factors such as test coverage, test automation, defect management, and overall QA maturity, we can provide valuable insights into the effectiveness of your QA strategy. Our experts will conduct a thorough assessment of your QA team's skills, experience, and resources. We will also examine your testing environment, tools, and processes to identify any bottlenecks or inefficiencies.",
      desc2:
        "Based on our findings, we will provide tailored recommendations to enhance your QA efficiency and effectiveness. Our goal is to help you optimize your QA strategy and ensure that your software products meet the highest quality standards. By identifying areas for improvement and implementing recommended strategies, you can streamline your QA processes, reduce testing time, and improve overall product quality.",
    },
    {
      Id: 2, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "Process Optimization and Best Practices1",
      desc1:
        "We help you optimize your QA processes to streamline workflows, reduce testing time, and improve overall efficiency. Our experts can recommend best practices for test case design, test data management, and defect tracking. We also guide implementation automation frameworks and tools to accelerate testing and reduce manual effort. Additionally, we can help you establish metrics and KPIs to measure QA performance and identify areas for improvement.",
      desc2:
        "By partnering with Moshlay Creatives for functional testing, you can ensure that your software applications meet the highest quality standards and deliver a positive user experience. Our team is committed to providing comprehensive testing services that help you achieve your QA goals.",
    },
  ];
  const NonFunctionalTesting = [
    {
      Id: 1, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "QA Strategy Audit2",
      desc1:
        "Our QA strategy audit is a comprehensive evaluation of your existing QA processes, methodologies, and tools. We delve deep into your current practices to identify strengths, weaknesses, and areas for improvement. By analyzing factors such as test coverage, test automation, defect management, and overall QA maturity, we can provide valuable insights into the effectiveness of your QA strategy. Our experts will conduct a thorough assessment of your QA team's skills, experience, and resources. We will also examine your testing environment, tools, and processes to identify any bottlenecks or inefficiencies.",
      desc2:
        "Based on our findings, we will provide tailored recommendations to enhance your QA efficiency and effectiveness. Our goal is to help you optimize your QA strategy and ensure that your software products meet the highest quality standards. By identifying areas for improvement and implementing recommended strategies, you can streamline your QA processes, reduce testing time, and improve overall product quality.",
    },
    {
      Id: 2, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "Process Optimization and Best Practices2",
      desc1:
        "We help you optimize your QA processes to streamline workflows, reduce testing time, and improve overall efficiency. Our experts can recommend best practices for test case design, test data management, and defect tracking. We also guide implementation automation frameworks and tools to accelerate testing and reduce manual effort. Additionally, we can help you establish metrics and KPIs to measure QA performance and identify areas for improvement.",
      desc2:
        "By partnering with Moshlay Creatives for functional testing, you can ensure that your software applications meet the highest quality standards and deliver a positive user experience. Our team is committed to providing comprehensive testing services that help you achieve your QA goals.",
    },
  ];
  const SelfHealingTestAutomation = [
    {
      Id: 1, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "QA Strategy Audit3",
      desc1:
        "We help you optimize your QA processes to streamline workflows, reduce testing time, and improve overall efficiency. Our experts can recommend best practices for test case design, test data management, and defect tracking. We also guide implementation automation frameworks and tools to accelerate testing and reduce manual effort. Additionally, we can help you establish metrics and KPIs to measure QA performance and identify areas for improvement.",
      desc2:
        "Based on our findings, we will provide tailored recommendations to enhance your QA efficiency and effectiveness. Our goal is to help you optimize your QA strategy and ensure that your software products meet the highest quality standards. By identifying areas for improvement and implementing recommended strategies, you can streamline your QA processes, reduce testing time, and improve overall product quality.",
    },
    {
      Id: 2, // Ensure this property has a value if needed
      img: "/customtabs1.png",
      title: "Process Optimization and Best Practices3",
      desc1:
        "We help you optimize your QA processes to streamline workflows, reduce testing time, and improve overall efficiency. Our experts can recommend best practices for test case design, test data management, and defect tracking. We also guide implementation automation frameworks and tools to accelerate testing and reduce manual effort. Additionally, we can help you establish metrics and KPIs to measure QA performance and identify areas for improvement.",
      desc2:
        "By partnering with Moshlay Creatives for functional testing, you can ensure that your software applications meet the highest quality standards and deliver a positive user experience. Our team is committed to providing comprehensive testing services that help you achieve your QA goals.",
    },
  ];

  //   const handleChnageContent = ()=>{
  //     setIsChangeContent('')
  //   }

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
            fontFamily: "Montserrat",
            color: theme.palette.primary.main,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "2rem ",
            marginTop: "2rem",
          }}
        >
          Services We Offer
        </Typography>
      </Box>
      <Box
        sx={{
          // display: "flex" ,
          padding: "2rem 10%",
          backgroundColor: "#1c2844",
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            lg={12}
            md={12}
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
                orientation={"horizontal"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <Tab
                  icon={<Divider className="icon" />} // Add icon before text
                  iconPosition="bottom"
                  label="QA Consultancy"
                  {...a11yProps(1)}
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "auto",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    // padding: "2rem",
                    color: "white", // Default color for non-selected
                    backgroundColor: "transparent", // Default background for non-selected

                    ".icon": {
                      color: theme.palette.primary.main,
                      display: "none",
                      backgroundColor: theme.palette.primary.main,
                      width: "50%",
                      height: "3px",
                    },
                    "&.Mui-selected .icon": {
                      color: theme.palette.primary.main,
                      display: "block",
                      marginTop: "1rem",
                      //    marginBottom:'1rem'
                    },
                    "&.Mui-selected": {
                      backgroundColor: "white",
                      color: "black",
                      padding: "1rem .8rem",
                      //   height: "4rem",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                />
                <Tab
                  icon={<Divider className="icon" />} // Add icon before text
                  iconPosition="bottom"
                  label="Functional Testing"
                  {...a11yProps(1)}
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "auto",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    // padding: "2rem",
                    color: "white", // Default color for non-selected
                    backgroundColor: "transparent", // Default background for non-selected

                    ".icon": {
                      color: theme.palette.primary.main,
                      display: "none",
                      backgroundColor: theme.palette.primary.main,
                      width: "50%",
                      height: "3px",
                    },
                    "&.Mui-selected .icon": {
                      color: theme.palette.primary.main,
                      display: "block",
                      marginTop: "1rem",
                      //    marginBottom:'1rem'
                    },
                    "&.Mui-selected": {
                      backgroundColor: "white",
                      color: "black",
                      padding: "1rem .8rem",
                      //   height: "4rem",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                />
                <Tab
                  icon={<Divider className="icon" />} // Add icon before text
                  iconPosition="bottom"
                  label="Non-Functional Testing"
                  {...a11yProps(1)}
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "auto",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    // padding: "2rem",
                    color: "white", // Default color for non-selected
                    backgroundColor: "transparent", // Default background for non-selected

                    ".icon": {
                      color: theme.palette.primary.main,
                      display: "none",
                      backgroundColor: theme.palette.primary.main,
                      width: "50%",
                      height: "3px",
                    },
                    "&.Mui-selected .icon": {
                      color: theme.palette.primary.main,
                      display: "block",
                      marginTop: "1rem",
                      //    marginBottom:'1rem'
                    },
                    "&.Mui-selected": {
                      backgroundColor: "white",
                      color: "black",
                      padding: "1rem .8rem",
                      //   height: "4rem",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                />
                <Tab
                  icon={<Divider className="icon" />} // Add icon before text
                  iconPosition="bottom"
                  label="Self-Healing Test Automation"
                  {...a11yProps(1)}
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: isSmall ? "1rem" : isMedium ? "1.2rem" : "1.3rem",
                    fontWeight: 500,
                    height: "auto",
                    borderRadius: "5px",
                    textTransform: "none",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexGrow: 1, // Ensure it takes full width within Tabs
                    marginBottom: ".5rem",
                    marginRight: isMedium ? "0.5rem" : "0rem",
                    // padding: "2rem",
                    color: "white", // Default color for non-selected
                    backgroundColor: "transparent", // Default background for non-selected

                    ".icon": {
                      color: theme.palette.primary.main,
                      display: "none",
                      backgroundColor: theme.palette.primary.main,
                      width: "50%",
                      height: "3px",
                    },
                    "&.Mui-selected .icon": {
                      color: theme.palette.primary.main,
                      display: "block",
                      marginTop: "1rem",
                      //    marginBottom:'1rem'
                    },
                    "&.Mui-selected": {
                      backgroundColor: "white",
                      color: "black",
                      padding: "1rem .8rem",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                />
              </Tabs>
            </Box>
          </Grid>

          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            // backgroundColor={"aqua"}
            width={"100%"}
          >
            <CustomTabPanel value={value} index={0} width={"100%"}>
              <Grid container spacing={5} width={"100%"}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{ width: isMedium ? "100%" : "70%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                      At Moshlay Creatives, we offer comprehensive QA
                      consultancy services to help you optimize your software
                      testing processes and ensure the highest quality
                      standards.
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                      Our team of experienced QA professionals provides expert
                      guidance and support throughout the entire software
                      development lifecycle.
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        sx={{
                          marginTop: "3rem",
                          textTransform: "none",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid #98c447",
                          transition: "0.3s",
                          color:
                            activeButton === "QA Strategy Audit"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton === "QA Strategy Audit" ||
                            activeButton === ""
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton === "QA Strategy Audit" ||
                            activeButton === ""
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: "transparent",
                          //   border: "1px solid white",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent("QA Strategy Audit"),
                            setActiveButton("QA Strategy Audit");
                        }}
                      >
                        QA Strategy Audit
                      </Button>
                      <Button
                        // variant="contained"
                        sx={{
                          marginTop: "3rem",
                          // color: "white",
                          textTransform: "none",
                          // backgroundColor: "transparent",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid white",
                          transition: "0.3s",
                          color:
                            activeButton ===
                            "Process Optimization and Best Practices"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton ===
                            "Process Optimization and Best Practices"
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton ===
                            "Process Optimization and Best Practices"
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: theme.palette.primary.main,

                          //   border: "1px solid white",
                          //   border: "1px solid #98c447",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent(
                            "Process Optimization and Best Practices"
                          ),
                            setActiveButton(
                              "Process Optimization and Best Practices"
                            );
                        }}
                      >
                        Process Optimization and Best Practices
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {QAConsultancy.map(
                    (row, index) =>
                      (isChangeContent === row.title ||
                        (index === 0 && isChangeContent === "")) && (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: "#354745",
                            p: "2rem",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Box>
                            <img
                              src={row.img}
                              alt=""
                              width={
                                isSmall ? "50rem" : isMedium ? "60rem" : "70rem"
                              }
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: isSmall
                                ? "1.3rem"
                                : isMedium
                                ? "1.5rem"
                                : "1.8rem",
                              color: theme.palette.primary.main,
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              marginBottom: "0.5rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {row.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc1}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc2}
                          </Typography>
                        </Box>
                      )
                  )}
                </Grid>
              </Grid>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{ width: isMedium ? "100%" : "70%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                      Functional testing ensures that your software functions as
                      intended and meets the specified requirements. 
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                     Our team of
                      skilled testers will meticulously examine your
                      application's features, workflows, and user interactions
                      to identify and address any defects.
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        sx={{
                          marginTop: "3rem",
                          textTransform: "none",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid #98c447",
                          transition: "0.3s",
                          color:
                            activeButton1 === "QA Strategy Audit1"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton1 === "QA Strategy Audit1" ||
                            activeButton1 === ""
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton1 === "QA Strategy Audit1" ||
                            activeButton1 === ""
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: "transparent",
                          //   border: "1px solid white",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent1("QA Strategy Audit1"),
                            setActiveButton1("QA Strategy Audit1");
                        }}
                      >
                        QA Strategy Audit
                      </Button>
                      <Button
                        // variant="contained"
                        sx={{
                          marginTop: "3rem",
                          // color: "white",
                          textTransform: "none",
                          // backgroundColor: "transparent",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid white",
                          transition: "0.3s",
                          color:
                            activeButton1 ===
                            "Process Optimization and Best Practices1"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton1 ===
                            "Process Optimization and Best Practices1"
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton1 ===
                            "Process Optimization and Best Practices1"
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: theme.palette.primary.main,

                          //   border: "1px solid white",
                          //   border: "1px solid #98c447",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent1(
                            "Process Optimization and Best Practices1"
                          ),
                            setActiveButton1(
                              "Process Optimization and Best Practices1"
                            );
                        }}
                      >
                        Process Optimization and Best Practices
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {FunctionalTesting.map(
                    (row, index) =>
                      (isChangeContent1 === row.title ||
                        (index === 0 && isChangeContent1 === "")) && (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: "#354745",
                            p: "2rem",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Box>
                            <img
                              src={row.img}
                              alt=""
                              width={
                                isSmall ? "50rem" : isMedium ? "60rem" : "70rem"
                              }
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: isSmall
                                ? "1.3rem"
                                : isMedium
                                ? "1.5rem"
                                : "1.8rem",
                              color: theme.palette.primary.main,
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              marginBottom: "0.5rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {row.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc1}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc2}
                          </Typography>
                        </Box>
                      )
                  )}
                </Grid>
              </Grid>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{ width: isMedium ? "100%" : "70%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                      Non-functional testing evaluates aspects such as
                      performance, security, usability, and compatibility. We
                      employ rigorous testing techniques to ensure that your
                      software meets the required standards in these areas,
                      
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                     delivering a positive user experience and protecting your
                      system from vulnerabilities.
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        sx={{
                          marginTop: "3rem",
                          textTransform: "none",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid #98c447",
                          transition: "0.3s",
                          color:
                            activeButton2 === "QA Strategy Audit2"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton2 === "QA Strategy Audit2" ||
                            activeButton2 === ""
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton2 === "QA Strategy Audit2" ||
                            activeButton2 === ""
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: "transparent",
                          //   border: "1px solid white",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent2("QA Strategy Audit2"),
                            setActiveButton2("QA Strategy Audit2");
                        }}
                      >
                        QA Strategy Audit
                      </Button>
                      <Button
                        // variant="contained"
                        sx={{
                          marginTop: "3rem",
                          // color: "white",
                          textTransform: "none",
                          // backgroundColor: "transparent",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid white",
                          transition: "0.3s",
                          color:
                            activeButton2 ===
                            "Process Optimization and Best Practices2"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton2 ===
                            "Process Optimization and Best Practices2"
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton2 ===
                            "Process Optimization and Best Practices2"
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: theme.palette.primary.main,

                          //   border: "1px solid white",
                          //   border: "1px solid #98c447",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent2(
                            "Process Optimization and Best Practices2"
                          ),
                            setActiveButton2(
                              "Process Optimization and Best Practices2"
                            );
                        }}
                      >
                        Process Optimization and Best Practices
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {NonFunctionalTesting.map(
                    (row, index) =>
                      (isChangeContent2 === row.title ||
                        (index === 0 && isChangeContent2 === "")) && (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: "#354745",
                            p: "2rem",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Box>
                            <img
                              src={row.img}
                              alt=""
                              width={
                                isSmall ? "50rem" : isMedium ? "60rem" : "70rem"
                              }
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: isSmall
                                ? "1.3rem"
                                : isMedium
                                ? "1.5rem"
                                : "1.8rem",
                              color: theme.palette.primary.main,
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              marginBottom: "0.5rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {row.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc1}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc2}
                          </Typography>
                        </Box>
                      )
                  )}
                </Grid>
              </Grid>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{ width: isMedium ? "100%" : "70%" }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                      We specialize in developing self-healing test automation
                      frameworks that can adapt to changes in your application's
                      interface. 
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmall ? "0.9rem" : " 1rem",
                        fontFamily: "Montserrat",
                        fontWeight: "400",
                      }}
                    >
                     These frameworks reduce maintenance efforts and
                      improve the efficiency of your testing process, allowing
                      you to focus on delivering high-quality software.
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        sx={{
                          marginTop: "3rem",
                          textTransform: "none",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid #98c447",
                          transition: "0.3s",
                          color:
                            activeButton3 === "QA Strategy Audit3"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton3 === "QA Strategy Audit3" ||
                            activeButton3 === ""
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton3 === "QA Strategy Audit3" ||
                            activeButton3 === ""
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: "transparent",
                          //   border: "1px solid white",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent3("QA Strategy Audit3"),
                            setActiveButton3("QA Strategy Audit3");
                        }}
                      >
                        QA Strategy Audit
                      </Button>
                      <Button
                        // variant="contained"
                        sx={{
                          marginTop: "3rem",
                          // color: "white",
                          textTransform: "none",
                          // backgroundColor: "transparent",
                          padding: "0.8rem 2rem",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          border: "1px solid white",
                          transition: "0.3s",
                          color:
                            activeButton3 ===
                            "Process Optimization and Best Practices3"
                              ? "white"
                              : "white",
                          backgroundColor:
                            activeButton3 ===
                            "Process Optimization and Best Practices3"
                              ? "#98c447"
                              : "transparent",
                          border: `1px solid ${
                            activeButton3 ===
                            "Process Optimization and Best Practices3"
                              ? "#98c447"
                              : "white"
                          }`,
                          // "&:hover": {
                          //   color: "white",
                          //   backgroundColor: theme.palette.primary.main,

                          //   border: "1px solid white",
                          //   border: "1px solid #98c447",
                          // },
                        }}
                        onClick={() => {
                          setIsChangeContent3(
                            "Process Optimization and Best Practices3"
                          ),
                            setActiveButton3(
                              "Process Optimization and Best Practices3"
                            );
                        }}
                      >
                        Process Optimization and Best Practices
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {SelfHealingTestAutomation.map(
                    (row, index) =>
                      (isChangeContent3 === row.title ||
                        (index === 0 && isChangeContent3 === "")) && (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: "#354745",
                            p: "2rem",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Box>
                            <img
                              src={row.img}
                              alt=""
                              width={
                                isSmall ? "50rem" : isMedium ? "60rem" : "70rem"
                              }
                            />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: isSmall
                                ? "1.3rem"
                                : isMedium
                                ? "1.5rem"
                                : "1.8rem",
                              color: theme.palette.primary.main,
                              fontFamily: "Montserrat",
                              fontWeight: 500,
                              marginBottom: "0.5rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {row.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc1}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmall ? ".9rem" : "1rem",
                              fontFamily: "Montserrat",
                              fontWeight: 400,
                              color: "white",
                            }}
                          >
                            {row.desc2}
                          </Typography>
                        </Box>
                      )
                  )}
                </Grid>
              </Grid>
            </CustomTabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QualityServices;
