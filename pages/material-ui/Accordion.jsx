import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionPage() {
  return (
    <Container maxWidth="sm" sx={{ marginBottom: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "lightgray", fontWeight: "bold" }}
        >
          Web App Full-Stack
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Ever since wondering how Netflix has brought its content to millions
            of users with the most engaging UI design and holding their
            attention? It’s all about the technology and functionality that
            makes it web and mobile-ready.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Web App Full-Stack</AccordionSummary>
        <AccordionDetails>
          <p>
            Ever since wondering how Netflix has brought its content to millions
            of users with the most engaging UI design and holding their
            attention? It’s all about the technology and functionality that
            makes it web and mobile-ready.
          </p>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default AccordionPage;
