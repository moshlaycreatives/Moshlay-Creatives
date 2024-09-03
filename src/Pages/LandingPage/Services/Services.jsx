import { Translate } from "@mui/icons-material";
import {
  Box,
  colors,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Services = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isFourteen = useMediaQuery("(max-width:1400px)");

  const listData = [
    {
      title: "Web Developer",
      subTitle:
        "We specialize in crafting custom websites that not only look stunning but also drive results. Our team of skilled developers utilizes the latest technologies to create websites that are visually appealing, user-friendly, and optimized for search engines.",
      image: "services1.svg",
    },
    {
      title: "Search Engine Optimization",
      subTitle:
        "Our SEO experts are dedicated to improving your website's visibility in search engine results pages (SERPs). We employ proven strategies to optimize your website's content, and technical aspects, ensuring that you rank higher for relevant keywords.",
      image: "services2.svg",
    },
    {
      title: "App Developer",
      subTitle:
        "We create innovative mobile apps that meet your business objectives and provide a seamless user experience. Our app development services cover a wide range of platforms and functionalities, ensuring that your app stands out in the crowded marketplace.",
      image: "services3.svg",
    },
    {
      title: "Email Marketing",
      subTitle:
        "Our email marketing services help you nurture customer relationships and drive conversions. We develop targeted email campaigns, personalize content, and track performance metrics to optimize your results.",
      image: "services4.svg",
    },
    {
      title: "Block Chain",
      subTitle:
        "Harness the power of blockchain technology. Our expert team specializes in developing innovative blockchain solutions tailored to your specific needs. From decentralized applications to smart contracts, we leverage the security and transparency.",
      image: "services5.svg",
    },
    {
      title: "Socail Medai Marketing",
      subTitle:
        "We help you engage with your target audience on popular social media platforms. Our team develops effective social media strategies, creates engaging content, and manages your online presence to drive brand awareness and increase customer engagement.",
      image: "services6.svg",
    },
    {
      title: "Quality Assurance",
      subTitle:
        "We are committed to delivering high-quality IT solutions. Our quality assurance team conducts thorough testing and quality checks to ensure that your website, app, or other digital asset meets the highest standards of performance and reliability.",
      image: "services7.svg",
    },
    {
      title: "Pay-Par-Click(PPC)",
      subTitle:
        "We optimize your online advertising campaigns to maximize your return on investment (ROI). Our PPC experts leverage data-driven strategies to target the right audience, improve click-through rates, and drive conversions.",
      image: "services8.svg",
    },
    {
      title: "UI/UX Designing",
      subTitle:
        "We focus on designing intuitive and visually appealing user experiences that leave a lasting impression. Our UI/UX experts combine creativity and technical expertise to create interfaces that are both functional and aesthetically pleasing.",
      image: "services9.svg",
    },
    {
      title: "Content Marketing",
      subTitle:
        "We help you create valuable and engaging content that attracts and retains your target audience. Our content marketing services include blog writing, article creation, and social media content development.",
      image: "services10.svg",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginBottom: "1rem",
          padding: "2.5% 10%",
        }}
      >
        <Box marginBottom={"2rem"} width={'100%'}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontSize: isSmall ? "1.6rem" : isMedium ? "2rem" : "2.5rem",
              fontFamily: "Montserrat",
              fontWeight: 600,
              display:'flex',
              justifyContent:'center',
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            Affordable Digital Solution & Marketing Services
          </Typography>
          <Box sx={{
             width:'100%', 
             display:'flex',
             justifyContent:'center'
          }}>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontSize: isMedium ? "1rem" : "1.1rem",
              fontFamily: "Montserrat",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "-2rem",
              width:isSmall ? "100%" : isMedium ? " 90%" :'90%',
            }}
          >
           We Don't compromise on quality, choose our affordable services and hire our premium services at budget-friendly prices to scale your business.
          </Typography>
          </Box>
        </Box>

        <Grid
          container
          spacing={isSmall ? 2 : isMedium ? 4 : 5}
          sx={{
            marginTop: ".5rem",
          }}
        >
          {listData.map((val, ind) => (
            <Grid item key={ind} lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  cursor:'pointer',
                  position: "relative",
                  backgroundImage: `url(${val.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  padding: "3rem",
                  width: "100%",
                  height: isSmall
                    ? "20vh"
                    : isMedium
                    ? "20vh"
                    : isFourteen
                    ? "30vh"
                    : "20vh",
                  overflow: "hidden",
                  transition:'1s',
                  "&:hover .overplay ": {
                    transform: "translateX(0%)",
                  },
                  "&:hover .diviver-text-overplay": {
                    transform: "translateX(-150%)",
                  },
                  '&:hover':{
                    // transform:'scale(1.05)',
                    // width:'98%',
                    // height:'90%'
                  }
                  // '&:hover .divider': {
                  //   transform:'translateX(-1000%)'
                  //  }
                }}
              >
                {/* =======================HOVER BOX=========================== */}
                <Box
                  className="overplay"
                  sx={{
                    width: "100%",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    top: 0,
                    backgroundColor: "#050913e3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    transform: "TranslateX(100%)",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmall ? "0.8rem " : "1rem",
                      fontWeight: "400",
                      fontFamily: "Montserrat",
                      // marginLeft: '1rem'
                    }}
                  >
                    {val.subTitle}
                  </Typography>
                </Box>
                {/* ================================================================= */}
                <Box
                  className="diviver-text-overplay"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transform: "translateX(0)",
                    transition:
                      "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  }}
                >
                  <Divider
                    className="divider"
                    sx={{
                      height: "30px",
                      width: "8px",
                      backgroundColor: theme.palette.primary.main,
                      // transform:'TranslateX(100%)',
                      // transition:'transform 0.3s ease-in-out'
                      // orientation:'horiental'
                    }}
                  />
                  <Typography
                    className="overplay-title"
                    sx={{
                      color: "white",
                      fontSize: isSmall
                        ? "1.3rem"
                        : isMedium
                        ? "1.5rem"
                        : "1.7rem",
                      fontWeight: "600",
                      fontFamily: "Montserrat",
                      marginLeft: "1rem",
                      // transform: 'translateX(0)',
                      // transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    }}
                  >
                    {val.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Services;
