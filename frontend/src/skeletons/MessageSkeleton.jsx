import React from "react";

const SK =
  "bg-[linear-gradient(90deg,#1a0025_25%,#220030_50%,#1a0025_75%)] bg-[length:200%_100%] animate-shimmer";

function MessageSkeleton() {
  return (
    <div className="flex-1 overflow-hidden py-4 px-[1.2rem] flex flex-col gap-[0.8rem] mt-14">
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-start [animation-delay:0.06s]">
        <div className={`${SK} h-8.5 w-45 rounded-[13px] rounded-bl-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-end items-end [animation-delay:0.13s]">
        <div className={`${SK} h-8.5 w-30 rounded-[13px] rounded-br-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-start [animation-delay:0.2s]">
        <div className={`${SK} h-8.5 w-60 rounded-[13px] rounded-bl-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-end items-end [animation-delay:0.27s]">
        <div className={`${SK} h-8.5 w-65 rounded-[13px] rounded-br-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-start [animation-delay:0.34s]">
        <div
          className={`${SK} h-8.5 w-22.5 rounded-[13px] rounded-bl-sm`}
        ></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-end items-end [animation-delay:0.41s]">
        <div className={`${SK} h-8.5 w-45 rounded-[13px] rounded-br-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-start [animation-delay:0.48s]">
        <div className={`${SK} h-8.5 w-60 rounded-[13px] rounded-bl-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-end items-end [animation-delay:0.55s]">
        <div className={`${SK} h-8.5 w-30 rounded-[13px] rounded-br-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
      <div className="flex flex-col max-w-[65%] animate-msg-fade self-start [animation-delay:0.62s]">
        <div className={`${SK} h-8.5 w-45 rounded-[13px] rounded-bl-sm`}></div>
        <div className={`${SK} h-2 w-11.25 rounded mt-1`}></div>
      </div>
    </div>
  );
}

export default MessageSkeleton;
