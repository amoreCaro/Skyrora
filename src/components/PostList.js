import React from "react";
import { Container } from "@react-email/components";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "./ DefaultSection";
import PostImage from "./PostImage";
import Button from "./Button";
import Divider from "./Divider";
import Typography from "./Typorgraphy";

export default function PostList() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const buttonWrapper = {
    marginTop: isMobile ? "26px" : "0px",
  };

  const container = {
    maxWidth: "640px",
    backgroundColor: "#fff",
    padding: isMobile ? "16px 12px" : "0px 48px",
    display:"flex",
    justifyContent: "center",
  };
  const lastContainer = {
    ...container,
    padding: isMobile ? "32px 12px" : "44px 12px",
};

  const content = {
    maxWidth: "544px",
    width: "100%"
  };

  const textWrapper = {
    paddingTop: "24px",
  };

  const titleH3 = {
    color: "#181B24",
    fontWeight: "700",
    fontSize: "21px",
    lineHeight: "120%",
    textTransform: "uppercase",
  };

  return (
    <>
      <DefaultSection>
        <Container style={container}>
          <div style={content}>
            <PostImage src="images/image-1.png" alt="Post image" />
            <div style={textWrapper}>
              <Typography variant="h3" style={titleH3}>
                A letter from our CEO
              </Typography>
              <Typography variant="p" modifiers={["textFirst"]}>
                Dear Skyrora!
              </Typography>
              <Typography variant="p">
                As we bid farewell to another year, I am reminded of the
                extraordinary challenges we have faced and overcome together.
                Whether in the UK or Ukraine, each of you has shown remarkable
                courage, resilience, and dedication.
              </Typography>
              <Typography variant="p">
                This year has tested us in ways we could never have imagined,
                yet it has also reinforced our unity and purpose. Your hard
                work and perseverance inspire me every day, and I am immensely
                proud of what we have achieved despite the uncertainty and fear
                that surround us.
              </Typography>
              <Typography variant="p">
                Let us look to 2025 with hope and determination. May it bring
                peace to those in Ukraine, stability to our operations, and
                continued strength to our team. Together, we can achieve
                greatness, no matter the obstacles.
              </Typography>
              <Typography variant="p">
                Wishing you and your families a New Year filled with hope,
                health, and happiness.
              </Typography>
              <Typography variant="p" modifiers={["textLast"]}>
                With gratitude and respect,
                <br />
                Volodymyr Levykin,
                <br />
                CEO Skyrora
              </Typography>
            </div>
            <Divider />
          </div>
        </Container>
      </DefaultSection>

      <DefaultSection>
        <Container style={container}>
          <div style={content}>
            <PostImage src="images/image-2.png" alt="Post image" />
            <div style={textWrapper}>
              <Typography variant="h3" style={titleH3}>
                First stage tank progress
              </Typography>
              <Typography variant="p" modifiers={["textFirst"]}>
                In the battle against coronavirus, we have re-structured our
                manufacturing division and allocated engineering personnel to
                start producing face visors using 3D printing facilities and
                producing hand sanitiser according to the World Health
                Organisation’s Guidelines.
              </Typography>
            </div>
            <Divider />
          </div>
        </Container>
      </DefaultSection>

      <DefaultSection>
        <Container style={lastContainer}>
          <div style={content}>
            <PostImage src="images/image-3.png" alt="Post image" />
            <div style={textWrapper}>
              <Typography variant="h3" style={titleH3}>
                Engine testing and facility upgrades
              </Typography>
              <Typography variant="p">
                In the battle against coronavirus, we have re-structured our
                manufacturing division and allocated engineering personnel to
                start producing face visors using 3D printing facilities and
                producing hand sanitiser according to the World Health
                Organisation’s Guidelines.
              </Typography>
              <div style={buttonWrapper}>
                <Button />
              </div>
            </div>

          </div>
        </Container>
      </DefaultSection>
    </>
  );
}
