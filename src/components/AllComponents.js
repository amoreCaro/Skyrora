import React from "react";
import { useMediaQuery } from "react-responsive";
import { getField } from "./getField/getField";

export default function AllComponents({ attributes, setAttributes }) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const containerStyle = {
    maxWidth: "640px",
    backgroundColor: "#fff",
    // padding: isMobile ? "0px 12px" : "22px 48px",
  };
  const marginValue = window.innerWidth < 430 ? "0px" : "24px";

  return (
    <div style={containerStyle}>


      {/* Title Section */}
      {getField("heading", 1, "Skyrora newsletter. Quarter 2-4, 2024 in review", setAttributes, "h1", marginValue, marginValue)}
      {getField("paragraph", 1, "A close look at the work carried out by Skyrora over the last few months", setAttributes, undefined, "", "18px", "30px", "40px", true)}

      {/* Item_1 */}
      {getField("Image", "image", { imageUrl: "images/image-1.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "A letter from our CEO", setAttributes, "h3")}
      {getField("paragraph", 1, "Dear Skyrora!", setAttributes, undefined)}
      {getField("paragraph", 1, "As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.", setAttributes, undefined)}
      {getField("paragraph", 1, "This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose.", setAttributes, undefined)}
      {getField("paragraph", 1, "Let us look to 2025 with hope and determination.", setAttributes, undefined)}
      {getField("paragraph", 1, "Wishing you and your families a New Year filled with hope, health, and happiness.", setAttributes, undefined, "16px", "40px", "12px")}
      {getField("paragraph", 1, "With gratitude and respect,", setAttributes, undefined)}
      {getField("paragraph", 1, "Volodymyr Levykin,", setAttributes, undefined)}
      {getField("paragraph", 1, "CEO Skyrora", setAttributes, undefined)}

      {/* Divider */}
      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}

      {/* Item_2 */}
      {getField("Image", "image", { imageUrl: "images/image-2.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "First stage tank progress", setAttributes, "h3")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have restructured our manufacturing division...", setAttributes)}
      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}

      {/* Item_3 */}
      {getField("Image", "image", { imageUrl: "images/image-3.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "Engine testing and facility upgrades", setAttributes, "h3")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have restructured our manufacturing division...", setAttributes)}
      {getField("button", "button", "More news", setAttributes)}

      {/* Components */}
      {getField("paragraph", 1, "<a>A close look at the</a> work carried out by Skyrora over the last few months", setAttributes, undefined, "", "18px", true)}
      {getField("List", 1, "Item 1", setAttributes)}
      {getField("quote", 1, { person: "John Doe", position: "CEO" }, setAttributes)}
      {getField("collage", 1, { images: ["images/collage-1.png", "images/collage-2.png", "images/collage-3.png", "images/collage-4.png", "images/collage-5.png", "images/collage-6.png", "images/collage-7.png", "images/collage-8.png"] }, setAttributes)}
      {getField("backgroundImage", "backgroundImage", { imageUrl: "/images/image-1.png" }, setAttributes)}
      {getField("video", 1, { videoSrc: "https://example.com/video.mp4" }, setAttributes)}
      {getField("grid", 1, {
        columns: 2,
        children: [
          <p key="1">In the battle against coronavirus, we have restructured our manufacturing division...</p>,
          <p key="2">In the battle against coronavirus, we have restructured our manufacturing division...</p>,
        ]
      }, setAttributes)}
    </div>
  );
}
