import React from "react";
import { useChatStore } from "../store/useChatStore";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { User } from "lucide-react";

function ProfileView() {
  const { selectedUser, setProfileShow } = useChatStore();
  const { onlineUser } = useAuthStore();
  const navigate = useNavigate();

  if (!selectedUser) {
    return navigate("/");
  }
  return (
    <div className="bg-[#0d0012] text-[#cdb8dd] w-full md:w-full">
      <div className="sticky top-0 z-10 flex items-center gap-3 px-4 h-14 bg-[#0a000f]/90 backdrop-blur-xl border-b border-white/5">
        <button
          onClick={() => setProfileShow(false)}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-[#7a5c88] hover:bg-white/6 hover:text-[#cdb8dd] transition-all duration-150"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>
        <span className="font-comfortaa font-bold text-sm text-[#cdb8dd]">
          contact info
        </span>
      </div>

      <div className="max-w-120 mx-auto px-4 ">
        <div className="fade-up flex flex-col items-center pt-8 pb-6 gap-3">
          <div className="relative w-28 h-28">
            {selectedUser.profilePic ? (
              <>
                <img
                  src={selectedUser.profilePic}
                  alt="dp"
                  className="h-full rounded-full"
                />
                {onlineUser.includes(selectedUser._id) && (
                  <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
                )}
              </>
            ) : (
              <>
                <div className="relative w-28 h-28 bg-[#3d1560] flex items-center justify-center font-semibold text-[#c9a0f5] border-[1.5px] border-[#7a52aa] shrink-0 rounded-full">
                  <User className="size-8" />
                  {onlineUser.includes(selectedUser._id) && (
                    <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#5cb85c] border-2 border-[#09000e]"></span>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="text-center">
            <h1 className="font-comfortaa font-bold text-xl text-[#cdb8dd]">
              {selectedUser.fullName}
            </h1>
            {onlineUser.includes(selectedUser._id) ? (
              <p className="text-xs text-green-500 mt-0.5 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                online
              </p>
            ) : (
              <p className="text-xs text-[#7a5c88] mt-0.5 flex items-center justify-center gap-1">
                offline
              </p>
            )}
          </div>

          {/* <div className="flex gap-4 mt-2">
            <button className="flex flex-col items-center gap-1.5 group">
              <div className="w-11 h-11 rounded-full bg-[#3d1560] border border-[#9b6fd4]/20 flex items-center justify-center text-[#9b6fd4] group-hover:bg-[#4e1e78] transition-colors duration-150">
                <svg
                  width="17"
                  height="17"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span className="text-[0.65rem] text-[#7a5c88]">message</span>
            </button>

            <button className="flex flex-col items-center gap-1.5 group">
              <div className="w-11 h-11 rounded-full bg-[#3d1560] border border-[#9b6fd4]/20 flex items-center justify-center text-[#9b6fd4] group-hover:bg-[#4e1e78] transition-colors duration-150">
                <svg
                  width="17"
                  height="17"
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
              </div>
              <span className="text-[0.65rem] text-[#7a5c88]">audio</span>
            </button>

            <button className="flex flex-col items-center gap-1.5 group">
              <div className="w-11 h-11 rounded-full bg-[#3d1560] border border-[#9b6fd4]/20 flex items-center justify-center text-[#9b6fd4] group-hover:bg-[#4e1e78] transition-colors duration-150">
                <svg
                  width="17"
                  height="17"
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
              </div>
              <span className="text-[0.65rem] text-[#7a5c88]">video</span>
            </button>

            <button className="flex flex-col items-center gap-1.5 group">
              <div className="w-11 h-11 rounded-full bg-[#3d1560] border border-[#9b6fd4]/20 flex items-center justify-center text-[#9b6fd4] group-hover:bg-[#4e1e78] transition-colors duration-150">
                <svg
                  width="17"
                  height="17"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
              <span className="text-[0.65rem] text-[#7a5c88]">more</span>
            </button>
          </div> */}
        </div>

        <div className="fade-up-1 bg-[#0f0018] border border-white/6 rounded-2xl overflow-hidden mb-3">
          <div className="flex items-start gap-4 px-4 py-4 border-b border-white/5">
            <div className="mt-0.5 text-[#3e2449] shrink-0">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[#cdb8dd] leading-relaxed">
                hey there! using nexchat 💬✨
              </p>
              <p className="text-[0.65rem] text-[#3e2449] mt-1">about</p>
            </div>
          </div>

          {selectedUser.phoneNo && (
            <div className="flex items-center gap-4 px-4 py-4 border-b border-white/5">
              <div className="text-[#3e2449] shrink-0">
                <svg
                  width="16"
                  height="16"
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
              </div>
              <div>
                <p className="text-sm text-[#cdb8dd]">+91 98765 43210</p>
                <p className="text-[0.65rem] text-[#3e2449] mt-0.5">mobile</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 px-4 py-4">
            <div className="text-[#3e2449] shrink-0">
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[#cdb8dd]">{selectedUser.email}</p>
              <p className="text-[0.65rem] text-[#3e2449] mt-0.5">email</p>
            </div>
          </div>
        </div>

        {/* <div className="fade-up-2 bg-[#0f0018] border border-white/[0.06] rounded-2xl overflow-hidden mb-3">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
            <span className="text-xs font-semibold text-[#7a5c88] uppercase tracking-widest">
              media & files
            </span>
            <button className="text-[0.72rem] text-[#9b6fd4] font-semibold hover:text-[#c9a0f5] transition-colors">
              see all
            </button>
          </div>

          <div className="grid grid-cols-4 gap-0.5 p-0.5">
            <div className="aspect-square bg-[#1a0028] rounded-sm flex items-center justify-center text-[#3e2449]">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 15l-5-5L5 21"
                />
              </svg>
            </div>
            <div className="aspect-square bg-[#1a0028] rounded-sm flex items-center justify-center text-[#3e2449]">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 15l-5-5L5 21"
                />
              </svg>
            </div>
            <div className="aspect-square bg-[#1a0028] rounded-sm flex items-center justify-center text-[#3e2449]">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 15l-5-5L5 21"
                />
              </svg>
            </div>
            <div className="aspect-square bg-[#1a0028] rounded-sm flex items-center justify-center">
              <span className="text-xs font-bold text-[#7a5c88]">+12</span>
            </div>
          </div>
        </div> */}

        <div className="fade-up-3 bg-[#0f0018] border border-white/6 rounded-2xl overflow-hidden">
          <button className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/3 transition-colors border-b border-white/4">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c97070"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
            <span className="text-sm text-[#c97070]">
              block {selectedUser.fullName}
            </span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/3 transition-colors">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c97070"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-sm text-[#c97070]">
              report {selectedUser.fullName}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
