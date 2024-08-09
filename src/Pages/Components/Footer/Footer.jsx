import React from 'react'
import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router-dom"
import { LiaTwitterSquare } from "react-icons/lia";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";


function Footer() {


  const location = useLocation()
  const navigate = useNavigate();

  const handleQuickLinks = (path)=>{
    navigate(path);
    window.scroll(0,0);
  }

  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/admin-dashboard";

  if (isHidden) {
    return null;
  }
  return (
    <footer className='footer-section'>
        <div className='footer-main-div'>
        <div className='footer-logo-text'>
            <h1>
            <img src="logo.svg" alt="" />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corporis nobis accusamus, voluptatem minus et sint. Totam, incidunt doloribus. Modi omnis vel ea quae minima porro deserunt, atque molestiae sequi.</p>
        </div>
        <div className='footer-quick-links'>
            <h2>Quick Links</h2>
            <ul className='footer-links'>
                <li onClick={()=>handleQuickLinks('/') } >Home</li>
                <li onClick={()=>handleQuickLinks('/contact') }>Digital Solution</li>
                <li onClick={()=>handleQuickLinks('/about') }>Digital Marketing</li>
                <li onClick={()=>handleQuickLinks('/about') }>Company</li>
                <li onClick={()=>handleQuickLinks('/blogs') }>Blogs</li>
                <li onClick={()=>handleQuickLinks('/about') }>Career</li>
                <li onClick={()=>handleQuickLinks('/contact') }>Contact</li>
            </ul>
        </div>
        <div className='footer-contact-info'>
            <h3>Contact US</h3>
            <div className='footer-contact-info-links'>
            <a href=''> <i>   <IoLocationOutline />Johar Town,Lahore</i></a>
            <a href=''> <i>   <MdOutlineEmail /> abc@gmail.com</i></a>
            <a href=''> <i>   <FaPhoneVolume /> +923076589234</i></a>
            </div >

            <div className='footer-social-btn'>
            <a href="https://www.facebook.com/MoshlayCreatives"><AiOutlineFacebook  className='footer-social-links'/></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><FaInstagram  className='footer-social-links' /></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><LiaTwitterSquare className='footer-social-links' /></a>
            <a href="https://www.linkedin.com/company/moshlaycreatives/?viewAsMember=true"><FaThreads  className='footer-social-links' /></a>
            </div>
        </div>
        </div>
            <div className='footer-horizntal-line'>
                <hr />
            </div>
            <p className='footer-term-condition'>© Terms of Use | Privacy Policy | © 2024 Moshaly Creative</p>
    </footer>
  )
}

export default Footer