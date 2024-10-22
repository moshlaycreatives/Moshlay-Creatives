import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const PrivacyPolicyText = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{boxSizing:'border-box' , p:'3% 10%'}}>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "550",
            fontSize: "2rem",
          }}
        >
          Privacy  Policy
        </Typography>

        <br />
        <Typography sx={{ color: "white",lineHeight:'1.5rem' }}>
        At Moshlay Creatives, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you visit our website or use our services. Please read this privacy policy carefully before using our website or services.
          </Typography>

          <br />
          <Typography sx={{ fontWeight: "600", fontSize: "1.2rem"  , color:theme.palette.primary.main}}>
          Information We Collect
          </Typography>
          <Typography sx={{ color: "white" ,lineHeight:'1.5rem'}}>
          We collect two types of information from you: personal information and non-personal information.
          </Typography>
          <br />

    
         <ol style={{marginLeft:'30px',lineHeight:'1.5rem'}}>
          <li style={{color:'white' , fontFamily:'Montserrat'}}>
          <strong style={{color:theme.palette.primary.main,fontWeight: "600", fontSize: "1rem" }}>Personal Information:</strong> Any information that can be used to identify you as an individual, such as your name, email address, phone number, physical address, payment details, etc. We collect personal information when you:

          <ul style={{marginLeft:'25px' , lineHeight:'2rem'}}>
            <li> Register an account with us</li>
            <li> Purchase or use our services</li>
            <li> Contact us for inquiries, feedback, or support</li>
            <li> Subscribe to our newsletter or other communications</li>
            <li> Participate in surveys, contests, or promotions</li>
            <li> Post or submit content to our website or services</li>

          </ul>
          </li>
          <br />

          <li style={{color:'white' , fontFamily:'Montserrat'}}>
          <strong style={{color:theme.palette.primary.main,fontWeight: "600", fontSize: "1rem" }}>Non-Personal Information:</strong>  Any information that cannot be used to identify you as an individual, such as your browser type, device type, operating system, IP address, location data, etc. We collect non-personal information when you:
          <ul style={{marginLeft:'25px' , lineHeight:'2rem'}}>
            <li> Visit or browse our website</li>
            <li> Use our services</li>
            <li> Interact with our advertisements or social media pages</li>
          </ul>
          <br />
          <br />
          <p style={{marginLeft:'-25px' , lineHeight:'2rem'}}>We may also collect information from third-party sources, such as:</p>
          <br />
          <ul style={{marginLeft:'25px' , lineHeight:'2rem'}}>
          <li> Analytics providers</li>
            <li> Advertising partners</li>
            <li> Social media platforms</li>
            <li> Other service providers</li>
          </ul>
          </li>
         </ol>
         <br />  

         <Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
         No Mobile information, except for text messaging originator opt-in data and consent, will be shared with third parties/affiliates for marketing/promotional purposes
         </Typography>
         <br />

         <Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
         How We Use Your Information?
         </Typography>
         <br />
         <Typography sx={{color:'white' , }}>
         We use your information for various purposes, including:
         </Typography>
         <br />

         <ul style={{marginLeft:'25px' , lineHeight:'2rem', color:'white', fontFamily:'Montserrat'}}>
          <li> Providing and improving our website and services</li>
            <li> Processing and fulfilling orders and requests</li>
            <li> Communicating with you about your account, requests, feedback, support, etc.</li>
            <li> Personalizing and optimizing your experience on our website and services</li>
            <li> Monitoring and analyzing website and service performance, usage, trends, etc.</li>
            <li> Monitoring and analyzing website and service performance, usage, trends, etc.</li>
            <li> Complying with legal obligations, enforcing policies, resolving disputes.</li>
            <li> Sending you newsletters, offers, promotions, updates, etc.</li>
          </ul>
          <br />

          <Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
          How We Share Your Information?
         </Typography>
         <br />
         <Typography sx={{color:'white' , }}>
         We do not sell or rent your personal information to third parties for their marketing purposes without your consent. We may share your information with:  
         </Typography>
         <br />

         <ul style={{color:'white' , fontFamily:'Montserrat', marginLeft:'30px' , lineHeight:'1.5rem'}}>
          <li >
         <strong style={{color:theme.palette.primary.main,fontWeight: "600", fontSize: "1rem",fontFamily:'Montserrat' }}>Service providers: </strong>
          We may share your information with service providers that help us operate and enhance our website and services (e.g., hosting providers, payment processors, analytics providers, and advertising partners). These service providers are contractually obligated to protect your information and use it only for the purposes we specify. 
          </li>
          <li >
         <strong style={{color:theme.palette.primary.main,fontWeight: "600", fontSize: "1rem",fontFamily:'Montserrat' }}>Affiliates and partners: </strong>
          We may share your information with our affiliates and partners that offer products or services that may interest you or complement ours.
          </li>
          <li >
         <strong style={{color:theme.palette.primary.main,fontWeight: "600", fontSize: "1rem",fontFamily:'Montserrat' }}>Law enforcement and regulators: </strong>
          We may share your information with law enforcement and regulators when required or permitted by law.
          </li>
          <li >
          Other parties in connection with a merger, acquisition, reorganization, or sale.
          </li>
         </ul>
         <br />

<Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
How We Protect Your Information?
</Typography>
<br />
<Typography sx={{color:'white' , }}>
We take reasonable measures to protect your information from unauthorized access, use, disclosure, alteration, or destruction. We use security technologies and procedures, such as encryption, firewalls, passwords, etc. However, no method of transmission or storage is 100% secure. You are responsible for keeping your account credentials and devices secure and confidential.  
</Typography>
<br />


<Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
Your Rights
</Typography>
<br />
<Typography sx={{color:'white' , }}>
You may have certain rights regarding your personal information, depending on applicable laws. These rights may include:  
</Typography>
<br />
<ul style={{marginLeft:'25px' , lineHeight:'2rem', color:'white', fontFamily:'Montserrat'}}>
          <li> Accessing your personal information</li>
            <li> Rectifying or updating your personal information</li>
            <li> Erasing your personal information.</li>
            <li> Restricting the processing of your personal information</li>
            <li> Objecting to the processing of your personal information  </li>
            <li> Data portability.</li>
          </ul>
        <br />

        <Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
        Acceptance of Policy
</Typography>
<br />
<Typography sx={{color:'white' , }}>

You agree to our privacy policy by accessing this website or using services provided by this website. Please do not use our website or the services provided by this website if you do not agree with any of the terms. We also reserve the right, at our discretion, to amend, modify, add, or remove elements of this policy by simply posting such changes, updates, or modifications on the website. Continued use of our site after the policy terms have been changed indicates your acceptance of these terms.

</Typography>
<br />

<Typography sx={{color:'white' , fontWeight:'600' , fontSize:'1.1rem',color:theme.palette.primary.main}}>
Contact Us
</Typography>
<br />
<Typography sx={{color:'white' , }}>
If you have any questions about this Privacy Policy or our privacy practices,
 please contact us at: 
 <a href="mailto: info@moshlaycreatives.com"
 style={{textDecoration:'none' , color:theme.palette.primary.main, display:'block'}}> info@moshlaycreatives.com </a>
            <a href="tel:+18044303544"
            style={{textDecoration:'none' , color:theme.palette.primary.main, display:'block'}}> +1 804-430-3544 </a>
