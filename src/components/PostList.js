import React from "react";
import { Container } from "@react-email/components";
import { useMediaQuery } from "react-responsive";
import Image from "./Image";
import Button from "./Button";
import Divider from "./Divider";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import DefaultSection from "./DefaultSection";

export default function PostList() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const container = {
    maxWidth: "640px",
    backgroundColor: "#fff",
    padding: isMobile ? "0px 12px" : "24px 48px",

  };

  const content = {
    maxWidth: "544px",
    width: "100%",
  };

  return (
    <>
      <DefaultSection marginBottom="0px">
        <Container style={container}>
          <div style={content}>
            <Image src="images/image-1.png" alt="Post image" />
            <Heading headingType="h3" marginBottom="16px">A letter from our CEO</Heading>
            <Paragraph >Dear Skyrora!</Paragraph>
            <Paragraph>
              As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.
            </Paragraph>
            <Paragraph>
              This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.
            </Paragraph>
            <Paragraph>
              Let us look to 2025 with hope and determination. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.
            </Paragraph>
            <Paragraph>
              Wishing you and your families a New Year filled with hope, health, and happiness.
            </Paragraph>
            <Paragraph>
              With gratitude and respect,<br />
              Volodymyr Levykin,<br />
              CEO Skyrora
            </Paragraph>
          </div>
        </Container>
      </DefaultSection>
      <Container style={container}>
        <Divider />
      </Container>
      <DefaultSection marginBottom="0px">
        <Container style={container}>
          <div style={content}>
            <Image src="images/image-2.png" alt="Post image" />
            <Heading headingType="h3" marginBottom="16px">First stage tank progress</Heading>
            <Paragraph>
              In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.
            </Paragraph>
          </div>
        </Container>
      </DefaultSection>
      <Container style={container}>
        <Divider />
      </Container>
      <DefaultSection marginBottom="0px">
        <Container style={container}>
          <div style={content}>
            <Image src="images/image-3.png" alt="Post image" />
            <Heading headingType="h3" marginBottom="16px">Engine testing and facility upgrades</Heading>
            <Paragraph>
              In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.
            </Paragraph>
          </div>
        </Container>
      </DefaultSection>

      <Container style={container}>
        <div style={content}>
          <Button marginTop="20px" marginBottom="20px" />
        </div>
      </Container>
    </>
  );
}
