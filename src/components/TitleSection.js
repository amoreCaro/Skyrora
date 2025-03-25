import React from "react";
import { Container } from "@react-email/components";
import DefaultSection from "./DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";
import Paragraph from "./Paragraph/Paragraph";
import Heading from "./Heading/Heading";

export default function TitleSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const container = {
    maxWidth: isMobile ? "320px" : "640px",
    width: "100%",
    backgroundColor: "#fff",
    padding: isMobile ? "32px 12px 16px 12px" : "48px 48px 0px 48px",
  };

  return (
    <DefaultSection marginBottom="0px">
      <Container style={container}>
        <Heading headingType="h1" marginBottom="20px">
          Skyrora Newsletter:<br />
          Quarter 2-4, 2024 in Review
        </Heading>
        <Paragraph variant="subtitle" marginBottom="0px">
          A close look at the work carried out by Skyrora over the last few months
        </Paragraph>

      </Container>
    </DefaultSection>
  );
}