</Typography>





        {/* <Box>
          <br />
          <Typography sx={{ fontWeight: "600", fontSize: "1.1rem"  , color:theme.palette.primary.main}}>
            1. Acceptance of Terms
          </Typography>

          <Typography sx={{ color: "white" }}>
            Welcome to Khatri Brothers Academy”. These Terms of Service govern
            your use of the academy and its services and also serve as our
            privacy policy. By accessing or using our website, you agree to
            comply with and be bound by these Terms. If you do not agree to
            these Terms, please do not use our website. These terms also include
            guidelines, additional or supplemental terms, policies, and
            disclaimers that may be made available or issued by us from time to
            time.
          </Typography>
          <br />

          <Typography sx={{ fontWeight: "600", fontSize: "1.1rem", color:theme.palette.primary.main }}>
            2. Registration Process and Account Security
          </Typography>

          <Typography sx={{ color: "white" }}>
            To access certain features of our website, you may need to register
            for an account. The registration process is briefly explained on the
            website. It is your responsibility to maintain the confidentiality
            of your account credentials and to monitor all activities that occur
            under your account. If you experience any issues with the use of
            your account, you agree to promptly notify us of any unauthorized
            use of your account or any other security breach. Otherwise, we
            cannot be held responsible for any problems you encounter while
            using your account on our website.
          </Typography>
          <br />

          <Typography sx={{ fontWeight: "600", fontSize: "1.1rem", color:theme.palette.primary.main }}>
            3. Use of our Services
          </Typography>

          <Typography sx={{ color: "white" }}>
            You agree to use the services that we offer through our website only
            for lawful purposes and by these Terms. Please take a moment to
            review all the legal limitations associated with the use of our
            website. We do not condone the use of our website for any unlawful
            purpose. You must not use our website in any way that causes or may
            cause, damage to the website or impairment of the availability or
            accessibility of the website.
          </Typography>
          <br />

          <Typography sx={{ fontWeight: "600" , color:theme.palette.primary.main}}>
            4. Intellectual Property
          </Typography>

          <Typography sx={{ color: "white" }}>
            The content published on our website, including text, graphics,
            logos, images, audio clips, and software, is the property of Khatri
            Brothers Academy and is protected by copyright, trademark, and other
            intellectual property laws. We have the right to ensure the security
            of the content on our website. Students may not share or distribute
            these materials without written permission. You may not use,
            reproduce, modify, or distribute any of the content without our
            prior written consent.
          </Typography>
          <br />

          <Typography sx={{ fontWeight: "600", color:theme.palette.primary.main }}>
            5. User-submitted Content
          </Typography>

          <Typography sx={{ color: "white" }}>
            By creating an account or enrolling on our website, you may have the
            opportunity to submit, post, or display content such as comments,
            reviews, and messages (referred to as User Submitted Content). By
            posting User Content, you grant us a non-exclusive, perpetual,
            irrevocable, and fully sublicensable right to use this content. This
            means we can reproduce, modify, adapt, publish, translate, create
            derivative works, distribute, and display the User Submitted Content
            worldwide in any form of media.
          </Typography>
          <br />

          <Typography sx={{ fontWeight: "600" , color:theme.palette.primary.main}}>6. Termination</Typography>

          <Typography sx={{ color: "white" }}>
            We reserve the right to terminate or suspend your account and access
            to our services on our website without notice. We are not obligated
            to notify you if we have reason to believe that you have violated
            our terms, in which case we may suspend your account immediately.
            The academy also reserves the right to terminate enrollment for
            non-payment of fees, repeated absence, or violation of these terms.
            This includes conduct that we believe violates these terms or is
            harmful to other users of the website or us.
          </Typography>

          <br />

          <Typography sx={{ fontWeight: "600", color:theme.palette.primary.main }}>
            7. Limitation of Liability
          </Typography>

          <Typography sx={{ color: "white" }}>
            Khatri Brothers Academy is not responsible for any tangible
            (physical losses) or intangible (non-physical losses) whether direct
            or indirect or in the case of special or consequential incidents.
            This includes lost profits, punitive damages, goodwill, and the use
            of data, arising from your use of the website or its services. The
            Academy will only be liable for losses that are specifically defined
            in the contract. The academy is only responsible for damages that
            are mentioned in the terms, and individuals are not able to seek
            damages beyond those terms.
          </Typography>

          <br />

          <Typography sx={{ fontWeight: "600", color:theme.palette.primary.main }}>8. Governing Law</Typography>

          <Typography sx={{ color: "white" }}>
            The terms and SOPs mentioned on the website are designed under the
            eyes of the law that is practiced in India. These Terms shall be
            governed by and construed by the laws of India, without regard to
            its conflict of law principles.
          </Typography>

          <br />

          <Typography sx={{ fontWeight: "600", color:theme.palette.primary.main }}>
            9. Changes to Terms
          </Typography>

          <Typography sx={{ color: "white" }}>
            if there is a need to revise or change the terms, Khatri Brothers
            Academy reserves the right to modify or update these Terms at any
            time without prior notice. The academy can make any changes to the
            Terms, which will be posted on our website. You are responsible for
            reviewing the Terms periodically for changes and staying updated.
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default PrivacyPolicyText;
