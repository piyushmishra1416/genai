import ResponsiveAppBar from "@/components/Appbar";
import FlatiPad from "@/assets/FlatiPadsvg.svg";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
              sx={{ marginTop: 5, backgroundColor: "#FF4F00",  borderRadius: '10px', padding: '11px 26px' }}
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
    </main>
  );
}
