import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function MessageBubble({ message }) {
  const { authUser } = useAuthStore();

  return (
    <>
      <div
        className={`msg ${message.senderId === authUser._id ? "me" : "them"}`}
      >
        <div className="bubble">
          {message.image && (
            <div className="w-60">
              <img src={message.image} />
            </div>
          )}
          {message.text}
        </div>
        <span className="msg-time">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </div>
    </>
  );
}

export default MessageBubble;
