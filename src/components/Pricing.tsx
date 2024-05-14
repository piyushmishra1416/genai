import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

export default function Widget() {
  return (
    <div className="flex justify-center items-center space-x-6 h-screen p-4  mx-[6%] bg-zinc-100">
      <div className="bg-white p-6 w-[30%] h-[60%] rounded-[24px] shadow-lg ">
        <div className="flex flex-col justify-center items-center mt-[5%]">
          <h2 className="text-2xl font-bold mb-2 text-zinc-800">Explorer</h2>
          <p className="text-4xl font-bold text-zinc-800">
            $4,99<span className="text-[#9CA3AF]">/mo</span>
          </p>
        </div>
        <ul className=" space-y-2 mt-[13%] text-zinc-600">
          <li>
            {" "}
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />{" "}
            Market Trend Analysis
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Limited Query Mapping
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Standard Dashboards
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Email Notifications
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Entry-Level Support
          </li>
        </ul>
        <Button
      sx={{
        marginTop: 5,
        backgroundColor: "#ffffff",
        color: "#000000",
        borderRadius: "10px",
        padding: "11px 26px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        width: "100%",
        "&:hover": {
          backgroundColor: "#FF4F00", 
          color: "#ffffff", 
        },
      }}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
    >
      Get Now
    </Button>
      </div>

      <div className="bg-white p-6 rounded-[24px] shadow-lg w-[30%] h-[70%]   relative border-2 border-orange-500">
        <div className="flex flex-col justify-center items-center mt-[5%]">
          <h2 className="text-2xl font-bold mb-2 text-zinc-800">Innovator</h2>
          <p className="text-4xl font-bold text-zinc-800">
            $19.99<span className="text-[#9CA3AF]">/mo</span>
          </p>
        </div>
        <ul className="space-y-2 mt-[13%]  text-zinc-600">
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Everything in Explorer, plus:
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Predictive Analytics
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Advanced Query Mapping
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Customizable Dashboards
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Smart Alert System
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Extended Support
          </li>
        </ul>
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
        width: "100%",
        "&:hover": {
          backgroundColor: "#ffffff", 
          color: "#FF4F00", 
        },
      }}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
    >
      Get Now
    </Button>
      </div>

      <div className="bg-white p-6 rounded-[24px] w-[30%] h-[65%]  shadow-lg ">
        <div className="flex flex-col justify-center items-center mt-[5%]">
          <h2 className="text-2xl font-bold mb-2 text-zinc-800">Visionary</h2>
          <p className="text-4xl font-bold text-zinc-800">
            $49.99<span className="text-[#9CA3AF]">/mo</span>
          </p>
        </div>
        <ul className=" space-y-2 mt-[13%] ml-4 text-zinc-600">
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Everything in Innovator, plus:
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Competitor Benchmarking
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Holistic Market Visualization
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Adaptive Strategy Planner
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            24/7 Priority Support
          </li>
          <li>
            <ArrowForwardIcon sx={{ color: "#FF4F00", marginRight: 1 }} />
            Custom Integrations
          </li>
        </ul>
        <Button
          sx={{
            marginTop: 5,
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "10px",
            padding: "11px 26px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "normal",
            fontStyle: "normal",
            width: "100%",
            "&:hover": {
              backgroundColor: "#FF4F00", 
              color: "#ffffff", 
            },
          }}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Get Now
        </Button>
      </div>
    </div>
  );
}
