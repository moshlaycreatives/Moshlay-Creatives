import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { Science, Build, RocketLaunch } from '@mui/icons-material';

const stages = [
  {
    title: "Research",
    icon: <Science sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    items: ["Idea", "Requirements", "Technical audit"],
    bgColor: '#003B63',
    vector: 'M10 20L40 20', // Example SVG path for vector line
  },
  {
    title: "Development",
    icon: <Build sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    items: ["Minimum viable product", "Backend development", "Frontend development"],
    bgColor: '#365D25',
    vector: 'M10 20L40 20', // Example SVG path for vector line
  },
  {
    title: "Launch",
    icon: <RocketLaunch sx={{ fontSize: 40, color: '#FFFFFF' }} />,
    items: ["Infrastructure", "Release", "Post-release support"],
    bgColor: '#3B0043',
    vector: 'M10 20L40 20', // Example SVG path for vector line
  },
];

const DevelpmentProcess = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#0A0A0A', color: '#FFFFFF', position: 'relative' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2, color: '#A1FF48' }}>
        Our Software Development Process
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 4 }}>
        With our streamlined software development process, we are able to build extraordinary products within ordinary timescales.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {stages.map((stage, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
            <Paper sx={{ padding: 3, backgroundColor: stage.bgColor, position: 'relative', zIndex: 1, overflow: 'visible' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Box sx={{ marginRight: 2 }}>
                  {stage.icon}
                </Box>
                <Typography variant="h6" sx={{ color: '#A1FF48' }}>
                  {stage.title}
                </Typography>
              </Box>
              <ul style={{ paddingLeft: 20 }}>
                {stage.items.map((item, idx) => (
                  <li key={idx} style={{ listStyleType: 'circle', marginBottom: 8, color: '#FFFFFF' }}>
                    <Typography variant="body1">{item}</Typography>
                  </li>
                ))}
              </ul>
            </Paper>
            {index < stages.length - 1 && (
              <svg height="100" width="100" style={{ position: 'absolute', top: '50%', right: '-50px', transform: 'translateY(-50%)' }}>
                <path d={stage.vector} stroke="#A1FF48" strokeWidth="2" fill="none" />
              </svg>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DevelpmentProcess;
