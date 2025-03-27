import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";

export default function Video({ videoSrc }) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const videoStyle = {
    objectFit: "cover",
    width: "100%",
    maxWidth: isMobile ? "280px" : "544px",
    height: "auto"
  };

  return (
    <DefaultSection>
      <div>
        <video className="video__player" style={videoStyle} controls>
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
      </div>
    </DefaultSection>
  );
}
