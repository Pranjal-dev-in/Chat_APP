import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { Clock, CheckCheck } from "lucide-react";

function MessageBubble({ message }) {
  const { authUser } = useAuthStore();
  const isMe = message.senderId === authUser._id;

  return (
    <>
      <div
        className={`flex flex-col max-w-[68%] animate-msg-in ${
          isMe ? "self-end items-end" : "self-start items-start"
        }`}
      >
        <div
          className={`px-[0.85rem] py-[0.55rem] rounded-[14px] text-[0.8rem] leading-normal wrap-break-word ${
            isMe
              ? "bg-[#4e1e78a6] text-[#d4b8f0] border border-[rgba(155,111,212,0.2)] rounded-br-sm"
              : "bg-[rgba(25,5,38,0.8)] text-[#b8a0cc] border border-[rgba(255,255,255,0.05)] rounded-bl-sm"
          }`}
        >
          {message.image && (
            <div className="w-60">
              <img src={message.image} />
            </div>
          )}
          {message.text}
        </div>
        <div className="flex items-center gap-0.5">
          <span className="text-[0.6rem] text-[#3e2449] mt-0.75 px-1">
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          {isMe && (
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
