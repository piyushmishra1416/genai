import React from "react";
import Image from "next/image";

interface SectionProps {
  coloredText: string;
  heading: string;
  paragraph: string;
  imagefile: string;
  flexDirection?: "row" | "row-reverse";
}

const Section: React.FC<SectionProps> = ({
  coloredText,
  heading,
  paragraph,
  imagefile,
  flexDirection = "row",
}) => {
  const paddingDirection = flexDirection === "row" ? "pr" : "pl";
  const flexStyle: React.CSSProperties = {
    flexDirection: flexDirection === "row" ? "row" : "row-reverse",
  };
  return (
    <div
      className={`flex mx-[8%] mt-[7%] flex-${flexDirection}`}
      style={flexStyle}
    >
      <div className={`flex-1 ${paddingDirection}-[6%] items-center`}>
        <h1 className="font-semibold text-[52px] leading-[58px]">
          {" "}
          <span className="text-[#FF4F00]">{coloredText} </span>
          {heading}{" "}
        </h1>
        <p className="mt-6 text-lg text-[#374151]">{paragraph}</p>
      </div>
      <div className="flex-1">
        <Image src={imagefile} alt="image" />
      </div>
    </div>
  );
};

export default Section;
