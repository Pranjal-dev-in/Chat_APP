import React from "react";
import "./MessageSkeleton.css";

function MessageSkeleton() {
  return (
    <div className="sk-messages">
      <div className="sk-msg them w-mid sk-m1">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg me w-short sk-m2">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg them w-long sk-m3">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg me w-xl sk-m4">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg them w-xs sk-m5">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg me w-mid sk-m6">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg them w-long sk-m7">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
      <div className="sk-msg me w-short sk-m8">
        <div className="sk sk-bubble"></div>
        <div className="sk sk-msg-time"></div>
      </div>
    </div>
  );
}

export default MessageSkeleton;
