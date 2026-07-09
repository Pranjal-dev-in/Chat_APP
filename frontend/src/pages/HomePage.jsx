import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import NoChatContainer from "../components/NoChatContainer";
// import "./HomePage.css";

function HomePage() {
  const { selectedUser } = useChatStore();
  return (
    <div className="grid md:grid-cols-[300px_1fr] h-[calc(100vh-56px)] mt-12 md:mt-14">
      <Sidebar />

      {selectedUser ? <ChatContainer /> : <NoChatContainer />}
    </div>
  );
}

export default HomePage;
