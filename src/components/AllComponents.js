import React from "react";
// import { useMediaQuery } from "react-responsive";
import { getField } from "./getField/getField";

export default function AllComponents({ attributes, setAttributes }) {
  // const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  // const containerStyle = {
  //   maxWidth: "640px",
  //   backgroundColor: "#fff",
  //   padding: isMobile ? "0px 12px" : "22px 48px",
  // };

  // const contentStyle = {
  //   maxWidth: "544px",
  //   width: "100%",
  // };

  // const posts = [
  //   {
  //     image: "images/image-1.png",
  //     heading: "A letter from our CEO",
  //     paragraphs: [
  //       "Dear Skyrora!",
  //       "As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.",
  //       "This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.",
  //       "Let us look to 2025 with hope and determination. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.",
  //       "Wishing you and your families a New Year filled with hope, health, and happiness.",
  //       "With gratitude and respect",
  //       "Volodymyr Levykin",
  //       "CEO Skyrora",
  //     ],
  //   },
  //   {
  //     image: "images/image-2.png",
  //     heading: "First stage tank progress",
  //     paragraphs: [
  //       "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.",
  //     ],
  //   },
  //   {
  //     image: "images/image-3.png",
  //     heading: "Engine testing and facility upgrades",
  //     paragraphs: [
  //       "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.",
  //     ],
  //   },
  // ];

  return (
    <>
      {getField("heading", "h2", "Heading", setAttributes)}
      {getField("paragraph", "p", "Heading", setAttributes)}

    </>
  );
}
