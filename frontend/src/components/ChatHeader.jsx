import React from "react";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../store/useChatStore";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser, setProfileShow } = useChatStore();
  const { onlineUser } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="fixed w-full z-10 py-3 px-[1.2rem] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between shrink-0 bg-[rgba(9,0,14,0.6)] backdrop-blur-md">
      <div className="flex items-center gap-3">
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
        <div className="w-9 h-9 rounded-full bg-[#3d1560] flex items-center justify-center text-[0.72rem] font-semibold text-[#c9a0f5] border-[1.5px] border-[#7a52aa] shrink-0 relative">
          {selectedUser.profilePic ? (
            <>
              <img
                src={selectedUser.profilePic}
                alt="dp"
                className="h-full rounded-full"
              />
              {onlineUser.includes(selectedUser._id) && (
                <span className="absolute bottom-px right-px w-2.25 h-2.25 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
              )}
            </>
          ) : (
            <>
              <User className="size-4" />
              {onlineUser.includes(selectedUser._id) && (
                <span className="absolute bottom-px right-px w-2.25 h-2.25 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
              )}
            </>
          )}
        </div>
        <div onClick={() => setProfileShow(true)} className="cursor-pointer">
          <div className="text-[0.88rem] font-semibold text-[#cdb8dd]">
            {selectedUser.fullName}
          </div>
          {onlineUser.includes(selectedUser._id) ? (
            <div className="text-[0.68rem] flex items-center gap-1 text-[#5cb85c]">
              Online
            </div>
          ) : (
            <div className="text-[0.68rem] flex items-center gap-1 text-[#7a5c88]">
              Offline
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex gap-1">
        <button
          className="w-[30px] h-[30px] border-none bg-transparent rounded-[7px] cursor-pointer text-[#7a5c88] flex items-center justify-center transition-colors duration-150 hover:bg-[rgba(155,111,212,0.12)] hover:text-[#9b6fd4]"
          title="Call"
        >
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
        <button
          className="w-[30px] h-[30px] border-none bg-transparent rounded-[7px] cursor-pointer text-[#7a5c88] flex items-center justify-center transition-colors duration-150 hover:bg-[rgba(155,111,212,0.12)] hover:text-[#9b6fd4]"
          title="Video"
        >
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
        <button
          className="w-[30px] h-[30px] border-none bg-transparent rounded-[7px] cursor-pointer text-[#7a5c88] flex items-center justify-center transition-colors duration-150 hover:bg-[rgba(155,111,212,0.12)] hover:text-[#9b6fd4]"
          title="More"
        >
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
