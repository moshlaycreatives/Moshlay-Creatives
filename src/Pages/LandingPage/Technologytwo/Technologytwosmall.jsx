import React from 'react';
import { Box } from '@mui/material';
import './Technologytwosmall.css';

const Technologytwosmall = () => {
  const iconSize = 25; // Size of each icon

  // Arrays of image URLs for each circle
  const iconUrlsBlackCircle = ['image13.svg', 'image14.svg', 'image15.svg'];
  const iconUrlsRedCircle = ['image13.svg', 'image14.svg', 'image15.svg', 'image16.svg'];
  const iconUrlsBlueCircle = ['image13.svg', 'image14.svg', 'image15.svg', 'image16.svg', 'image13.svg'];

  // Calculate positions for icons around the circles
  const calculatePositions = (numIcons, radius, offset = 0) => {
    return Array.from({ length: numIcons }, (_, index) => {
      const angle = ((index * 360) / numIcons) + offset;
      const radians = (angle * Math.PI) / 180;
      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;
      return { x, y, angle };
    });
  };

  const positionsBlackCircle = calculatePositions(3, 50, 0); // Radius for black circle, no offset
  const positionsRedCircle = calculatePositions(4, 80, 25); // Radius for red circle, with offset
  const positionsBlueCircle = calculatePositions(5, 110, 10); // Radius for blue circle, with offset

  return (
    <>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem',
        boxSizing: 'border-box',
        paddingLeft: '5rem',
        paddingRight: '5rem'
      }}>
        <Box>
          {/* Central Image Fixed */}
          <img
            src="techcenter.svg"
            alt="Central Image"
            className="central-image"
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1000
            }}
          />

          {/* Rotating Wrapper */}
          <Box className="maindiv" sx={{
            position: 'relative',
            width: '300px', // Increased width
            height: '300px', // Increased height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <svg width="300" height="300">
              <circle cx="150" cy="150" r="110" stroke="#98c447" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="80" stroke="#98c447" strokeWidth="2" fill="none" />
              <circle cx="150" cy="150" r="50" stroke="#98c447" strokeWidth="2" fill="none" />
            </svg>

            {/* Icons */}
            {positionsBlackCircle.map((pos, index) => (
              <Box
                key={index}
                className="rotating-wrapper-black"
                sx={{
                  position: 'absolute',
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  top: `calc(50% + ${pos.y}px - ${iconSize / 2}px)`,
                  left: `calc(50% + ${pos.x}px - ${iconSize / 2}px)`,
                }}
              >
                <Box>
                  <img
                    src={iconUrlsBlackCircle[index]}
                    alt={`Icon ${index + 1}`}
                    className="rotating-icon"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              </Box>
            ))}

            {positionsRedCircle.map((pos, index) => (
              <Box
                key={index}
                className="rotating-wrapper-red"
                sx={{
                  position: 'absolute',
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  top: `calc(50% + ${pos.y}px - ${iconSize / 2}px)`,
                  left: `calc(50% + ${pos.x}px - ${iconSize / 2}px)`,
                }}
              >
                <Box>
                  <img
                    src={iconUrlsRedCircle[index]}
                    alt={`Icon ${index + 1}`}
                    className="rotating-icon"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              </Box>
            ))}

            {positionsBlueCircle.map((pos, index) => (
              <Box
                key={index}
                className="rotating-wrapper-blue"
                sx={{
                  position: 'absolute',
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  top: `calc(50% + ${pos.y}px - ${iconSize / 2}px)`,
                  left: `calc(50% + ${pos.x}px - ${iconSize / 2}px)`,
                }}
              >
                <Box>
                  <img
                    src={iconUrlsBlueCircle[index]}
                    alt={`Icon ${index + 1}`}
                    className="rotating-icon"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Technologytwosmall;
