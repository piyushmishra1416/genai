import { Button } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className=" mt-[7%]">
      <div className="flex  text-white w-screen bg-black">
        <p className="text-[40px]">Get your Al apps built with blazing speed. </p>
        <div>
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

              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#FF4F00",
              },
            }}
            variant="contained"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
