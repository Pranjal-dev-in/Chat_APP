import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { Clock, CheckCheck } from "lucide-react";

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
        <div className="flex items-center gap-0.5">
          <span className="msg-time">
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          {message.senderId === authUser._id && (
            <span>
              {message.status == "sending" ? (
                <Clock className="size-2.5 text-[#3e2449]" />
              ) : (
                <CheckCheck className="size-4 text-[#3e2449]" />
              )}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default MessageBubble;
