import React from "react";
import { Container } from "@react-email/components";
import DefaultSection from "./ DefaultSection";
import { useMediaQuery } from "react-responsive";
import Typography from "./Typorgraphy";

export default function TitleSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const container = {
    maxWidth: isMobile ? "320px" : "640px",
    width: "100%",
    backgroundColor: "#fff",
    padding: isMobile ? "32px 12px 16px 12px" : "48px",
  };

  return (
    <DefaultSection>
      <Container style={container}>
        <Typography variant="h1">
          Skyrora Newsletter:
          <br />
          Quarter 2-4, 2024 in Review
        </Typography>
        <Typography variant="subtitle">
          A close look at the work carried out by Skyrora over the last few months
        </Typography>
      </Container>
    </DefaultSection>
  );
}
