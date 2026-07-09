import React from "react";

function NoChatContainer() {
  return (
    <section className="hidden md:flex items-center justify-center relative overflow-hidden bg-[#080010]">
      <canvas id="c" className="absolute inset-0 w-full h-full"></canvas>
      <div className="absolute w-90 h-90 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-[radial-gradient(circle,rgba(61,21,96,0.22)_0%,transparent_68%)] animate-glow-pulse"></div>
      <div className="relative z-2 text-center flex flex-col items-center gap-[1.1rem] animate-fade-up">
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
          <polygon
            points="14,13 3,20 14,27 25,20"
            fill="rgba(155,111,212,.15)"
          />
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
        <div className="font-['Comfortaa',cursive] font-bold text-[1.3rem] text-[#c0a8d8] tracking-[-0.01em]">
          your chats,{" "}
          <em className="not-italic text-[#9b6fd4]">all in one place</em>
        </div>
        <p className="text-[0.78rem] text-[#7a5c88] leading-[1.7] max-w-55">
          select a contact from the left to start a conversation ✨
        </p>
        <div className="flex items-center gap-1.5 text-[0.72rem] text-[#3e2449] bg-[rgba(155,111,212,0.07)] border border-[rgba(155,111,212,0.12)] px-3.5 py-1.5 rounded-full animate-pulse-fade">
          ← pick someone to chat with
        </div>
      </div>
    </section>
  );
}

export default NoChatContainer;
