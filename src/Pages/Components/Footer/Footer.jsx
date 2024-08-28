import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import React from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { styled } from "@mui/material";

function Footer() {
  const theme = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const handleQuickLinks = (path) => {
    navigate(path);
    window.scroll(0, 0);
  };

  const currentPath = location.pathname;

  const isHidden = currentPath === "/admin-dashboard";

  if (isHidden) {
    return null;
  }
  return (
    <footer className="footer-section">
      <div className="footer-main-div">
        <div className="footer-logo-text">
          <h1>
            <img src="/logo.svg" alt="" />
          </h1>
          <p>
            Moshlay Creatives empowers businesses to thrive in the digital age.
            We're a one-stop shop for all your IT and data solutions,
            specializing in making impactful software and optimizing your online
            presence. From small businesses to established enterprises, we help
            you achieve your goals and drive impressive results.
          </p>
        </div>
        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          <ul className="footer-links">
            <li onClick={() => handleQuickLinks("/")}>Home</li>
            <li onClick={() => handleQuickLinks("/contact")}>
              Digital Solution
            </li>
            <li onClick={() => handleQuickLinks("/about")}>
              Digital Marketing
            </li>
            <li onClick={() => handleQuickLinks("/about")}>Company</li>
            <li onClick={() => handleQuickLinks("/blogs")}>Blogs</li>
            <li onClick={() => handleQuickLinks("/about")}>Career</li>
            <li onClick={() => handleQuickLinks("/contact")}>Contact</li>
          </ul>
        </div>

        <div className="footer-contact-info">
          <h3>Contact US</h3>
          <div className="footer-contact-info-links">
            <a href="">
              {" "}
              <i>
                {" "}
                <IoLocationOutline />
                Johar Town,Lahore
              </i>
            </a>
            <a href="">
              {" "}
              <i>
                {" "}
                <MdOutlineEmail /> moshlaycreatives@gmail.com
              </i>
            </a>
            <a href="">
              {" "}
              <i>
                {" "}
                <FaPhoneVolume /> +92 309 2087119
              </i>
            </a>
          </div>

          {/* <div className='footer-social-btn'>
            <a href="https://www.facebook.com/MoshlayCreatives"><AiOutlineFacebook  className='footer-social-links'/></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><FaInstagram  className='footer-social-links' /></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><LiaTwitterSquare className='footer-social-links' /></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><FaThreads  className='footer-social-links' /></a>
            </div> */}
          <br />
          <Box
            sx={{
              display: "flex",
              // justifyContent:'space-between',
              gap: 2,
            }}
          >
            <a href="https://www.facebook.com/MoshlayCreatives">
              <Typography
                variant="i"
                sx={{
                  color: "white",
                  border: "2px solid white",
                  padding: ".3rem .2rem 0rem .2rem",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  transition: "0.5s",
                  borderRadius: "4px",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    border: "2px solid #98c447",
                  },
                }}
              >
                <FaFacebookF />
              </Typography>
            </a>

            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
              <Typography
                variant="i"
                sx={{
                  color: "white",
                  border: "2px solid white",
                  padding: ".3rem .2rem 0rem .2rem",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  borderRadius: "4px",
                  transition: "0.5s",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    border: "2px solid #98c447",
                  },
                }}
              >
                <FaInstagram />
              </Typography>
            </a>

            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
              <Typography
                variant="i"
                sx={{
                  color: "white",
                  border: "2px solid white",
                  padding: ".3rem .2rem 0rem .2rem",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  borderRadius: "4px",
                  transition: "0.5s",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    border: "2px solid #98c447",
                  },
                }}
              >
                <FaXTwitter />
              </Typography>
            </a>

            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true">
              <Typography
                variant="i"
                sx={{
                  color: "white",
                  border: "2px solid white",
                  padding: ".3rem .2rem 0rem .2rem",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  borderRadius: "4px",
                  transition: "0.5s",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    border: "2px solid #98c447",
                  },
                }}
              >
                <FaThreads />
              </Typography>
            </a>
          </Box>
        </div>
      </div>
      <div className="footer-horizntal-line">
        <hr />
      </div>
      <p className="footer-term-condition">
        © Terms of Use | Privacy Policy | © 2024 Moshaly Creative
      </p>
    </footer>
  );
}

export default Footer;
