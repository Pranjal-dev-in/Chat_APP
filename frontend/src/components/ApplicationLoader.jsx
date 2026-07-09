import React from "react";
import { PulseLoader, BarLoader } from "react-spinners";

function ApplicationLoader() {
  return (
    <div className="relative z-2 text-center flex flex-col items-center justify-center h-screen gap-[1.1rem] animate-fade-up">
      <svg
        className="animate-float-g filter-[drop-shadow(0_0_16px_rgba(155,111,212,0.3))]"
        width="80"
        height="80"
        viewBox="0 0 28 28"
        fill="none"
      >
        <polygon
          points="14,1 25,8 25,20 14,27 3,20 3,8"
          fill="none"
          stroke="#9b6fd4"
          strokeWidth=".8"
          opacity=".7"
        />
        <polygon points="14,1 25,8 14,13" fill="rgba(155,111,212,.2)" />
        <polygon points="14,1 3,8 14,13" fill="rgba(78,30,120,.22)" />
        <polygon points="14,13 3,20 14,27 25,20" fill="rgba(155,111,212,.15)" />
        <line
          x1="3"
          y1="8"
          x2="14"
          y2="13"
          stroke="rgba(155,111,212,.7)"
          strokeWidth=".5"
        />
        <line
          x1="25"
          y1="8"
          x2="14"
          y2="13"
          stroke="rgba(78,30,120,.75)"
          strokeWidth=".5"
        />
        <line
          x1="14"
          y1="1"
          x2="14"
          y2="13"
          stroke="rgba(155,111,212,.6)"
          strokeWidth=".5"
        />
        <line
          x1="14"
          y1="13"
          x2="14"
          y2="27"
          stroke="rgba(78,30,120,.55)"
          strokeWidth=".5"
        />
        <circle cx="14" cy="13" r="2.5" fill="#9b6fd4" />
        <circle
          cx="14"
          cy="13"
          r="5"
          fill="none"
          stroke="#9b6fd4"
          strokeWidth=".35"
          opacity=".3"
        />
      </svg>
      <span className="font-['Comfortaa',cursive] font-bold text-[1.5rem] text-[#cdb8dd] tracking-[0.01em]  relative">
        nex<em className="not-italic text-[#9b6fd4]">chat</em> is loading{" "}
        <PulseLoader
          color="#ffffff"
          size="5px"
          className="absolute top-1 -right-7.5"
        />
      </span>
      <div className="font-['Comfortaa',cursive] font-bold text-[1.04rem] text-[#c0a8d8] tracking-[-0.01em]">
        your chats,{" "}
        <em className="not-italic text-[#9b6fd4]">all in one place</em>
      </div>
      <BarLoader width="180px" color="#9278a8" className="mt-3" height="2px" />
    </div>
  );
}

export default ApplicationLoader;
