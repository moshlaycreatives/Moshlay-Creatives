import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useTheme, useMediaQuery, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Faqs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

   const faqsData =[{
    question: "What is Moshlay Creatives?",
    answer: "Moshlay Creatives is a creative agency specializing in innovative design solutions."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us via email at contact@moshlaycreatives.com or call us at (123) 456-7890."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including graphic design, web development, branding, and marketing."
  },
  {
    question: "Where are you located?",
    answer: "We are located in the heart of New York City, but we offer our services worldwide."
  },
  {
    question: "Where are you located?",
    answer: "We are located in the heart of New York City, but we offer our services worldwide."
  }
]

  return (
    <Box sx={{   color: 'white' }}>
      {/* <Typography variant="h4" sx={{ marginBottom: '2rem', color: theme.palette.primary.main }}>
        Frequently Asked Questions
      </Typography> */}
      {faqsData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: '#18232d',
            color: 'white',
            marginBottom: '.5rem', 
            borderRadius:'5px'
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton>
                {expanded === index ? <CloseIcon sx={{ color: 'white' }} /> : <AddIcon sx={{ color: 'white' }} />}
              </IconButton>
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{ color: expanded === index ? theme.palette.primary.main : 'white' }}
          >
            <Typography  sx={{
              fontSize:isSmall? '1rem' : '1.2rem',
              fontFamily:'Montserrat',
              fontWeight:400
            }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'white', }}>
            <Typography sx={{
              fontFamily:'Montserrat', fontSize:'1rem', fontWeight:'400'
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faqs;
