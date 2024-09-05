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
    question: "What are your help desk hours?",
    answer: "Our help desk is available 24/7 to assist you with any IT issues."
  },
  {
    question: "What is your response time? ",
    answer: " We make sure to respond as soon as possible. We strive to respond to all support requests within 24 hours."
  },
  {
    question: "What is the typical contract length?",
    answer: "Our contracts are typically customized to meet client needs, but average contract lengths range from six to twelve months."
  },
  {
    question: "How do you price your services?",
    answer: "Yes, we provide comprehensive penetration testing services to identify vulnerabilities in your systems."
  },
  {
    question: "How do you ensure the security of my data?",
    answer: "We employ industry-leading security measures, including encryption, firewalls, and regular security audits."
  },
  {
    question: "How do you help with data privacy compliance (GDPR, CCPA, etc.)? ",
    answer: "We assist with compliance by providing expert guidance and implementing necessary measures."
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
            backgroundColor: '#1c2844',
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
              fontFamily:'Montserrat',
               fontSize:isSmall ? "0.9rem":'1rem',
               fontWeight:'400'
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
