import React from 'react';
import { Box } from '@mui/material';
import './Technologytwo.css';

const Technologytwo = () => {
    const iconSize = 50; // Size of each icon

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

    const positionsBlackCircle = calculatePositions(3, 90, 0); // Radius for black circle, no offset
    const positionsRedCircle = calculatePositions(4, 140, 25); // Radius for red circle, 15 degrees offset
    const positionsBlueCircle = calculatePositions(5, 190, 70); // Radius for blue circle, 30 degrees offset

    return (
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem',
        boxSizing: 'border-box',
        // backgroundColor:'red',
        paddingLeft:'5rem',
        paddingRight:'5rem'
      }}>
        <Box>
            {/* Central Image Fixed */}
            <img
                src="techcenter.svg"
                alt="Central Image"
                className="central-image1"
                style={{ 
                    position: 'absolute', 
                    width: '120px', 
                    height: '120px', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000
                }}
            />
        
            {/* Rotating Wrapper */}

            
            <Box className='maindiv1' sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <Box sx={{ position: 'relative', width: '100%' }}>
                    <svg width="400" height="400">
                        <circle cx="200" cy="200" r="190" stroke="#98c447" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="200" r="140" stroke="#98c447" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="200" r="90" stroke="#98c447" strokeWidth="2" fill="none" />
                    </svg>
                </Box>

                {/* Icons */}
                {positionsBlackCircle.map((pos, index) => (
                    <Box
                        key={index}
                        className="rotating-wrapper-black1"
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
                                alt={`Icon ${index + 190}`}
                                className="rotating-iconblack1"
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
                        className="rotating-wrapper-red1"
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
                                className="rotating-iconred1"
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
                        className="rotating-wrapper-blue1"
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
                                className="rotating-iconblue1"
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
    );
}

export default Technologytwo;
