import React from "react";
import "./ChatHeader.css";
import { useChatStore } from "../store/useChatStore";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUser } = useAuthStore();

  return (
    <div className="chat-header fixed w-full z-10">
      <div className="chat-header-left">
        <button onClick={() => setSelectedUser(null)}>
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>
        <div className="chat-header-avatar">
          {selectedUser.profilePic ? (
            <>
              <img src={selectedUser.profilePic} alt="dp" />
              {onlineUser.includes(selectedUser._id) && (
                <span className="online-dot"></span>
              )}
            </>
          ) : (
            <>
              <User className="size-4" />
              {onlineUser.includes(selectedUser._id) && (
                <span className="online-dot"></span>
              )}
            </>
          )}
        </div>
        <div className="chat-header-info">
          <div className="chat-header-name">{selectedUser.fullName}</div>
          {onlineUser.includes(selectedUser._id) ? (
            <div className="chat-header-status online">Online</div>
          ) : (
            <div className="chat-header-status">Offline</div>
          )}
        </div>
      </div>
      {/* <div className="chat-header-actions">
        <button className="chat-action" title="Call">
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
        <button className="chat-action" title="Video">
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button className="chat-action" title="More">
          <svg
            width="15"
            height="15"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div> */}
    </div>
  );
}

export default ChatHeader;
