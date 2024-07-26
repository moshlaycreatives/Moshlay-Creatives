import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  Typography,
  IconButton,
  useTheme,
  Menu,
} from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";
import { MdOutlineArrowDropDown } from "react-icons/md";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleAnchorElClick = (e)=>{
    setAnchorEl (e.currentTarget);
  }
  const handleAchorClose = ( )=>{
    setAnchorEl(null)
  }

  const location = useLocation();
  const navigate = useNavigate();
  const judge_check = location.pathname.includes("judge-score-card") || location.pathname.includes("judge-login");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // const handleLogin = () => {
  //   navigate("/admin-login");
  //   setDrawerOpen(false);
  // };

  const handleLogin = () => {
    if (judge_check) {
      navigate("/judge-login");
    } else {
      navigate("/admin-login");
    }
    setDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const dispatch = useDispatch();

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      dispatch(logout());
      dispatch({
        type: "RESET_STATE",
      });
    }
  };

  const participantPageRegex = /^\/public-screen\/[^\/]+$/;
  const participantRegisterPage = /^\/admin\/contest\/[^\/]+$/;
  const publicResultPage = /^\/public-screen-result\/[^\/]+$/;

  const currentPath = location.pathname;

  const isHidden =
    participantPageRegex.test(currentPath) ||
    participantRegisterPage.test(currentPath) ||
    publicResultPage.test(currentPath) ||
    currentPath === "/public-screen-result" ||
    currentPath === "/admin_side_screen1" ||
    currentPath === "/admin_side_screen2" ||
    currentPath === "/participant-registered";

  if (isHidden) {
    return null;
  }

  const auth = useSelector((state) => state?.admin?.isAuthenticated);
  const username = useSelector((state) => state?.admin?.user?.name);

  const handleAddEvent = () => {
    navigate("/admin/welcome");
  };

  return (
    <Box
      sx={{
        // backgroundColor: "white",
        padding: "0rem 5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "static",
        top: 0,
        zIndex: 10000000,
        // boxShadow: "1px 1px 1px black ",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap:3,
          color:'white'
        }}
      >

        <Typography 
        aria-controls="digital-solution"
        aria-haspopup="true" 
        aria-expanded={ openMenu ? 'true' : undefined}
        onClick={handleAnchorElClick}
        style={{cursor:'pointer'}}
        // display={"flex"} 
        >
          Digital Solution
        </Typography>
        <Typography sx={{
            fontSize:'1.5rem',
            marginLeft:"-1.5rem",
            marginTop :'.5rem',
            textAlign:'center',
            color:theme.palette.primary.main
          }}><MdOutlineArrowDropDown /></Typography>
        {/* drop down list  */}
        <Typography>
          <Menu id="digital-solution" anchorEl={anchorEl} open={openMenu} onClose={handleAchorClose}>
            <MenuItem onClick={handleAchorClose}> Example 1</MenuItem>
            <MenuItem onClick={handleAchorClose}>  Example 2</MenuItem>
          </Menu>
        </Typography>
        <Typography
        aria-controls="digital-marketing"
        aria-haspopup="true" 
        aria-expanded={ openMenu ? 'true' : undefined}
        onClick={handleAnchorElClick}
        style={{cursor:'pointer'}}>
          Digital Marketing 
        </Typography>
        <Typography sx={{
            fontSize:'1.5rem',
            marginLeft:"-1.5rem",
            marginTop :'.5rem',
            textAlign:'center',
            color:theme.palette.primary.main
          }}><MdOutlineArrowDropDown /></Typography>  
        <Typography>
          <Menu id="digital-marketing" anchorEl={anchorEl} open={openMenu} onClose={handleAchorClose}>
            <MenuItem onClick={handleAchorClose}> Example 1</MenuItem>
            <MenuItem onClick={handleAchorClose}>  Example 2</MenuItem>
          </Menu>
        </Typography>
        <Typography>
          Company
        </Typography>
        <Typography>
          Blog
        </Typography>
        <Typography>
          Careers
        </Typography>
        <Typography>
          Contact
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton onClick={handleDrawerOpen} sx={{ padding: "10px" , color:'white'}}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{ zIndex: 1300}}
        >
          <Box sx={{ width: 250, padding: "20px" }}>
          
          {/* <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap:3,
          color:'white'
        }}
      > */}

       <Box  sx={{
        gap:5
       }}>
      <Box sx={{
        display:'flex'
       }}>
      <Typography 
        aria-controls="digital-solution"
        aria-haspopup="true" 
        aria-expanded={ openMenu ? 'true' : undefined}
        onClick={handleAnchorElClick}
        style={{cursor:'pointer'}}
        // display={"flex"} 
        >
          Digital Solution
        </Typography>
        <Typography sx={{
            fontSize:'1.5rem',
            // marginLeft:"-1.5rem",
            // marginTop :'.5rem',
            textAlign:'center',
            color:theme.palette.primary.main
          }}><MdOutlineArrowDropDown /></Typography>
        {/* drop down list  */}
        <Typography sx={{
          zIndex:2000,
          position:'fixed'
        }}>
          <Menu id="digital-solution" anchorEl={anchorEl} open={openMenu} onClose={handleAchorClose}>
            <MenuItem onClick={()=>{handleAchorClose(); handleDrawerClose();}}>  Example 1</MenuItem>
            <MenuItem onClick={()=>{handleAchorClose(); handleDrawerClose();}}>  Example 2</MenuItem>
          </Menu>
        </Typography>
       
      </Box>

      <Box sx={{
        display:'flex'
      }}>
      <Typography
        aria-controls="digital-marketing"
        aria-haspopup="true" 
        aria-expanded={ openMenu ? 'true' : undefined}
        onClick={handleAnchorElClick}
        style={{cursor:'pointer'}}>
          Digital Marketing 
        </Typography>
        <Typography sx={{
            fontSize:'1.5rem',
            // marginLeft:"-1.5rem",
            // marginTop :'.5rem',
            textAlign:'center',
            color:theme.palette.primary.main
          }}><MdOutlineArrowDropDown /></Typography>  
        <Typography sx={{
          zIndex:2000,
          postion:'fixed',
          // marginBottom:'4rem'
        }}>
          <Menu id="digital-marketing" anchorEl={anchorEl} open={openMenu} onClose={handleAchorClose}>
          <MenuItem onClick={()=>{handleAchorClose(); handleDrawerClose();}}>  Example 1</MenuItem>
          <MenuItem onClick={()=>{handleAchorClose(); handleDrawerClose();}}>  Example 2</MenuItem>
          </Menu>
        </Typography>
      </Box >
        
        <Typography >
          Company
        </Typography>
        <Typography>
          Blog
        </Typography>
        <Typography>
          Careers
        </Typography>
        <Typography>
          Contact
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          
        </Box>
      </Box>
           </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
