import {
  Box,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const WhyWeIdeal = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery('(max-width:1500px)');

  return (
    <>
      <Box
        sx={{
          // margin:'2rem 0rem',
          padding: "0% 10%",
        }}
      >
        <Box marginBottom={"2rem"}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontSize: isSmall ? "1.7rem" : isMedium ? "2rem" : "2.5rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "6rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            What Makes Us The Ideal Software Development Company
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: isMedium ? "1rem" : "1.1rem",
              textAlign: "center",
              marginBottom: "1rem",
              marginTop: "1rem",
              padding: " 0 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Some of the reasons why clients choose and recommend our software
            development services company
          </Typography>
        </Box>

        <Grid container spacing={isMedium ? 5 : 20}>
          <Grid lg={6} md={6} sm={12} xs={12} item>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                width: "100%",
              }}
            >
              <img src="whyWeIdeal.svg" alt="" width={'100%'} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  backgroundColor: theme.palette.primary.main,
                  height: "85%",
                  gap: 11,
                  borderRadius: "20px 0 20px 0",
                  padding: "1rem",
                  marginLeft: "-10%",
                  display: isMedium ? "none" : "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  40%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  50%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  85%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  97%
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                  }}
                >
                  Happy Customers
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  A wide client base across various industries is proof of our
                  ability to deliver remarkable software solutions, and we
                  endeavor to meet the needs of every client.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                  }}
                >
                  Successful Projects
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  We have completed over 20 successful projects demonstrating
                  our capability to deliver software solutions that meet and
                  exceed client expectations.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                 gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                  }}
                >
                  Faster Delivery
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  Our team can be expanded according to your project
                  requirements in order to ensure faster delivery of your
                  project.
                </Typography>
                <Divider color={"white"} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop:'1rem'
                }}
              >
                <Typography
                  sx={{
                    fontSize: isSmall ? "1.5rem" : "1.8rem",
                    color: "white",
                  }}
                >
                  Client Retention Rate
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  97% of our clients who chose us for bespoke software
                  development continue to hire us for their additional projects,
                  which demonstrates how well we serve our clients.
                </Typography>
                <Divider color={"white"} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyWeIdeal;
