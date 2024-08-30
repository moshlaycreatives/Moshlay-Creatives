import { useNavigate, useRoutes } from "react-router";
import Landing from "./Pages/LandingPage/Landing";
import Signup_Main from "./Pages/Authentication_Page/Signup/Signup_Main";
import Login_Main from "./Pages/Authentication_Page/Login/Login_Main";
import Forget_Password from "./Pages/Authentication_Page/Components/Forget_Password";
import Password_Confirmation from "./Pages/Authentication_Page/Components/Password_Confirmation";
import Change_Password from "./Pages/Authentication_Page/Components/Change_Password";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProtectedRoutes from '../src/components/ProtectedRoutes/ProtectedRoutes'
import AdminMain from '../src/Admin/AdminMain'
import Main from "./Pages/Authentication_Page/Main";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import ShopMain from "./Pages/ShopPage/ShopMain";
// import PrivacyPolicy from "./Pages/Components/PrivacyPolicy";
// import CookiesPolicy from "./Pages/Components/CookiesPolicy";
import SingleProduct from "./Pages/ShopPage/SingleProduct";
import ComingSoon from "./components/ComingSoon";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Technologytwo from "./Pages/LandingPage/Technologytwo/Technologytwo";
import BlogsMain from "./Pages/Blogs/Blogsmain";
import BlogsArticleMain from "./Pages/Blogs/components/BlogsArticle/BlogArticleMain";
import CareersMain from "./Pages/Careers/CareersMain";
import CareersJobDetails from "./Pages/Careers/components/CareersJobDetails/CareersJobDetails";
import CareersAddJobDetails from "./Pages/Careers/components/CareersAddJobDetails/CareersAddJobDetails";
import WebDevelopmentMain from "./Pages/WebDevelopment/WebDevelopmentMain";
import AppDevelopmentMain from "./Pages/AppDevelopment/AppDevelopmentMain";
import CareersAddJobDetailsForm from "./Pages/Careers/components/CareersAddJobDetails/CareersAddJobDetailsForm";
import UiUxDesignMain from "./Pages/UiUxDesign/UiUxDesignMain";

export default function Router() {

    const [progress, setProgress] = useState(0);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
console.log(isAuthenticated, 'hgyfuhhj')
    const navigate = useNavigate();




    let element = useRoutes([

        {
            path:'/admin/dashboard',
            element : <AdminMain /> ,
           },

        {
            path:'/product/:id',
            element : <SingleProduct /> ,
           },


        {
        path:'/',
        element : <Landing /> ,
       },
{
       path:'/about',
       element : <About /> ,
      },
      {
        path:'/contact',
        element : <Contact /> ,
       },
       {
        path:'/blogs',
        element : <BlogsMain /> ,
       },
       {
        path:'/blogs-article/:id',
        element : <BlogsArticleMain /> ,
       },
    {
       path:'/careers',
       element : <CareersMain /> ,
      },
      {
         path:'/careers-job-details/:id',
         element : <CareersJobDetails /> ,
        },
        {
            path:'/careers-job-details-hero/:id',
            element : <CareersJobDetails /> ,
           },
        {
         path:'/careers-add-job-details',
         element : <CareersAddJobDetails /> ,
        },
        {
            path:'/careers-add-job-details-form',
            element : <CareersAddJobDetailsForm /> ,
           },
        {
         path:'/web-development',
         element : <WebDevelopmentMain /> ,
        },
        {
         path:'/app-development',
         element : <AppDevelopmentMain /> ,
        },
        {
            path:'/ui-ux-design',
            element : <UiUxDesignMain /> ,
           },
    // {
    //     path:'/',
    //     element : <ComingSoon /> ,
    //    },
      //  {
      //   path:'/technologytwo',
      //   element : <Technologytwo /> ,
      //  },

       {
        path:'/signup',
        element : <Main /> ,
       },
       {
        path:'/forget-password',
        element : <Forget_Password/> ,
       },
       {
        path:'/otp-verification',
        element : <Password_Confirmation/> ,
       },
       {
        path:'/set-password',
        element : <Change_Password/> ,
       },

       {
        path:'/about',
        element : <AboutUs/>
       },
       {
        path:'/contact-us',
        element : <ContactUs/> ,
       },

    //    {
    //     path:'/privacy-policy',
    //     element : <PrivacyPolicy/> ,
    //    },

    //    {
    //     path:'/cookies-policy',
    //     element : <CookiesPolicy/> ,
    //    },

       {
        path:'/shop',
        element : <ShopMain/> ,
       },

    ])
    return element
}