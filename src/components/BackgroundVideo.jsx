  import React from 'react';
  import './BackgroundVideo.css';
  import vido from '../../src/assets/bnar.mp4';
  import vido2 from '../../src/assets/bnar2.mp4';
  import { useTheme, useMediaQuery } from '@mui/material';

  const BackgroundVideo = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    console.log('isSmall:', isSmall); // Add this line to check the value of isSmall

    return (
      <div className="video-container">
        {/* {isSmall ? ( */}
          <video autoPlay muted loop className="video-background1">
            <source src={vido2} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        {/* ) : ( */}
          <video autoPlay muted loop className="video-background2">
            <source src={vido} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        {/* )} */}
        <div className="content">
          {/* Your content goes here */}
          {/* <h1>Welcome to Our Website</h1> */}
          {/* <p>Enjoy the experience</p> */}
        </div>
      </div>
    );
  };

  export default BackgroundVideo;
