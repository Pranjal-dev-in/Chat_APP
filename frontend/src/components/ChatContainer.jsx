import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useChatStore } from "../store/useChatStore";
import ProfileView from "./ProfileView";
// import "./ChatContainer.css";

function ChatContainer() {
  const { isProfileShow } = useChatStore();

  if (!isProfileShow) {
    return (
      <section className="flex flex-col bg-[#09000e] overflow-hidden relative">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </section>
    );
  } else {
    return <ProfileView />;
  }
}

export default ChatContainer;
