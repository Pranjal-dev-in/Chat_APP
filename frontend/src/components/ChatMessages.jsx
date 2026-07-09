import React, { useEffect, useRef, Fragment } from "react";
import { useChatStore } from "../store/useChatStore";
import MessageBubble from "./MessageBubble";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { formatMessageDate } from "../lib/helper";

function ChatMessages() {
  const {
    messages,
    isMessageLoading,
    getMessage,
    selectedUser,
    subscribeToMessage,
    unSubscribeFromMessage,
  } = useChatStore();
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!selectedUser) return;
    getMessage(selectedUser._id);
    subscribeToMessage();

    return () => unSubscribeFromMessage();
  }, [
    selectedUser?._id,
    getMessage,
    subscribeToMessage,
    unSubscribeFromMessage,
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  if (isMessageLoading) {
    return <MessageSkeleton />;
  }

  return (
    <div className="flex-1 overflow-y-auto pt-16 pr-[1.2rem] pl-[1.2rem] pb-2 max-md:pb-16 flex flex-col gap-[0.6rem] [&::-webkit-scrollbar]:w-0.75 [&::-webkit-scrollbar-thumb]:bg-[#3e2449] [&::-webkit-scrollbar-thumb]:rounded-[3px]">
      {messages.map((msg, index) => {
        const currentDate = new Date(msg.createdAt).toDateString();
        const prevDate =
          index > 0
            ? new Date(messages[index - 1].createdAt).toDateString()
            : null;
        const showDateDivider = currentDate !== prevDate;
        return (
          <React.Fragment key={msg._id}>
            {showDateDivider && (
              <div className="text-center text-[0.65rem] text-[#3e2449] py-[0.4rem] tracking-[0.04em]">
                {formatMessageDate(msg.createdAt)}
              </div>
            )}

            <MessageBubble message={msg} />
          </React.Fragment>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatMessages;
