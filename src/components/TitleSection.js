import React from "react";
import { Html, Head, Body, Container, Heading, Text } from "@react-email/components";

const TitleSection = () => {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Container style={container}>
          <Heading style={title__h1}>
            Skyrora Newsletter: Quarter 2-4, 2024 in Review
          </Heading>
          <Text style={subtitle}>
            A close look at the work carried out by Skyrora over the last few months
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const bodyStyle = {
  backgroundColor: "#F5F5F5",
  padding: "20px",
};

const container = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "48px",
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