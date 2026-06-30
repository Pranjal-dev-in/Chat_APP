import React from "react";
import "./NoChatContainer.css";

function NoChatContainer() {
  return (
    <section className="right-panel">
      <canvas id="c"></canvas>
      <div className="right-glow"></div>
      <div className="empty-content">
        <svg
          className="empty-gem"
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
        <div className="empty-title">
          your chats, <em>all in one place</em>
        </div>
        <p className="empty-sub">
          select a contact from the left to start a conversation ✨
        </p>
        <div className="arrow-hint">← pick someone to chat with</div>
      </div>
    </section>
  );
}

export default NoChatContainer;
