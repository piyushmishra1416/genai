import ResponsiveAppBar from "@/components/Appbar";
import FlatiPad from "@/assets/FlatiPadsvg.svg";
import Image from "next/image";
import { Button, Card } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Section from "@/components/Section";
import image1 from "@/assets/image1.svg";
import Image2 from "@/assets/Image2.svg";
import Image3 from "@/assets/Image3.svg";
import ActionAreaCard from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen font-[inter] flex-col">
      <ResponsiveAppBar />
      <div className="mt-3">
        <div className="flex py-[60px]">
          <div className="  pl-[8%] flex-1 mt-5 ">
            <h1 className=" font-semibold  text-7xl">
              {" "}
              <span className="text-[#FF4F00]">
                Transform Ideas
              </span> <br></br> into apps with Al
            </h1>
            <p className="mt-6 text-lg text-[#374151]">
              Step into a new era of strategic decision-making. Horizon<br></br>{" "}
              empowers businesses in the marketing space with unparalleled
            </p>
            <Button
              sx={{
                marginTop: 5,
                backgroundColor: "#FF4F00",
                borderRadius: "10px",
                padding: "11px 26px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "normal",
                fontStyle: "normal",
              }}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Get Started
            </Button>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Image
              src={FlatiPad}
              alt="Description of the image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="mt-[6%] max-w-[40%] text-center mx-auto">
        <h1 className="font-semibold text-[52px] leading-[58px]">
          Explore the power of AI app generation
        </h1>
        <p className="text-lg mt-[4%] text-[#374151]">
          Unlock the full potential of your tech stack with Horizon's <br></br>{" "}
          intuitive and Unlock the full potential of your tech stack with
          GenAl's intuitive and
        </p>
      </div>
      <Section
        flexDirection="row-reverse"
        imagefile={image1}
        coloredText="Unleash"
        heading="the power of AI with GenAI"
        paragraph="Stay ahead of the curve with our Dynamic Trend Analysis feature.
Unlock the full potential of your tech stack with Horizon's
intuitive and Stay ahead of the curve with our Dynamic Trend
Analysis feature. Unlock the full potential of your tech stack with
Horizon's intuitive and"
      ></Section>
      <Section
        imagefile={Image2}
        coloredText="Unleash"
        heading="the power of AI with GenAI"
        paragraph="Stay ahead of the curve with our Dynamic Trend Analysis feature.
Unlock the full potential of your tech stack with Horizon's
intuitive and Stay ahead of the curve with our Dynamic Trend
Analysis feature. Unlock the full potential of your tech stack with
Horizon's intuitive and"
      ></Section>
      <Section
        flexDirection="row-reverse"
        imagefile={Image3}
        coloredText="Unleash"
        heading="the power of AI with GenAI"
        paragraph="Stay ahead of the curve with our Dynamic Trend Analysis feature.
Unlock the full potential of your tech stack with Horizon's
intuitive and Stay ahead of the curve with our Dynamic Trend
Analysis feature. Unlock the full potential of your tech stack with
Horizon's intuitive and"
      ></Section>
      <div>
        <div className="flex flex-col mt-[9.5%] ">
          <div className="max-w-[65%] flex text-center mx-auto ">
            <h1 className="font-semibold text-[52px] leading-[58px]">
              {" "}
              <span className="text-[#FF4F00]"> Essentially, </span>
              everything you need to ship your first AI App{" "}
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-8 mx-[10%] mt-[5.5%]">
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
                <ActionAreaCard/>
          </div>
        </div>
        <div className="flex mt-[9.5%] ">
          <div className="max-w-[65%] flex text-center mx-auto ">
            <h1 className="font-semibold text-[52px] leading-[58px]">
              {" "}
              <span className="text-[#FF4F00]"> Essentially, </span>
              everything you need to ship your first AI App{" "}
            </h1>
          </div>
          

        </div>
      </div>
    </main>
  );
}
