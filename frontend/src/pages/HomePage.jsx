import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import NoChatContainer from "../components/NoChatContainer";
import "./HomePage.css";

function HomePage() {
  const { selectedUser } = useChatStore();
  return (
    <div className="app">
      <Sidebar />

      {selectedUser ? <ChatContainer /> : <NoChatContainer />}
    </div>
  );
}

export default HomePage;
