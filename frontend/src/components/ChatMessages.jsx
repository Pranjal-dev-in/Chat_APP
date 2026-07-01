import React, { useEffect, useRef, Fragment } from "react";
import "./ChatMessage.css";
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
    <div className="messages">
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
              <div className="date-sep">{formatMessageDate(msg.createdAt)}</div>
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
