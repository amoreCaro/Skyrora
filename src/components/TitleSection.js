import React from "react";
import { Heading, Section, Container, Text } from "@react-email/components";

function TitleSection() {
  return (
    <>
      <Section style={body}>
        <Container style={container}>
          <Heading style={title__h1}>
            Skyrora Newsletter: Quarter 2-4, 2024 in Review
          </Heading>
          <Text style={subtitle}>
            A close look at the work carried out by Skyrora over the last few months
          </Text>
        </Container>
      </Section>
    </>
  );
}

const body = {
  backgroundColor: "#181B24",
  // padding: "20px",
  display: "flex",
  justifyContent: "center",
};

const container = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "24px 48px"
};

const title__h1 = {
  color: "#0E0F17",
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "120%",
  textTransform: "uppercase",
};

const subtitle = {
  color: "#0E0F17",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "150%",
};

export default TitleSection;