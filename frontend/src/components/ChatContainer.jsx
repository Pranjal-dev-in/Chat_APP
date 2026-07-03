import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import "./ChatContainer.css";

function ChatContainer() {
  return (
    <section className="chat-panel relative">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </section>
  );
}

export default ChatContainer;
